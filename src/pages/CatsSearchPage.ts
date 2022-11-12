import {Page, pageObject, Element} from 'eva.io-core';

@pageObject
export default class CatsSearchPage extends Page {
    catImage = new Element('Котик', '//figure');
    namesCats = elements.Array(new Element('Все имена котиков', '//span[contains(@class, "tag")]//a'));
    //filteredNamesArray = this.namesCats.filter(element => element.getText().search(/$(partName)/i));
    isLoaded(): boolean {
        return this.catImage.isLoaded();
    }
}
