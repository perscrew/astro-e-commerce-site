import { atom } from "nanostores";

export const drawerStore = atom(false);

export function toggleDrawer() {
  drawerStore.set(!drawerStore.get());
}
