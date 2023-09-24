import { create } from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools';


export const useCountStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))


if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('count', useCountStore);
}