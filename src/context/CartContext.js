import { createContext, useState, useContext } from "react";
const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export function cartContextProvider({ children }) {

    const [cartList, setCartList] = useState([])

    const isInCart = (id) => cartList.find(a => a.id === id)

    const addToCart = (item, quantity) => {

        if (isInCart(item.id)) {
            const cart = cartList.map(a => {
                if (a.id === item.id) {
                    return { ...a, quantity: quantity + a.quantity }
                } else {
                    return a
                }

            })
            setCartList(cart)
        } else {
            const product = { ...item, quantity: quantity }
            setCartList(...cartList, product)

        }
    }

    const removeProduct = (id) => setCartList(cartList.filter(prod => prod.id != id))

    const cleanCart = () => setCartList([])

    const priceCart = () => {

        return cartList.reduce((acu, product) => acu += (product.price * product.quantity), 0)
    }

    const totalItems = () => {
        return cartList.reduce((acu, product) => acu += product.quantity, 0)
    }


    return (
        <CartContext.Provider value={{
            priceCart,
            addToCart,
            cleanCart,
            removeProduct

        }}>

            {children}
        </CartContext.Provider>
    )
}