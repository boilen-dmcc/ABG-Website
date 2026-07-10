export type PartnerCountryLocation = {
  name: string;
  coords: [number, number];
  region: string;
};

export const partnerCountryLocations: PartnerCountryLocation[] = [
  { name: "USA", coords: [39.8283, -98.5795], region: "North America" },
  { name: "Canada", coords: [45.4215, -75.6972], region: "North America" },
  { name: "Brazil", coords: [-15.7939, -47.8828], region: "North America" },
  { name: "Mexico", coords: [19.4326, -99.1332], region: "North America" },
  { name: "UK", coords: [51.5074, -0.1278], region: "Europe" },
  { name: "Italy", coords: [41.9028, 12.4964], region: "Europe" },
  { name: "Germany", coords: [52.52, 13.405], region: "Europe" },
  { name: "Switzerland", coords: [46.948, 7.4474], region: "Europe" },
  { name: "France", coords: [48.8566, 2.3522], region: "Europe" },
  { name: "Spain", coords: [40.4168, -3.7038], region: "Europe" },
  { name: "Belgium", coords: [50.8503, 4.3517], region: "Europe" },
  { name: "Finland", coords: [60.1699, 24.9384], region: "Europe" },
  { name: "Czech Republic", coords: [50.0755, 14.4378], region: "Europe" },
  { name: "Turkey", coords: [39.9334, 32.8597], region: "Middle East" },
  { name: "UAE", coords: [24.4539, 54.3773], region: "Middle East" },
  { name: "Bahrain", coords: [26.2285, 50.586], region: "Middle East" },
  { name: "Oman", coords: [23.588, 58.3829], region: "Middle East" },
  { name: "Egypt", coords: [30.0444, 31.2357], region: "Middle East" },
  { name: "Iraq", coords: [33.3152, 44.3661], region: "Middle East" },
  { name: "South Korea", coords: [37.5665, 126.978], region: "Asia" },
  { name: "Japan", coords: [35.6762, 139.6503], region: "Asia" },
  { name: "China", coords: [39.9042, 116.4074], region: "Asia" },
  { name: "Pakistan", coords: [33.6844, 73.0479], region: "Asia" },
  { name: "India", coords: [28.6139, 77.209], region: "Asia" },
];
