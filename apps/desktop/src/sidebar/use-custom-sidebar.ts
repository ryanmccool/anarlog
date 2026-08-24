import type { Tab } from "~/store/zustand/tabs";

const CUSTOM_SIDEBAR_TYPES: Tab["type"][] = [
  "calendar",
  "settings",
  "contacts",
  "templates",
  "automations",
];

const LEFT_SURFACE_CUSTOM_SIDEBAR_TYPES: Tab["type"][] = [
  "calendar",
  "settings",
  "contacts",
  "templates",
  "automations",
];

// Tabs whose sidebar nav renders CustomSidebarHeader in the window chrome row.
const OWN_SIDEBAR_HEADER_TYPES: Tab["type"][] = [
  "calendar",
  "settings",
  "contacts",
  "templates",
  "automations",
];

export function hasCustomSidebarTab(tab: Tab | null): boolean {
  return tab !== null && CUSTOM_SIDEBAR_TYPES.includes(tab.type);
}

export function hasLeftSurfaceCustomSidebarTab(tab: Tab | null): boolean {
  return tab !== null && LEFT_SURFACE_CUSTOM_SIDEBAR_TYPES.includes(tab.type);
}

export function hasOwnSidebarHeaderTab(tab: Tab | null): boolean {
  return tab !== null && OWN_SIDEBAR_HEADER_TYPES.includes(tab.type);
}
