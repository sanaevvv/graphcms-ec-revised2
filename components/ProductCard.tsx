import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import {
  useGetItemDetails,
  ProductCard as ProductCardType,
} from '../hooks/useGetItemDetails';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IconContext } from 'react-icons';

type Props = {
  item: ProductCardType;
};

export const ProductCard: FC<Props> = ({ item }) => {
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
    warranty,
    manufacturer
  } = useGetItemDetails(item);

  console.log('discountPrice', discountPrice);

  return (
    <div>
      <div className={`${stock && stock < 1 && 'out-of-stock'}`}>
        <div className="promo-banner">
          {imgsrc && (
            <Image src={imgsrc} height={62} width={100} alt="promo-banner" />
          )}
        </div>

        <div className="img-wrapper">
          {mainImgsrc && (
            <Image src={mainImgsrc} height={200} width={200} alt={title} />
          )}
        </div>

        <h3>{item.title}</h3>

        {isPromoProd ? (
          <dl className="price-area">
            <dt>通常価格:</dt>
            <dd>${price}</dd>
            <dt>割引:</dt>
            <dd>-{discount}% OFF</dd>
            <dt>割引価格:</dt>
            <dd>${discountPrice}</dd>
          </dl>
        ) : isNewProd ? (
          <>
            <p>New Product</p>
            <dl className="price-area">
              <dt>Current Price</dt>
              <dd>${price}</dd>
            </dl>
          </>
        ) : (
          <>
            <p>Regular Product</p>
            <dl>
              <dt>Regular Price</dt>
              <dd>${price}</dd>
            </dl>
          </>
        )}
        <div>
          <Link href="">
            <a>
              <button
                disabled={stock && stock < 1 ? true : false}
                className="cart-btn"
              >
                {stock && stock > 0 ? 'Add to Cart' : 'out of Stock'}
                <IconContext.Provider value={{ className: 'cart-icons' }}>
                  <AiOutlineShoppingCart />
                </IconContext.Provider>
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
