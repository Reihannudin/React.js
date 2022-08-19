import { createContext , useState , useEffect } from 'react';

const addCartItem = (cartItems , productToAdd) => {
    // find if conditions containsproductToAdd
    const exisitingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    // if found, increment quantity
    if (exisitingCartItem){
        return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id 
        ? {...cartItem , quantity : cartItem.quantity + 1} 
        : cartItem
        )
    }

    // return a new array with modified cartItems / new cart item
    return [...cartItems, { ...productToAdd , quantity : 1}]
}

const removeCartItem = (cartItems , cartItemToRemove) => {

    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    )

    // check if quantity is equal to 1, if it is remove that item from cart
    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    // return back cart items with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
    );
} 


const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);



export const CartContext = createContext({
    isCartOpen : false,
    setIsOpen : () => {},
    cartItems : [],
    addItemToCart : () => {},
    removeItemFromCart : () => {},
    clearItemFromCart: () => {},
    cartCount : 0 ,
    cartTotal: 0,
})

export const CartProvider = ({ children }) => {
    const [isCartOpen , setIsCartOpen] = useState(false);
    const [cartItems , setCartItems] = useState([])
    const [cartCount , setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total , cartItem) => total + cartItem.quantity,
            0
        );
        setCartCount(newCartCount);
    } , [cartItems])
    
    useEffect(() => {
        const newCartTotal = cartItems.reduce(
          (total, cartItem) => total + cartItem.quantity * cartItem.price,
          0
        );
        setCartTotal(newCartTotal);
      }, [cartItems]);

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product))
    }

    const removeItemFromCart = (product) => {
        setCartItems(removeCartItem(cartItems, product))
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
      };

    const value = { isCartOpen , setIsCartOpen , cartItems , addItemToCart, cartCount , removeItemFromCart , clearItemFromCart, cartTotal};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}