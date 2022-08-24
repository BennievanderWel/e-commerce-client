import Product from './Product';
import styles from './Product.module.scss';

interface IProductContainer {
  products: { name: string; pokedex_number: number }[];
}

const ProductContainer: React.FC<IProductContainer> = ({ products }) => {
  return (
    <div className={styles.container}>
      {products.map(({ name, pokedex_number }) => (
        <Product key={name} name={name} pokedex_number={pokedex_number} />
      ))}
    </div>
  );
};

export default ProductContainer;
