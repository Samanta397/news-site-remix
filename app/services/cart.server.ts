import {Session} from "@remix-run/node";

export const SESSION_KEY = 'cart'

export type SessionCart = {
  [key: string | number]: number
}

export class Cart {
  constructor(private session: Session) {}

  loadCart(): SessionCart {
    return this.session.get(SESSION_KEY) ?? {}
  }

  saveCart(cart: SessionCart) {
    return this.session.set(SESSION_KEY, cart)
  }

  add(productId: string | number) {
    // console.log('productId', productId)
    const cart = this.loadCart()
    console.log('productId', cart)
    cart[productId] = (cart[productId] ?? 0) + 1
    this.saveCart(cart)
  }

  remove(productId: string | number) {
    const cart = this.loadCart()
    delete cart[productId]
    this.saveCart(cart)
  }

  items() {
    return Object.entries(this.loadCart()).map(([productId, quantity]) => ({
      productId,
      quantity
    }))
  }

}

export const createCart = (session: Session) => new Cart(session)