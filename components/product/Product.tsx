import styles from './Product.module.scss';
import Image from 'next/image';

interface IProduct {
  name: string;
  pokedex_number: number;
}

const Product: React.FC<IProduct> = ({ name, pokedex_number }) => {
  return (
    <div className={styles.product}>
      <Image
        src={`/images/pokemon/${pokedex_number}.png`}
        alt={`Picture of ${name}`}
        width={500}
        height={500}
      />
      {name} {pokedex_number}
    </div>
  );
};

export default Product;
