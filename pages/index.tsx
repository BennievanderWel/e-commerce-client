import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { gql } from '@apollo/client';
import client from '../apollo/apolloClient';

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query pokemon {
        pokemon {
          name
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
  console.log(props.pokemon);
  return (
    <ul>
      {props.pokemon.map(({ name }: any) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};

export default Home;
