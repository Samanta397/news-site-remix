export type Product = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock:number
  brand: string
  category:string
  thumbnail: string
  images: string[]
}

type ProductsResponse = {
  limit: number
  skip: number
  total: number
  products: Product[]
}

export const getProducts = async (): Promise<ProductsResponse> => {
  return fetch('https://dummyjson.com/products').then((response) => response.json())
}
export const getProduct = async (id: string): Promise<Product> => {
  return fetch(`https://dummyjson.com/products/${id}`).then((response) => response.json())
}