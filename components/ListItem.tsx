import Link from 'next/link';
import { FC, useState } from 'react';
import { ProductsQuery } from '../generated/graphql';

type Props = {
  itemDetails: {
    __typename?: string | undefined;
    id: string;
    slug?: string | null | undefined;
    title: string;
    brand?: string | null | undefined;
  }[];
  rawTitle: string;
  itemTitle: string;
  uniqueBrands: (string | undefined)[];
};
export const ListItem: FC<Props> = ({
  itemDetails,
  itemTitle,
  uniqueBrands,
  rawTitle,
}) => {
  const [brands, setBrands] = useState<(string | undefined)[]>([]);
  const handleOnMouseOver = () => {
    uniqueBrands.length > 1 ? setBrands(uniqueBrands) : [];
  };
  const handleOnMouseLeave = () => {
    brands && setBrands([]);
  };

  return (
    <div
      className="menu-wrapper"
      onMouseOver={handleOnMouseOver}
      onMouseLeave={handleOnMouseLeave}
    >
      <div className="menuSubMenu">
        <div className="noBrandItem category">
          <Link href={`/products/all/${rawTitle}`}>
            <a>{itemTitle}</a>
          </Link>
        </div>
        <div>
          <div className="subItemDiv">
            {brands &&
              brands.map((brand, idx) => {
                return (
                  <div key={idx}>
                    <p className="category border-left">
                      <Link href={`/products/brands/${brand}-${rawTitle}`}>
                        <a>{brand}</a>
                      </Link>
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
