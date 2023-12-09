import {Product} from "~/services/products.server";
import {Link} from "@remix-run/react";
import styles from './styles.module.css'
import {AddToCart} from "~/components/ProductList/AddToCart/AddToCart";

const ProductListItem: React.FC<{product: Product}> = ({product}) => {
  return (
    <div className={styles.root}>
      <img src={product.thumbnail} alt={product.title}/>
        <div className={styles.info}>
          <h2 className={styles.name}><Link to={`/products/${product.id}`}>{product.title}</Link></h2>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>{product.price}</p>
          <AddToCart/>
        </div>
    </div>
  )
}

ProductListItem.displayName = 'ProductListItem'

export default ProductListItem

