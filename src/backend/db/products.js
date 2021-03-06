import { v4 as uuid } from "uuid";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    id: 1,
    title: "Glass Flower vase",
    price: "1190",
    offprice: 900,
    image: "https://res.cloudinary.com/dgomw715r/image/upload/v1655217334/ProjectImages/glass-1_bjdgto.jpg",
    rating: 5,
    tag:"bestseller",
    categoryName: "Glass Decor",
  },
  {
    _id: uuid(),
    title: "Wooden stand glass vase",
    price: "1584",
    offprice: 1400,
    image: "https://res.cloudinary.com/dgomw715r/image/upload/v1655217393/ProjectImages/glass-2_hqyrv1.jpg",
    rating: 4.7,
    tag:"",
    categoryName: "Glass Decor",
  },
  {
    _id: uuid(),
    title: "Blue Solid Glassvase",
    price: "1200",
    offprice: 1000,
    image: "https://res.cloudinary.com/dgomw715r/image/upload/v1655217446/ProjectImages/glass4_j76inr.jpg",
    rating: 4.5,
    tag:"",
    categoryName: "Glass Decor",
  },
  {
    _id: uuid(),
    title: "Ceremic vase",
    price: "1000",
    offprice: 900,
    image: "https://res.cloudinary.com/dgomw715r/image/upload/v1655217447/ProjectImages/glass3_thkdb2.jpg",
    rating: 3.5,
    tag:"",
    categoryName: "Glass Decor",
  },
  {
    _id: uuid(),
    title: "circular mirror",
    price: "700",
    offprice: 500,
    image: "https://res.cloudinary.com/dgomw715r/image/upload/v1647577271/ProjectImages/productmacrame-9_anrjcx.png",
    rating: 3,
    tag:"",
    categoryName: "Glass Decor",
  },
  {
    _id: uuid(),
    title: "Lamp glass flower vase",
    price: "1660",
    offprice: 1500,
    image: "https://res.cloudinary.com/dgomw715r/image/upload/v1655217514/ProjectImages/glass5_duisfm.jpg",
    rating: 3.8,
    tag:"",
    categoryName: "Glass Decor",
  },
  {
    _id: uuid(),
    title: "Handcrafted Flower vase",
    price: "2500",
    offprice: 2000,
    image: "https://res.cloudinary.com/dgomw715r/image/upload/v1655217617/ProjectImages/glass6_sgltvh.jpg",
    rating: 5,
    tag:"bestseller",
    categoryName: "Glass Decor",
  },
  {
    _id: uuid(),
    title: "Light with glasses",
    price: "3000",
    offprice: 2500,
    image: "https://res.cloudinary.com/dgomw715r/image/upload/v1655219208/ProjectImages/lightdecor2_yw4nvt.jpg",
    rating: 5,
    tag:"bestseller",
    categoryName: "Lights Decor",
  },
  {
    _id: uuid(),
    title: "Peacock design lights",
    price: "3000",
    offprice: 2000,
    image: "https://res.cloudinary.com/dgomw715r/image/upload/v1655219180/ProjectImages/lightdecor1_rnrcsm.jpg",
    rating: 4.5,
    tag:"",
    categoryName: "Lights Decor",
  },
  {
    _id: uuid(),
    title: "Mini led pot light",
    price: "2000",
    offprice: 1800,
    image: "https://res.cloudinary.com/dgomw715r/image/upload/v1655219207/ProjectImages/lightdecor4_piwr4u.jpg",
    rating: 4.8,
    tag:"",
    categoryName: "Lights Decor",
  },
  {
    _id: uuid(),
    title: "Moon shape led light",
    price: "1000",
    offprice: 800,
    image: "https://res.cloudinary.com/dgomw715r/image/upload/v1655219208/ProjectImages/lightdecor5_wdo0rq.jpg",
    rating: 4,
    tag:"",
    categoryName: "Lights Decor",
  },
  {
    _id: uuid(),
    title: "Bulb led fairy light",
    price: "1500",
    offprice: 1200,
    image: "https://res.cloudinary.com/dgomw715r/image/upload/v1655219207/ProjectImages/lightdecor3_boohqu.jpg",
    rating: 4.2,
    tag:"",
    categoryName: "Lights Decor",
  },
  {
    _id: uuid(),
    title: "Small plant multicolor",
    price: "700",
    offprice: 500,
    image: "https://res.cloudinary.com/dgomw715r/image/upload/v1655219392/ProjectImages/lightdecor6_n5iwnh.jpg",
    rating: 4,
    tag:"",
    categoryName: "Lights Decor",
  },
  {
    _id: uuid(),
    title: "Golden tree Decor",
    price: "2200",
    offprice: 2000,
    image: "https://res.cloudinary.com/dgomw715r/image/upload/v1655218064/ProjectImages/walldecor1_fawq6r.jpg",
    rating: 4.9,
    tag:"",
    categoryName: "Wall Decor",
  },
  {
    _id: uuid(),
    title: "Gold & silver painted",
    price: "5000",
    offprice: 4500,
    image: "https://res.cloudinary.com/dgomw715r/image/upload/v1655218064/ProjectImages/walldecor6_yv6pap.jpg",
    rating: 5,
    tag:"bestseller",
    categoryName: "Wall Decor",
  },
  {
    _id: uuid(),
    title: "Multicolor Fish design",
    price: "3000",
    offprice: 2800,
    image: "https://res.cloudinary.com/dgomw715r/image/upload/v1655218064/ProjectImages/walldecor4_zwdoo2.jpg",
    rating: 4.1,
    tag:"",
    categoryName: "Wall Decor",
  },
  {
    _id: uuid(),
    title: "Buddha painting set",
    price: "4000",
    offprice: 3000,
    image: "https://res.cloudinary.com/dgomw715r/image/upload/v1655218064/ProjectImages/walldecor2_gxkg3h.jpg",
    rating: 3.5,
    tag:"",
    categoryName: "Wall Decor",
  },
  {
    _id: uuid(),
    title: "Multicolor Triangle set ",
    price: "1400",
    offprice: 1300,
    image: "https://res.cloudinary.com/dgomw715r/image/upload/v1655218063/ProjectImages/walldecor5_mmxl38.jpg",
    rating: 1,
    tag:"",
    categoryName: "Wall Decor",
  },
  {
    _id: uuid(),
    title: "Painted Design on plates",
    price: "6000",
    offprice: 5000,
    image: "https://res.cloudinary.com/dgomw715r/image/upload/v1655218062/ProjectImages/walldecor3_xc4ntn.jpg",
    rating: 4.8,
    tag:"",
    categoryName: "Wall Decor",
  },

];
