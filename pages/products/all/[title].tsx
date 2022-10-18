import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '../../../components/Layout';
import TopBar from '../../../components/TopBar';
import { ProductCard } from '../../../components/ProductCard';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import { ProductSlugDataQuery } from '../../../generated.tsx/graphql';

const Title: NextPage => {
  const router = useRouter();
  const { title } = router.query;

  const query = gql`
  {
  ${title} {
    id
    slug
    title
    brand
    price
    promotion
    newProduct
    onDiscount
    stock
    images {
      url
    }
  }
}
`;

  type Data = {
    id: string;
    onDiscount?: boolean | null;
    newProduct?: boolean | null;
    promotion?: boolean | null;
    stock?: number | null;
    brand?: string | null;
    price?: number | null;
    title: string;
    slug?: string | null;
    images?: {
      __typename?: 'Asset';
      url: string;
    } | null;
  }[];

  const { data, loading, error } = useQuery<Data>(query, {
    variables: { slug: title },
  });

  if (loading) {
    <main>loading...</main>;
  }
  if (error || !data) {
    return <main>{error?.message || 'エラーです'}</main>;
  }

  const titleKey = Object.keys(data).toString();

  const topBarTitle =
    titleKey.charAt(0).toUpperCase() + titleKey.slice(1).replace('_', ' ');

  const listItem = Object.keys(data).map((item) => {
    // console.log('item', item);
    // console.log('item', data[item]);
    const productItem = data[item].map((product) => {
      return (
        <Link href={`/products/${product.slug}`} key={product.id}>
          {/* <li>{product.brand}</li> */}
          <a>
            <ProductCard item={product} />
          </a>
        </Link>
      );
    });
    return productItem;
  });

  return (
    <Layout>
      <>
        <TopBar title={topBarTitle ? topBarTitle : 'Product'} />
        <div className="card-area">{listItem}</div>
      </>
    </Layout>
  );
};

export default Title;
