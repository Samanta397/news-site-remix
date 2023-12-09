import React from 'react';
import styles from "./styles.module.css";
import {Form} from "@remix-run/react";
import {Product} from "~/services/products.server";

export interface AddToCartProps {
  product: Product
  quantity: number
}

const AddToCart = ({product, quantity}: AddToCartProps) => {
  return (
    <Form method={'post'}>
      <input name={'productId'} type={'hidden'} value={product.id}/>
      <button type={'submit'} className={styles.root}>{quantity > 0 ? 'Add More' : 'Add to cart'}</button>
    </Form>
  );
};

export default AddToCart;