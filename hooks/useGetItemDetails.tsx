import { RichTextContent } from '@graphcms/rich-text-types';

export type ProductCard = {
  id: string;
  stock?: number | null;
  price?: number | null;
  newProduct?: boolean | null;
  onDiscount?: boolean | null;
  promotion?: boolean | null;
  title: string;
  slug?: string | null;
  subtitle?: string | null;
  discountPercent?: number | null;
  images?: {
    __typename?: 'Asset';
    url: string;
  } | null;
  description?: {
    __typename?: 'RichText';
    raw: RichTextContent;
  } | null;
  manufacturerLink?: string | null;
  warranty?: number | null;
};

function insertDecimal(num: number) {
  return (num / 100).toFixed(2);
}

export const useGetItemDetails = (item: ProductCard) => {
  const isNewProd = item.newProduct;
  const isPromoProd = item.promotion;
  const tempPrice = item.price ? item.price : 0;
  const price = insertDecimal(tempPrice);
  const discount = item.discountPercent ? item.discountPercent : 0;
  const discountPrice = insertDecimal(tempPrice - tempPrice * (discount / 100));

  let imgsrc = isNewProd
    ? '/new-red.svg'
    : isPromoProd
    ? '/sales-red.svg'
    : '/no-image.png';
  const mainImgsrc = item.images?.url;

  const id = item.id;
  const title = item.title;
  const stock = item.stock;
  const subtitle = item.subtitle;

  let mainContent;
  if (item.description) {
    mainContent = item.description.raw;
  }

  const manufacturer = item.manufacturerLink;
  const warranty = item.warranty;


  return {
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
  };
};
