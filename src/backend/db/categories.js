import { v4 as uuid } from "uuid";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Macrame",
    image:"https://res.cloudinary.com/dgomw715r/image/upload/v1655137154/ProjectImages/living-room_spfgxn.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Plants",
    image:"https://res.cloudinary.com/dgomw715r/image/upload/v1655137154/ProjectImages/dining-room_ttczqa.jpg",
  },
  {
    _id: uuid(),
    categoryName: "DreamCatcher",
    image:"https://res.cloudinary.com/dgomw715r/image/upload/v1655137154/ProjectImages/kitchen-image_cg8suf.jpg",
   
  },
];
