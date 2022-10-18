import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout';
import TopBar from '../../components/TopBar';
import { RichText } from '@graphcms/rich-text-react-renderer';
import {
  ProductDataQuery,
  ProductDataDocument,
} from '../../generated.tsx/graphql';
import { useGetItemDetails, ProductCard } from '../../hooks/useGetItemDetails';
import Image from 'next/image';
import { NextPage } from 'next';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const SlugPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data, loading, error } = useQuery<ProductDataQuery>(
    ProductDataDocument,
    { variables: { slug: slug } }
  );

  if (loading) {
    <main>loading...</main>;
  }
  if (error) {
    <main>{error.message}</main>;
  }

  type ProductType = Omit<ProductDataQuery, '__typename'>;

  function maphoge(data: ProductDataQuery): ProductType {
    const returnedTarget = Object.assign({}, data); //dataのクローンを作る
    delete returnedTarget.__typename; //__typenameを削除
    return returnedTarget;
  }
  const _data = data ? maphoge(data) : null;
  const productList = _data ? Object.values(_data) : [];

  // let item: ProductCard={};


  const item: ProductType = productList.map((items) =>
    items.map((i) => {
      //   item = {
      //     id: i.id,
      //     stock: i.stock,
      //     price: i.price,
      //     newProduct: i.newProduct,
      //     onDiscount: i.onDiscount,
      //     promotion: i.promotion,
      //     title: i.title,
      //     slug: i.slug,
      //     subtitle: i.subtitle,
      //   //   images: {
      //   // url: i.url;
      // // };
      // // description?: {
      // //   __typename?: 'RichText';
      // //   raw: RichTextContent;
      // // } | null;
      // // manufacturerLink?: string | null;
      //     warranty: String(i.warranty),
      //   }
      return { item: i };
    })
  );
  // console.log('Item is', item);

  const {
    isNewProd,
    isPromoProd,
    tempPrice,
    price,
    discount,
    discountPrice,
    imgsrc,
    mainImgsrc,
    id,
    title,
    stock,
    subtitle,
    mainContent,
    manufacturer,
    warranty,
  } = useGetItemDetails(item);



  return (
    <Layout>
      <TopBar title={title} />
      <h3>{subtitle}</h3>
      <p>Product description: </p>
      <RichText
        content={mainContent ? mainContent : []}
        renderers={{
          h1: ({ children }) => <h1 style={{ color: 'red' }}>{children}</h1>,
          h2: ({ children }) => (
            <h2 style={{ background: 'lime' }}>{children}</h2>
          ),
        }}
      />
      {manufacturer && <a href={manufacturer}>More product details</a>}
      <Image src={imgsrc} alt="promo-new-product" width={90} height={145} />

      {mainImgsrc && (
        <Image src={mainImgsrc} alt={title} width={478} height={478} />
      )}
      {isPromoProd ? (
        <>
          <p>
            Price: ${price}-{discount}%OFF
          </p>
          <p>PromoPrice: ${discountPrice}</p>
        </>
      ) : isNewProd ? (
        <>
          <div>New Product</div>
          <p>Current price: ${price}</p>
        </>
      ) : (
        <>
          <div>Regular Product</div>
          <p>Current price: ${price}</p>
        </>
      )}
      <p>Warranty: {warranty}month</p>

      {stock && (
        <Link href="#">
          <a>
            {stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            <IconContext.Provider value={{ className: 'shopping-cart-icon' }}>
              <AiOutlineShoppingCart />
            </IconContext.Provider>
          </a>
        </Link>
      )}
    </Layout>
  );
};

export default SlugPage;
