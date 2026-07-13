import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { partnerCountryLocations } from "@/sections/Page2/data/partnerCountryLocations";

const SECTION_BG = "#1a2744";
const MAP_BG = "#ffffff";
const OCEAN = { r: 255, g: 255, b: 255 };
const MARKER_FILL = "#dc2626";
const MARKER_RING = "#121e37";
const LOGO_URL = "/abg.png";
const DOT_SPACING = 9;
const DOT_RADIUS = 1.35;
const DOT = { r: 18, g: 30, b: 55 };

const TILE_STYLED = "15";

const REGION_LABELS: { name: string; coords: [number, number] }[] = [
  { name: "North America", coords: [42, -98] },
  { name: "South America", coords: [-18, -58] },
  { name: "Europe", coords: [52, 18] },
  { name: "Africa", coords: [4, 22] },
  { name: "Middle East", coords: [28, 44] },
  { name: "Asia", coords: [40, 88] },
  { name: "Oceania", coords: [-22, 140] },
];

function createRegionLabelIcon(name: string) {
  return L.divIcon({
    className: "region-map-label",
    html: `<span>${name}</span>`,
    iconSize: [0, 0],
  });
}

function createPartnerMarkerIcon() {
  return L.divIcon({
    className: "partner-map-marker",
    html: `
      <div class="partner-map-marker__wrap">
        <span class="partner-map-marker__ripple"></span>
        <span class="partner-map-marker__ripple partner-map-marker__ripple--2"></span>
        <span class="partner-map-marker__core"></span>
      </div>
    `,
    iconSize: [48, 48],
    iconAnchor: [24, 24],
    popupAnchor: [0, -14],
  });
}

function isOceanPixel(r: number, g: number, b: number) {
  const sum = r + g + b;
  if (sum < 400) return false;
  if (g > r + 25 && g > b + 10) return false;
  if (r > g + 8 && r > b + 8) return false;
  if (Math.max(r, g, b) - Math.min(r, g, b) < 18 && b <= r + 4) return false;
  return b >= g - 12 && b > r + 2 && b > 130;
}

const mapTileCache = new Map<string, string>();

function parseTileCoords(url: string) {
  const match = url.match(/\/(\d+)\/(\d+)\/(\d+)(?:@2x)?\.png/i);
  if (!match) return null;
  return { x: Number(match[2]), y: Number(match[3]) };
}

function setSeaColor(data: Uint8ClampedArray, i: number) {
  data[i] = OCEAN.r;
  data[i + 1] = OCEAN.g;
  data[i + 2] = OCEAN.b;
}

function paintDottedTile(
  data: Uint8ClampedArray,
  width: number,
  height: number,
  tileX: number,
  tileY: number,
) {
  const original = new Uint8ClampedArray(data);
  const scale = width / 256;

  for (let i = 0; i < data.length; i += 4) {
    if (original[i + 3] === 0) continue;
    setSeaColor(data, i);
  }

  for (let py = 0; py < height; py += 1) {
    for (let px = 0; px < width; px += 1) {
      const i = (py * width + px) * 4;
      const r = original[i];
      const g = original[i + 1];
      const b = original[i + 2];
      if (original[i + 3] === 0) continue;
      if (isOceanPixel(r, g, b)) continue;

      const globalPx = tileX * 256 + px / scale;
      const globalPy = tileY * 256 + py / scale;
      const gridX = Math.floor(globalPx / DOT_SPACING) * DOT_SPACING + DOT_SPACING / 2;
      const gridY = Math.floor(globalPy / DOT_SPACING) * DOT_SPACING + DOT_SPACING / 2;
      const dx = globalPx - gridX;
      const dy = globalPy - gridY;

      if (dx * dx + dy * dy <= DOT_RADIUS * DOT_RADIUS) {
        data[i] = DOT.r;
        data[i + 1] = DOT.g;
        data[i + 2] = DOT.b;
      }
    }
  }
}

function paintFlatSeaTile(data: Uint8ClampedArray) {
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] === 0) continue;
    setSeaColor(data, i);
  }
}

async function recolorBaseTile(tile: HTMLImageElement) {
  const tileUrl = tile.src;
  const cacheKey = `${tileUrl}:${TILE_STYLED}`;
  if (!tileUrl || tileUrl.startsWith("data:") || tile.dataset.mapStyled === TILE_STYLED) return;

  const cached = mapTileCache.get(cacheKey);
  if (cached) {
    tile.src = cached;
    tile.dataset.mapStyled = TILE_STYLED;
    return;
  }

  const applyStyledUrl = (dataUrl: string) => {
    mapTileCache.set(cacheKey, dataUrl);
    tile.src = dataUrl;
    tile.dataset.mapStyled = TILE_STYLED;
  };

  try {
    const response = await fetch(tileUrl, { mode: "cors" });
    if (!response.ok) throw new Error("tile fetch failed");

    const blob = await response.blob();
    const bitmap = await createImageBitmap(blob);
    const canvas = document.createElement("canvas");
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) {
      bitmap.close();
      return;
    }

    ctx.drawImage(bitmap, 0, 0);
    bitmap.close();

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const tileCoords = parseTileCoords(tileUrl);
    if (tileCoords) {
      paintDottedTile(imageData.data, canvas.width, canvas.height, tileCoords.x, tileCoords.y);
    } else {
      paintFlatSeaTile(imageData.data);
    }
    ctx.putImageData(imageData, 0, 0);
    applyStyledUrl(canvas.toDataURL("image/png"));
  } catch {
    if (!tile.complete || tile.naturalWidth === 0) return;

    try {
      const canvas = document.createElement("canvas");
      canvas.width = tile.naturalWidth;
      canvas.height = tile.naturalHeight;

      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      ctx.drawImage(tile, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const tileCoords = parseTileCoords(tileUrl);
      if (tileCoords) {
        paintDottedTile(imageData.data, canvas.width, canvas.height, tileCoords.x, tileCoords.y);
      } else {
        paintFlatSeaTile(imageData.data);
      }
      ctx.putImageData(imageData, 0, 0);
      applyStyledUrl(canvas.toDataURL("image/png"));
    } catch {
      tile.dataset.mapStyled = TILE_STYLED;
    }
  }
}

const tileLayerOptions: L.TileLayerOptions = {
  subdomains: "abcd",
  maxZoom: 19,
  keepBuffer: 4,
  updateWhenIdle: true,
  crossOrigin: "anonymous",
};

function createMarkerPopupHtml(country: string, region: string) {
  return `
    <div class="partner-popup">
      <div class="partner-popup__logo">
        <img src="${LOGO_URL}" alt="Al Barham Group" />
      </div>
      <div class="partner-popup__body">
        <span class="partner-popup__region">${region}</span>
        <strong class="partner-popup__country">${country}</strong>
      </div>
    </div>
  `;
}

function fitPartnerMapView(
  map: L.Map,
  group: L.FeatureGroup,
  options?: { mobilePan?: boolean },
) {
  const bounds = group.getBounds().pad(0.04);
  const size = map.getSize();
  if (size.x === 0 || size.y === 0) return false;

  map.fitBounds(bounds, {
    maxZoom: 5,
    animate: false,
    padding: [24, 24],
  });

  let zoom = map.getZoom();
  while (zoom < 5) {
    map.setZoom(zoom + 0.5, { animate: false });
    if (!map.getBounds().contains(bounds)) {
      map.setZoom(zoom, { animate: false });
      break;
    }
    zoom += 0.5;
  }

  const fittedZoom = map.getZoom();
  map.setView(bounds.getCenter(), fittedZoom, { animate: false });
  map.setMinZoom(fittedZoom);
  map.setMaxZoom(fittedZoom);

  if (options?.mobilePan) {
    const sw = bounds.getSouthWest();
    const ne = bounds.getNorthEast();
    const latPad = Math.max((ne.lat - sw.lat) * 0.1, 5);
    const lngPad = Math.max((ne.lng - sw.lng) * 0.5, 28);
    map.setMaxBounds(
      L.latLngBounds(
        [sw.lat - latPad, sw.lng - lngPad],
        [ne.lat + latPad, ne.lng + lngPad],
      ),
    );
    map.dragging.enable();
  } else {
    map.setMaxBounds(bounds.pad(0.08));
    map.dragging.disable();
  }

  return true;
}

const MOBILE_MAP_QUERY = "(max-width: 767px)";

function isMobileMapView() {
  return window.matchMedia(MOBILE_MAP_QUERY).matches;
}

const MOBILE_POPUP_WIDTH = 110;
const DESKTOP_POPUP_WIDTH = 220;

function getPopupOptions() {
  const mobile = isMobileMapView();
  return {
    className: "partner-map-popup",
    maxWidth: mobile ? MOBILE_POPUP_WIDTH : 260,
    minWidth: mobile ? MOBILE_POPUP_WIDTH : DESKTOP_POPUP_WIDTH,
    closeOnClick: false,
    autoPan: false,
  };
}

function applyMobilePopupLayout(popup: L.Popup) {
  const element = popup.getElement();
  if (!element) return;

  const content = element.querySelector(
    ".leaflet-popup-content",
  ) as HTMLElement | null;

  if (isMobileMapView()) {
    element.classList.add("partner-map-popup--mobile");
    if (content) {
      content.style.width = `${MOBILE_POPUP_WIDTH}px`;
      content.style.maxWidth = `${MOBILE_POPUP_WIDTH}px`;
    }
    return;
  }

  element.classList.remove("partner-map-popup--mobile");
  if (content) {
    content.style.width = `${DESKTOP_POPUP_WIDTH}px`;
    content.style.maxWidth = "";
  }
}

type GlobalPartnersMapProps = {
  fullHeight?: boolean;
};

export const GlobalPartnersMap = ({ fullHeight = false }: GlobalPartnersMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      attributionControl: false,
      scrollWheelZoom: false,
      zoomControl: false,
      dragging: false,
      doubleClickZoom: false,
      touchZoom: false,
      boxZoom: false,
      keyboard: false,
      maxBoundsViscosity: 1,
      zoomSnap: 0.5,
    });

    map.setView([30, 20], 2);

    map.createPane("mapLabels");
    const labelsPane = map.getPane("mapLabels");
    if (labelsPane) {
      labelsPane.style.zIndex = "450";
      labelsPane.style.pointerEvents = "none";
    }

    map.createPane("mapMarkers");
    const markersPane = map.getPane("mapMarkers");
    if (markersPane) {
      markersPane.style.zIndex = "460";
    }

    const baseLayer = L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
      tileLayerOptions,
    );

    baseLayer.on("tileload", (event) => {
      void recolorBaseTile(event.tile as HTMLImageElement);
    });

    baseLayer.addTo(map);

    REGION_LABELS.forEach(({ name, coords }) => {
      L.marker(coords, {
        pane: "mapLabels",
        icon: createRegionLabelIcon(name),
        interactive: false,
      }).addTo(map);
    });

    let hoverCloseTimeout: ReturnType<typeof setTimeout> | undefined;
    let activeMobileMarker: L.Marker | null = null;

    const bindPopupHover = (marker: L.Marker) => {
      const popup = marker.getPopup();
      const popupElement = popup?.getElement();

      if (popupElement && !popupElement.dataset.hoverBound) {
        popupElement.dataset.hoverBound = "true";
        popupElement.addEventListener("mouseenter", () => {
          window.clearTimeout(hoverCloseTimeout);
        });
        popupElement.addEventListener("mouseleave", () => {
          hoverCloseTimeout = window.setTimeout(() => marker.closePopup(), 120);
        });
      }
    };

    const markers: L.Marker[] = partnerCountryLocations.map((location) => {
      const marker = L.marker(location.coords, {
        pane: "mapMarkers",
        icon: createPartnerMarkerIcon(),
      })
        .addTo(map)
        .bindPopup(createMarkerPopupHtml(location.name, location.region), getPopupOptions());

      marker.on("click", (event) => {
        L.DomEvent.stopPropagation(event);
        if (!isMobileMapView()) return;

        window.clearTimeout(hoverCloseTimeout);

        if (activeMobileMarker === marker && marker.isPopupOpen()) {
          marker.closePopup();
          activeMobileMarker = null;
          return;
        }

        activeMobileMarker = marker;
        markers.forEach((other) => {
          if (other !== marker) other.closePopup();
        });

        marker.openPopup();
      });

      marker.on("popupopen", () => {
        const popup = marker.getPopup();
        if (popup) applyMobilePopupLayout(popup);
      });

      marker.on("mouseover", () => {
        if (isMobileMapView()) return;

        window.clearTimeout(hoverCloseTimeout);
        marker.openPopup();
        bindPopupHover(marker);
      });

      marker.on("mouseout", () => {
        if (isMobileMapView()) return;

        hoverCloseTimeout = window.setTimeout(() => marker.closePopup(), 120);
      });

      return marker;
    });

    const group = L.featureGroup(markers);
    let hasFitted = false;

    const tryFitMap = () => {
      map.invalidateSize({ animate: false });
      if (hasFitted) {
        const bounds = group.getBounds().pad(0.04);
        const fittedZoom = map.getZoom();
        const mobilePan = isMobileMapView();

        map.setMinZoom(fittedZoom);
        map.setMaxZoom(fittedZoom);

        if (mobilePan) {
          const sw = bounds.getSouthWest();
          const ne = bounds.getNorthEast();
          const latPad = Math.max((ne.lat - sw.lat) * 0.1, 5);
          const lngPad = Math.max((ne.lng - sw.lng) * 0.5, 28);
          map.setMaxBounds(
            L.latLngBounds(
              [sw.lat - latPad, sw.lng - lngPad],
              [ne.lat + latPad, ne.lng + lngPad],
            ),
          );
          map.dragging.enable();
        } else {
          map.setMaxBounds(bounds.pad(0.08));
          map.dragging.disable();
          map.setView(bounds.getCenter(), fittedZoom, { animate: false });
        }
        return;
      }

      hasFitted = fitPartnerMapView(map, group, {
        mobilePan: isMobileMapView(),
      });
    };

    map.whenReady(() => {
      tryFitMap();
      window.setTimeout(tryFitMap, 200);
      window.setTimeout(tryFitMap, 500);
    });

    map.on("click", () => {
      if (!isMobileMapView()) return;
      markers.forEach((marker) => marker.closePopup());
      activeMobileMarker = null;
    });

    map.on("popupopen", (event) => {
      applyMobilePopupLayout(event.popup);
    });

    let resizeTimeout: ReturnType<typeof setTimeout> | undefined;
    const resizeObserver = new ResizeObserver(() => {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(tryFitMap, 150);
    });
    resizeObserver.observe(mapRef.current);

    const mobileMedia = window.matchMedia(MOBILE_MAP_QUERY);
    const handleViewportChange = () => tryFitMap();
    mobileMedia.addEventListener("change", handleViewportChange);

    mapInstanceRef.current = map;

    return () => {
      window.clearTimeout(hoverCloseTimeout);
      window.clearTimeout(resizeTimeout);
      mobileMedia.removeEventListener("change", handleViewportChange);
      resizeObserver.disconnect();
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div
      className={fullHeight ? "absolute inset-0 z-0 w-full h-full overflow-hidden" : "w-full overflow-hidden"}
      style={{ backgroundColor: MAP_BG }}
    >
      <div
        ref={mapRef}
        style={{ backgroundColor: MAP_BG }}
        className="global-partners-map w-full h-full min-h-[360px] [&_.leaflet-container]:!bg-white [&_.leaflet-control-attribution]:hidden"
      />

      <style>{`
        .global-partners-map .region-map-label {
          background: transparent;
          border: none;
        }
        .global-partners-map .region-map-label span {
          position: absolute;
          left: 0;
          top: 0;
          transform: translate(-50%, -50%);
          white-space: nowrap;
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          background: #dc2626;
          color: #fff;
          padding: 2px 6px;
          pointer-events: none;
        }
        @media (max-width: 767px) {
          .global-partners-map .region-map-label {
            display: none !important;
          }
          .global-partners-map .leaflet-container {
            touch-action: pan-x;
          }
          .global-partners-map .partner-map-marker__wrap {
            width: 38px;
            height: 38px;
          }
          .global-partners-map .partner-map-marker__core {
            width: 14px;
            height: 14px;
            border-width: 1px;
          }
          .global-partners-map .partner-map-marker__ripple {
            width: 14px;
            height: 14px;
            margin-left: -7px;
            margin-top: -7px;
            border-width: 1px;
          }
        }
        .global-partners-map .leaflet-container,
        .global-partners-map .leaflet-pane,
        .global-partners-map .leaflet-tile-pane {
          background: ${MAP_BG} !important;
        }
        .global-partners-map .leaflet-tile-pane img {
          image-rendering: auto;
        }
        .global-partners-map .partner-map-marker {
          background: transparent !important;
          border: none !important;
        }
        .global-partners-map .partner-map-marker__wrap {
          position: relative;
          width: 48px;
          height: 48px;
          cursor: pointer;
        }
        .global-partners-map .partner-map-marker__core {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: ${MARKER_FILL};
          border: 3px solid ${MARKER_RING};
          z-index: 2;
          transition: transform 200ms ease-out, box-shadow 200ms ease-out;
        }
        .global-partners-map .partner-map-marker__wrap:hover .partner-map-marker__core {
          transform: translate(-50%, -50%) scale(1.08);
          box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.18);
        }
        .global-partners-map .partner-map-marker__ripple {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 18px;
          height: 18px;
          margin-left: -9px;
          margin-top: -9px;
          border-radius: 50%;
          border: 2px solid rgba(220, 38, 38, 0.55);
          opacity: 0;
          pointer-events: none;
          z-index: 1;
        }
        .global-partners-map .partner-map-marker__wrap:hover .partner-map-marker__ripple {
          animation: partner-marker-ripple 1.8s ease-out infinite;
        }
        .global-partners-map .partner-map-marker__ripple--2 {
          animation-delay: 0.6s;
        }
        @keyframes partner-marker-ripple {
          0% {
            transform: scale(1);
            opacity: 0.65;
          }
          100% {
            transform: scale(3.4);
            opacity: 0;
          }
        }
        .global-partners-map .partner-map-popup .leaflet-popup-content-wrapper {
          background: ${SECTION_BG};
          border: none;
          border-radius: 10px;
          padding: 0;
          overflow: hidden;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.28);
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
        }
        .global-partners-map .partner-map-popup .leaflet-popup-tip {
          background: ${SECTION_BG};
          box-shadow: none;
        }
        .global-partners-map .partner-map-popup .leaflet-popup-content {
          margin: 0;
          width: 220px !important;
        }
        .global-partners-map .partner-map-popup .leaflet-popup-close-button {
          color: rgba(255, 255, 255, 0.75);
          font-size: 20px;
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          top: 6px;
          right: 8px;
        }
        .global-partners-map .partner-map-popup .leaflet-popup-close-button:hover {
          color: #fff;
        }
        .global-partners-map .partner-popup {
          display: flex;
          flex-direction: column;
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
        }
        .global-partners-map .partner-popup__logo {
          background: #fff;
          padding: 12px 16px 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 3px solid #dc2626;
        }
        .global-partners-map .partner-popup__logo img {
          width: 120px;
          height: auto;
          object-fit: contain;
          display: block;
        }
        .global-partners-map .partner-popup__body {
          padding: 14px 16px 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .global-partners-map .partner-popup__region {
          display: inline-block;
          width: fit-content;
          background: #dc2626;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 2px;
        }
        .global-partners-map .partner-popup__country {
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.25;
          margin-top: 4px;
        }
        .global-partners-map .partner-popup__label {
          color: rgba(255, 255, 255, 0.55);
          font-size: 11px;
          margin-top: 2px;
        }

        @media (max-width: 767px) {
          .global-partners-map .leaflet-popup.partner-map-popup.partner-map-popup--mobile .leaflet-popup-content-wrapper,
          .global-partners-map .leaflet-popup.partner-map-popup .leaflet-popup-content-wrapper {
            border-radius: 6px;
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.24);
          }
          .global-partners-map .leaflet-popup.partner-map-popup.partner-map-popup--mobile .leaflet-popup-content,
          .global-partners-map .leaflet-popup.partner-map-popup .leaflet-popup-content {
            width: ${MOBILE_POPUP_WIDTH}px !important;
            max-width: ${MOBILE_POPUP_WIDTH}px !important;
          }
          .global-partners-map .leaflet-popup.partner-map-popup .leaflet-popup-close-button {
            font-size: 12px;
            top: 2px;
            right: 4px;
          }
          .global-partners-map .leaflet-popup.partner-map-popup .partner-popup__logo {
            padding: 6px 8px 5px;
            border-bottom-width: 2px;
          }
          .global-partners-map .leaflet-popup.partner-map-popup .partner-popup__logo img {
            width: 60px !important;
            max-width: 60px;
          }
          .global-partners-map .leaflet-popup.partner-map-popup .partner-popup__body {
            padding: 7px 8px 8px;
            gap: 2px;
          }
          .global-partners-map .leaflet-popup.partner-map-popup .partner-popup__region {
            font-size: 7px;
            padding: 2px 4px;
            letter-spacing: 0.04em;
          }
          .global-partners-map .leaflet-popup.partner-map-popup .partner-popup__country {
            font-size: 9px;
            margin-top: 2px;
            line-height: 1.2;
          }
        }
      `}</style>
    </div>
  );
};
