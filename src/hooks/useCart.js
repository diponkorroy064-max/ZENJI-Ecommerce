import { create } from 'zustand';

export const useCart = create((set) => ({
    cart: [],
    isOpen: false,
    openCart: () => set({ isOpen: true }),
    closeCart: () => set({ isOpen: false }),
    addToCart: (product, selectedSize) => set((state) => {
        const existingIndex = state.cart.findIndex(
            (item) => item.id === product.id && item.selectedSize === selectedSize
        );

        if (existingIndex > -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingIndex].quantity += 1;
            return { cart: updatedCart, isOpen: true };
        }

        return {
            cart: [...state.cart, { ...product, selectedSize, quantity: 1 }],
            isOpen: true,
        };
    }),
    removeFromCart: (id, selectedSize) => set((state) => ({
        cart: state.cart.filter((item) => !(item.id === id && item.selectedSize === selectedSize)),
    })),
}));
