import { useCallback } from "react"
import { ProductCard } from "./useGetItemDetails";

export function useRevisedUseGetItem() {
  function insertDecimal(num: number) {
    return (num / 100).toFixed(2);
  }
  const getItem = useCallback((item: ProductCard) => {

     const isNewProd = item.newProduct;
     const isPromoProd = item.promotion;
     const tempPrice = item.price ? item.price : 0;
     const price = insertDecimal(tempPrice);
     const discount = item.discountPercent ? item.discountPercent : 0;
     const discountPrice = insertDecimal(
       tempPrice - tempPrice * (discount / 100)
     );

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
  },[])

  return {
    getItem,
  };

}
