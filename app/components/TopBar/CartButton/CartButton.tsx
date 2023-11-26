import React from 'react';
import CartIcon from "~/components/TopBar/CartButton/CartIcon/CartIcon";
import styles from './styles.module.css'

type CartButtonProps = {
    count?: number
}

const CartButton = ({count}: CartButtonProps) => {
    return (
        <>
            <button className={styles.root}>
                <CartIcon/>
            </button>
            {count && (
                <span className={styles.badge}>
                    {count}
                </span>
            )}

        </>
    );
};

export default CartButton;