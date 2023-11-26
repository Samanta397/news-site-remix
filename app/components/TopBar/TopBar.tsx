import React from 'react';
import styles from './styles.module.css'
import Logo from "~/components/TopBar/Logo/Logo";
import CartButton from "~/components/TopBar/CartButton/CartButton";

const TopBar = () => {
    return (
        <div className={styles.root}>
            <Logo/>
            <CartButton/>
        </div>
    );
};

export default TopBar;