import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout';
import TopBar from '../../components/TopBar';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { ProductDataQuery, ProductDataDocument } from '../../generated/graphql';
import { useGetItemDetails, ProductCard } from '../../hooks/useGetItemDetails';
import Image from 'next/image';
import { NextPage } from 'next';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useRevisedUseGetItem } from '../../hooks/revisedUseGetItem';
import { gql, useQuery } from '@apollo/client';

type ProductType = Omit<ProductDataQuery, '__typename'>;

const SlugPage: NextPage = () => {
  // const { getItem } = useRevisedUseGetItem();
  const router = useRouter();
  const { slug } = router.query;

  const ProductItem = gql`
    query ProductData($slug: String!) {
      gPUs(where: { slug: $slug }) {
        id
        images {
          url
        }
        onDiscount
        description {
          raw
        }
        newProduct
        promotion
        stock
        brand
        price
        title
        slug
        subtitle
        manufacturerLink
        warranty
        manufacturer
        discountPercent
      }
      cPUs(where: { slug: $slug }) {
        id
        images {
          url
        }
        onDiscount
        description {
          raw
        }
        newProduct
        promotion
        stock
        brand
        price
        title
        slug
        subtitle
        manufacturerLink
        warranty
        manufacturer
        discountPercent
      }
      laptops(where: { slug: $slug }) {
        id
        images {
          url
        }
        onDiscount
        description {
          raw
        }
        newProduct
        promotion
        stock
        brand
        price
        title
        slug
        subtitle
        manufacturerLink
        warranty
        manufacturer
        discountPercent
      }
      motherboards(where: { slug: $slug }) {
        id
        images {
          url
        }
        onDiscount
        description {
          raw
        }
        newProduct
        promotion
        stock
        brand
        price
        title
        slug
        subtitle
        manufacturerLink
        warranty
        manufacturer
        discountPercent
      }
      storage_Equipment(where: { slug: $slug }) {
        id
        images {
          url
        }
        onDiscount
        description {
          raw
        }
        newProduct
        promotion
        stock
        brand
        price
        title
        slug
        subtitle
        manufacturerLink
        warranty
        manufacturer
        discountPercent
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
    subtitle?: string | null;
    manufacturerLink?: string | null;
    warranty?: number | null;
    manufacturer?: string | null;
    discountPercent?: number | null;
    images?: {
      __typename?: 'Asset';
      url: string;
    } | null;
    description?: {
      __typename?: 'RichText';
      raw: any;
    } | null;
  }[];

  const { data, loading, error } = useQuery<Data>(ProductItem, {
    variables: { slug: slug },
  });

  if (loading) {
    <main>loading...</main>;
  }
  if (error) {
    <main>{error.message}</main>;
  }
  console.log('data', data);
  return;
  function maphoge(data: ProductDataQuery): ProductType {
    const returnedTarget = Object.assign({}, data); //dataのクローンを作る
    delete returnedTarget.__typename; //__typenameを削除
    return returnedTarget;
  }
  const _data = data ? maphoge(data) : null;

  const productList = _data ? Object.values(_data) : [];

  console.log('hoge', productList);

  // if (productList.length < 1) return <></>;

  let item = {};

  productList.map((items) => {
    items.map((i) => {
      item = i;
    });
    // const res: ProductCard = {
    //   id: item.id,
    //   stock: item.stock,
    //   price: item.price,
    //   newProduct: item.newProduct,
    //   onDiscount: item.onDiscount,
    //   promotion: item.promotion,
    //   title: item.title,
    //   slug: item.slug,
    //   subtitle: item.subtitle,
    //   images: undefined,
    //   // {
    //   // url: i.images?.url,
    //   // },
    //   description: undefined,
    //   // {
    //   // __typename: i.__typename,
    //   // raw: i.description?.raw,
    //   // },

    //   manufacturerLink: item.manufacturerLink,
    //   warranty: item.warranty,
    // };
    // return { item };
  });

  // console.log('ProductList:', productList);

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

  console.log('Item is', item);
  // const getItemMap = item.map((data) => {
  //   return getItem(data);
  // });
  // console.log('getItemMap', getItemMap);

  // getItem(item)
  // id: string;
  // stock?: number | null;
  // price?: number | null;
  // newProduct?: boolean | null;
  // onDiscount?: boolean | null;
  // promotion?: boolean | null;
  // title: string;
  // slug?: string | null;
  // subtitle?: string | null;
  // discountPercent?: number | null;
  // images?: {
  //   __typename?: 'Asset';
  //   url: string;
  // } | null;
  // description?: {
  //   __typename?: 'RichText';
  //   raw: RichTextContent;
  // } | null;
  // manufacturerLink?: string | null;
  // warranty: string | null;

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
