import {create} from "zustand";

const useStore = create((set) => ({
    isToggled: false,
    setIsToggledToFalse: () => set((state) => ({isToggled: state.isToggled = false})),
    setIsToggledToTrue: () => set((state) => ({isToggled: state.isToggled = true})),
    deleteEverything: () => set({}, true) // clears the entire store, actions included
}));

export default useStore;