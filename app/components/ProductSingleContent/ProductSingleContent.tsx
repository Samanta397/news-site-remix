import {Product} from "~/services/products.server";
import styles from './styles.module.css'

const ProductSingleContent: React.FC<{product: Product}> = ({product}) => {
  return (
    <div className={styles.infoColumn}><h1 className={styles.name}>{product.title}</h1>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.priceDiscount}>{product.price}</p>
      <p className={styles.priceOriginal}>{product.price}</p>
      <button className={styles.addToCart}>Add to Cart</button>
    </div>
  )
}

ProductSingleContent.displayName = 'ProductSingleContent'

export default ProductSingleContent