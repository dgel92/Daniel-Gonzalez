import { createContext} from "react";
import { useContext,useState } from "react";


const CartContext = createContext();
const useCartContext =() => useContext(CartContext);

const {Provider} = CartContext;

export function CartContextProvider ({children}){
    const [cart, setCart] = useState([]);

    const addToCard =(item, cant)=>{
        if (isInCart(item.id)){
            const newCart =cart.map((cartItem)=>{
                if(cartItem.id ===item.id){
                    const copyItem={...cartItem};
                    copyItem.cant += cant;
                    return copyItem;
                }else return cartItem;
            });
            setCart(newCart);
        }else {
            const newItem ={...item, cant};
            setCart([...cart,newItem])
        }
    };

    const removeFromCart=(id)=>{
        const newCart=[...cart];
        const cartFilter=newCart.filter(item=>{
            return item.id !== id;
        });
        setCart(cartFilter);
    }
    
    const isInCart =(id) =>{
        return cart.some(itemCart => itemCart.id === id)
        };


    const getItemFromCart =(id) =>{
        return cart.find(itemCart => itemCart.id === id)
        };

const clearCart=()=>{
    setCart([])
}

const cantInCart =() =>{
    const total=0
    cart.forEach(item=> total + item)
    return total;
}

const calcPriceCart =()=>{
    const total=0;
    return total;
}


const contextFunction = () => console.log("contexto listo");


    return(
        <Provider value=
                {{contextFunction,
                cantInCart,
                calcPriceCart,
                cart,
                getItemFromCart,
                addToCard,
                removeFromCart,
                clearCart}}>
            {children}
        </Provider>
    )
}
export default useCartContext;