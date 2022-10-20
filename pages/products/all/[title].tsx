import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '../../../components/Layout';
import TopBar from '../../../components/TopBar';
import { ProductCard } from '../../../components/ProductCard';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import { ProductSlugDataQuery } from '../../../generated/graphql';

const Title: NextPage = () => {
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

  const productList = Object.values(data);

  const listItem = productList.map((item) => {
    return (
      <Link href={`/products/${item.slug}`} key={item.id}>
        <a>
          <ProductCard item={item} />
        </a>
      </Link>
    );
  });

  return (
    <Layout>
      <>
        <TopBar title={topBarTitle} />
        <div className="card-area">{listItem}</div>
      </>
    </Layout>
  );
};

export default Title;
