import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '../../../components/Layout';
import TopBar from '../../../components/TopBar';
import { ProductCard } from '../../../components/ProductCard';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import {
  ProductDataDocument,
  ProductDataQuery,
} from '../../../generated/graphql';

const BrandOfProducts: NextPage = () => {
  const router = useRouter();
  const { brand } = router.query;
  const splitBrand: string[] =
    brand && typeof brand === 'string' ? brand.split('-') : [];

  const theBrand = splitBrand[0];
  const theProducts = splitBrand[1];
  // console.log('theBrand', theBrand);
  // console.log('theProducts', theProducts);

  // const query = gql`
  //   query ($slug: String!) {
  //   ${theProducts}(where: { slug: $slug }) {
  //     id
  //     images {
  //       url
  //     }
  //     onDiscount
  //     description {
  //       raw
  //     }
  //     newProduct
  //     promotion
  //     stock
  //     brand
  //     price
  //     title
  //     slug
  //     subtitle
  //     manufacturerLink
  //     warranty
  //   }
  // }
  //  `;

  const { data, loading, error } = useQuery<ProductDataQuery>(
    ProductDataDocument,
    {
      variables: { slug: theBrand },
    }
  );

  if (loading) {
    <main>loading...</main>;
  }
  if (error || !data) {
    return <main>{error?.message || 'エラーです'}</main>;
  }

  type ProductType = Omit<ProductDataQuery, '__typename'>;

  function maphoge(data: ProductDataQuery): ProductType {
    const returnedTarget = Object.assign({}, data); //dataのクローンを作る
    delete returnedTarget.__typename; //__typenameを削除
    return returnedTarget;
  }

  const _data = data ? maphoge(data) : null;
  const itemData = _data ? Object.values(_data) : [];
  const productItem = itemData[1].map((item) => {
    return (
      <Link href={`/products/${item.slug}`} key={item.id}>
        <a>
          <ProductCard item={item} />
        </a>
      </Link>
    );
  });

  // });

  return (
    <Layout>
      <>
        <TopBar title={theBrand} />
        <div className="card-area">{productItem}</div>
      </>
    </Layout>
  );
};

export default BrandOfProducts;
