import {Product} from "~/services/products.server";
import styles from './styles.module.css'
import AddToCart from "~/components/ProductSingleContent/AddToCart/AddToCart";

const ProductSingleContent: React.FC<{product: Product, quantity: number}> = ({product, quantity}) => {
  return (
    <div className={styles.infoColumn}><h1 className={styles.name}>{product.title}</h1>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.priceDiscount}>{product.price}</p>
      <p className={styles.priceOriginal}>{product.price}</p>
      <AddToCart product={product} quantity={quantity}/>
    </div>
  )
}

ProductSingleContent.displayName = 'ProductSingleContent'

export default ProductSingleContent