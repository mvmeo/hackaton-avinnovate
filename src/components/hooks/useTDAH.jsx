import { create } from 'zustand'

const useTADH = create(set => ({
    tdah: false,
    change: () => set((state) => ({ tdah: !state.tdah })),
}))

export default useTADH