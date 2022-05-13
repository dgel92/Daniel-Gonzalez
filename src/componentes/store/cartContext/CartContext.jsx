import { createContext} from "react";
import { useContext,useState } from "react";


const CartContext = createContext();
const useCartContext =() => useContext(CartContext);
const {Provider} = CartContext;

export function CartContextProvider ({children}){
    const [cart, setCart] = useState([]);
    
    const isInCart =(id) =>{
        return cart.some((item) => item.id === id);
        };

    const addToCard =(item, cant)=>{
        if (isInCart(item.id)){
            const newCart =cart.map(cartItem =>{
                if (cartItem.id === item.id){
                    const actualizarItem ={...cartItem};
                    actualizarItem.cant += cant;
                    return actualizarItem;
                }
            else
                return cartItem;
            })
            setCart(newCart);
    }}

    const removeFromCart=(id)=>{
        const newCart=[...cart];
        const cartFilter=newCart.filter(item=>{
            return item.id !== id;
        });
        setCart(cartFilter);
    }


const emptyCart=()=>{{
    cart([])
}}




    const contextFunction = () => console.log("contexto listo");
    return(
        <Provider value={{contextFunction, cart, addToCard, removeFromCart}}>
            {children}
        </Provider>
    )
}
export default useCartContext;