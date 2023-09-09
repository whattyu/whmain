import { create } from 'zustand';

export const useHeaderStore = create(set => ({
  menuIsOpen: false,
  toggleMenu: () => set(state => ({ menuIsOpen: !state.menuIsOpen })),
  closeMenu: () => set({ menuIsOpen: false })
}))