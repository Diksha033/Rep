import React,{useContext} from "react";
import Cartcontext from "../../store/Cart-Context";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';
import CartItem from "./CartItem";
const Cart = (props) => {
    const cartCtx = useContext(Cartcontext);
   
    const Amount= `$${cartCtx.totalAmount.toFixed(2)}`;
    const Hasitems= cartCtx.items.length > 0;

    const Cartitemaddhandler= (item) => {
        cartCtx.additem(item)
    };
    const Cartitemremovehandler=(id) => {
        cartCtx.removeitem(id)
    };

    const CartItems =<ul className={classes['cart-items']}>
     {cartCtx.items.map((item) => (
        <CartItem 
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onAdd={Cartitemaddhandler.bind(null,item.id)}
        onRemove={Cartitemremovehandler.bind(null,item)}
        />
     ))}
     </ul>
    return (
    <Modal onClose={props.onClose}>
       { CartItems}
        <div className={classes.total}> 
            <span>Total Amount</span>
            <span>{Amount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button --alt']} onClick={props.onClose}> Close </button>
            {Hasitems && <button className={classes.button}> Order </button>}
        </div>

    </Modal>
    )
};


export default Cart;
