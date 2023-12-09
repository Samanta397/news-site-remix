import React from 'react';
import CartIcon from "~/components/TopBar/CartButton/CartIcon/CartIcon";
import styles from './styles.module.css'
import {Link, useRouteLoaderData} from "@remix-run/react";
import type {loader} from "~/root";
import invariant from "tiny-invariant";

const CartButton = () => {
  const data = useRouteLoaderData<typeof loader>("root");

  invariant(data, 'data is required')

  const quantity = data.cart.reduce((acc, item) => acc + item.quantity, 0)
    return (
        <Link to={'/cart'}>
            <button className={styles.root}>
                <CartIcon/>
            </button>
            {quantity && (
                <span className={styles.badge}>
                    {quantity}
                </span>
            )}
        </Link>
    );
};

export default CartButton;