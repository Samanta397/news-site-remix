import {ActionFunctionArgs, json, LoaderFunctionArgs, MetaFunction} from "@remix-run/node";
import {useLoaderData, useRouteLoaderData} from "@remix-run/react";
import {getProduct} from "~/services/products.server";
import invariant from "tiny-invariant";
import ProductSingleImage from "~/components/ProductSingleImage/ProductSingleImage";
import ProductSingleContent from "~/components/ProductSingleContent/ProductSingleContent";
import styles from '~/styles/products-single.module.css'
import {commitSession, getSession} from "~/services/sessions.server";
import {createCart} from "~/services/cart.server";
import type {loader as rootLoader} from "~/root";

export const loader = async ({params, request}: LoaderFunctionArgs) => {
  invariant(params.productId, "Missing contactId param");
  const product = await getProduct(params.productId);
  if (!product) {
    throw new Response("Not Found", {status: 404});
  }

  return json({product});
};

export const action = async ({request}: ActionFunctionArgs) => {
  const formData = await request.formData()
  const productId = formData.get('productId')
  invariant(typeof productId === 'string', 'Missing productId')

  const session = await getSession(request.headers.get('Cookie'))
  const cart = createCart(session)

  cart.add(productId)
  return json({success: true}, {headers: {'Set-Cookie': await commitSession(session)}})
}

export const meta: MetaFunction<typeof loader> = ({data}) => {
  return [{title: data?.product.title}];
};

export default function Product() {
  const data = useLoaderData<typeof loader>()
  const rootData = useRouteLoaderData<typeof rootLoader>("root");
  invariant(rootData, 'rootData is required')

  const quantity = rootData.cart.find(item => Number(item.productId) === data.product.id)?.quantity || 0

  return (
    <main className={styles.root}>
      <ProductSingleImage product={data.product}/>
      <ProductSingleContent product={data.product} quantity={quantity}/>
    </main>
  )
}