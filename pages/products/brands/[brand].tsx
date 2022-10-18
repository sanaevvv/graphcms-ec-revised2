import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '../../../components/Layout';
import TopBar from '../../../components/TopBar';
import { ProductCard } from '../../../components/ProductCard';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';

const BrandOfProducts: NextPage = () => {
  const router = useRouter();
  const { brand }  = router.query;
  const splitBrand: string[] =brand && typeof brand==='string'? brand.split('-') : [];

  const theBrand = splitBrand[0];
  const theProducts = splitBrand[1];
  // console.log();

  const query = gql`
   ($theBrand: String!){
    ${theProducts}(where: { brand: $theBrand }) {
      id
      price
      slug
      title
      brand
      promotion
      newProduct
      onDiscount
      manufacturer
      manufacturerLink
      images {
        url
      }
      description {
        raw
      }
      discountPercent
      stock
    }
  `;

  type Data = {
    id: string;
    price?: number | null;
    slug?: string | null;
    title: string;
    brand?: string | null;
    promotion?: boolean | null;
    newProduct?: boolean | null;
    onDiscount?: boolean | null;
    manufacturer?: string | null;
    manufacturerLink?: string | null;
    warrancy?: number | null;
    discountPercent?: number | null;
    stock?: number | null;
    images?: {
      __typename?: 'Asset';
      url: string;
    } | null;
    description?: {
      __typename?: 'RichText';
      raw: any;
    } | null;
  }[];

  const { data, loading, error } = useQuery<Data>(query, {
    variables: { slug: theBrand },
  });

  if (loading) {
    <main>loading...</main>;
  }
  if (error || !data) {
    return(
      <main>{error?.message || 'エラーです'}</main>
    )
  }

  const listItem = Object.keys(data).map((item) => {
    // console.log('item', item);
    // console.log('item', data[item]);
    const productItem = data[item].map((product) => {
      return (
        <Link href={`/products/${product.slug}`} key={product.id}>
          <li>{product.brand}</li>
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
        <TopBar title={theBrand} />
        <div className="card-area">{listItem}</div>
      </>
    </Layout>
  );
};

export default BrandOfProducts;
