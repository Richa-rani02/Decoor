import { v4 as uuid } from "uuid";
import productmacrame1 from "../../assets/productmacrame-1.png";
import productmacrame2 from "../../assets/productmacrame-2.png";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Feather Wall Macrame",
    price: "700",
    offprice:500,
    image:productmacrame1,
    rating:4.5,
    categoryName: "Macrame",
  },
  {
    title: "Feather Wall Macrame",
    price: "700",
    offprice:600,
    image:productmacrame2,
    rating:4,
    categoryName: "Macrame",
  },
  {
    title: "Feather Wall Macrame",
    price: "700",
    offprice:500,
    image:productmacrame1,
    rating:3.5,
    categoryName: "Macrame",
  },
  {
    title: "Feather Wall Macrame",
    price: "700",
    offprice:500,
    image:productmacrame2,
    rating:3.5,
    categoryName: "Macrame",
  },
  {
    title: "Feather Wall Macrame",
    price: "700",
    offprice:500,
    image:productmacrame1,
    rating:4.5,
    categoryName: "Macrame",
  },
];
