import { mountStoreDevtool } from 'simple-zustand-devtools'
import { create } from 'zustand'

export type CountState = {
  bears: number
}

export type CountActions = {
  increasePopulation: () => void
  removeAllBears: () => void
}

export const useCountStore = create<CountState & CountActions>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))


if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('count', useCountStore)
}