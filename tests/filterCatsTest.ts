import { suite, test } from '@testdeck/mocha';
import Pages from '../src/pages/Pages';
import CatsAllNamesPage from '../src/pages/CatsAllNamesPage';
import CatsSearchPage from "../src/pages/CatsSearchPage";

const catsAllNamesPage: CatsAllNamesPage = Pages.catsAllNamesPage;
const catsSearchPage: CatsSearchPage = Pages.catsSearchPage;

@suite('test suite')
export class TestSuite {
    @test
    'Фильтрация котиков по части имени на странице "Все котики"'() {
        const partName = 'В';
        steps
            .goTo(catsAllNamesPage)
            .fillField(catsAllNamesPage.input, partName)
            .pressKeys(['Enter'])
            .checkCurrentUrl(`https://cats-ui-eva.tcsbank.ru/search/${encodeURI(partName)}`)
            .checkNamesCats(catsSearchPage.namesCats, partName);
    }
}
