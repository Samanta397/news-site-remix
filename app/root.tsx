import {
  Links,
  LiveReload,
  Meta, Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import {json, LinksFunction, LoaderFunctionArgs} from "@remix-run/node";
import { cssBundleHref } from "@remix-run/css-bundle";
import TopBar from "~/components/TopBar/TopBar";
import {getSession} from "~/services/sessions.server";
import {createCart} from "~/services/cart.server";

export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [{ rel: "stylesheet", href: cssBundleHref }]
    : []),
];


export const loader = async ({request}: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get('Cookie'))
  const cart = createCart(session)

  return json({cart: cart.items()});
}


export default function App() {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <TopBar/>
        <Outlet/>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
