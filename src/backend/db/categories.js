import { v4 as uuid } from "uuid";
import macrame from "../../assets/featuremacrame.png";
import plants from "../../assets/featureplants.jpg";
import dreamcatcher from "../../assets/featuredream.png";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Macrame",
    image:macrame,
  },
  {
    _id: uuid(),
    categoryName: "Plants",
    image:plants,
  },
  {
    _id: uuid(),
    categoryName: "DreamCatcher",
    image:dreamcatcher,
   
  },
];
