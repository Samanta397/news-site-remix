import {json, LoaderFunctionArgs, MetaFunction} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import {getProduct} from "~/services/products.server";
import invariant from "tiny-invariant";
import ProductSingleImage from "~/components/ProductSingleImage/ProductSingleImage";
import ProductSingleContent from "~/components/ProductSingleContent/ProductSingleContent";
import styles from '~/styles/products-single.module.css'

export const loader = async ({params}: LoaderFunctionArgs) => {
  invariant(params.productId, "Missing contactId param");
  const product = await getProduct(params.productId);
  if (!product) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ product });
};

export const meta: MetaFunction<typeof loader> = ({data }) => {
  return [{ title: data?.product.title }];
};

export default function Product() {
  const data = useLoaderData<typeof loader>()
  return (
    <main className={styles.root}>
      <ProductSingleImage product={data.product}/>
      <ProductSingleContent product={data.product}/>
    </main>
  )
}