import React from 'react';
import {useFetcher} from "@remix-run/react";
import styles from "./styles.module.css";


export const AddToCart = () => {
  const fetcher = useFetcher({ key: "add-to-cart" });
  return (
    <fetcher.Form method="post">
      <button  type={'submit'} className={styles.root}>Add to Cart 55</button>
    </fetcher.Form>
  )
};
