import CatsAllNamesPage from "./CatsAllNamesPage";
import CatsSearchPage from "./CatsSearchPage";

const catsAllNamesPage: CatsAllNamesPage = new CatsAllNamesPage('Все котики', '/all-names');
const catsSearchPage: CatsSearchPage = new CatsSearchPage('Страница поиска котиков', '/search/:catName');

export default {
    catsAllNamesPage: catsAllNamesPage,
    catsSearchPage: catsSearchPage
}