import { v4 as uuid } from "uuid";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Macrame",
    image:"https://res.cloudinary.com/dgomw715r/image/upload/v1647577729/ProjectImages/featuremacrame_xmaodp.png",
  },
  {
    _id: uuid(),
    categoryName: "Plants",
    image:"https://res.cloudinary.com/dgomw715r/image/upload/v1647577729/ProjectImages/featureplants_byrfgl.jpg",
  },
  {
    _id: uuid(),
    categoryName: "DreamCatcher",
    image:"https://res.cloudinary.com/dgomw715r/image/upload/v1647577729/ProjectImages/featuredream_zhaeux.png",
   
  },
];
