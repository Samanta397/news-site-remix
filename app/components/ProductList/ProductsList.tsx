import {Product} from "~/services/products.server";
import ProductListItem from "./ProductListItem/ProductListItem";
import styles from './styles.module.css'


const ProductsList: React.FC<{products: Product[]}> = ({products}) => {
  return (
    <div className={styles.root}>
      {products.map(product => (
        <ProductListItem product={product} key={product.id}/>
      ))}
    </div>
  )
}

ProductsList.displayName = 'ProductsList'

export default ProductsList;