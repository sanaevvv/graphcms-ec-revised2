import Link from 'next/link';
import { ProductsDocument, ProductsQuery } from '../generated/graphql';
import { useQuery } from '@apollo/client';
import { ListItem } from './ListItem';

export const MenuList = () => {
  const { data, loading, error } = useQuery<ProductsQuery>(ProductsDocument);

  if (loading) {
    <main>loading...</main>;
  }
  if (error) {
    <main>{error.message}</main>;
  }

  type ProductType = Omit<ProductsQuery, '__typename'>;

  function maphoge(data: ProductsQuery): ProductType {
    const returnedTarget = Object.assign({}, data); //dataのクローンを作る
    delete returnedTarget.__typename; //__typenameを削除
    return returnedTarget;
  }

  const _data = data ? maphoge(data) : null;
  const productArry = _data ? Object.keys(_data) : [];
  const productList = _data ? Object.values(_data) : [];

  const listItem = productArry.map((item, idx) => {
    const spaced = item.replace('_', ' ');
    const listItemTitle = spaced.charAt(0).toUpperCase() + spaced.slice(1);

    const productBrands = productList[idx].map((product) => {
      if (!product.brand) return;
      return product.brand;
    });

    const uniqueBrands = [...new Set(productBrands)];

    return (
      <ListItem
        key={idx}
        itemDetails={productList[idx]}
        itemTitle={listItemTitle}
        uniqueBrands={uniqueBrands}
        rawTitle={item}
      />
    );
  });

  return (
    <div>
      <div className="menu-on-left">
        <div className="menu-section">
          <div className="menu-title-section">
            <div className="menu-title">
              <div className="title-section">
                <h3 className="title">Products</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="category">
        <Link href="/">
          <a>New & PromoProducts</a>
        </Link>
      </div>
      <ul>{listItem}</ul>
    </div>
  );
};
