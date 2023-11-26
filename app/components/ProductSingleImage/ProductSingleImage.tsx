import {Product} from "~/services/products.server";
import styles from './styles.module.css'


const ProductSingleImage: React.FC<{product: Product}> = ({product}) => {
  return (
    <div className={styles.column}>
      <div className={styles.root}><img src={product.thumbnail} alt={product.title} /></div>
    </div>
  )
}

ProductSingleImage.displayName = 'ProductSingleImage'

export default ProductSingleImage