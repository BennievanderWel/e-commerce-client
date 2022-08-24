import type { NextPage } from 'next';
import Head from 'next/head';

import { gql } from '@apollo/client';
import client from '../apollo/apolloClient';
import ProductContainer from '../components/product/Product.container';

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query pokemon {
        pokemon {
          name
          pokedex_number
        }
      }
    `,
  });

  return {
    props: {
      pokemon: data.pokemon,
    },
  };
}

const Home: NextPage = (props: any) => {
  return <ProductContainer products={props.pokemon} />;
};

export default Home;
