import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function isProjectsRoute(path: string) {
  return path === "/projects" || path.startsWith("/projects/");
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (hash) return;

    const previous = prevPathname.current;
    prevPathname.current = pathname;

    // Keep scroll position when switching projects or moving within /projects
    if (isProjectsRoute(previous) && isProjectsRoute(pathname)) {
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
