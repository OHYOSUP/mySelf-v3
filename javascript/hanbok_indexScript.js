import { nextPage, prevPage  } from "../javascript/pageScrollEvent/pageScrollEvent.js";
import { scrollElemFadein } from "../javascript/element-scroll-fadein/element-scroll-fadein.js";


const root = document.getElementById('root');
const containerOne = document.getElementById('containerOne');
const description_one = document.getElementById('description_one');


nextPage(root,'wheel', containerOne);
scrollElemFadein(containerOne,"",description_one, 5);
