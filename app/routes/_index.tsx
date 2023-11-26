import {json, LinksFunction, MetaFunction} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import {getProducts} from "~/services/products.server";
import ProductsList from "~/components/ProductList/ProductsList";
import homeStylesHref from '../styles/home.css'

export const meta: MetaFunction = () => {
  return [
    { title: "Simple store" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: homeStylesHref },
];


export const loader = async () => {
  const products = await getProducts()
 return json({products})
};

export default function Home() {
  const data = useLoaderData<typeof loader>()
  return (
    <ProductsList products={data.products.products}/>
  )
}