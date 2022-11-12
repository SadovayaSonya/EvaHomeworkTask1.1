import { Step } from 'eva.io-allure';
import { Element } from "eva.io-core";
import assert from "assert";

export default class MySteps {

    @Step('Выполнена проверка того, что в списке котиков отображаются только котики, у которых в имени встречается "{1}"')
    static checkNamesCats(namesCats: Element[], partName: string): Eva.Steps {
        const filteredNamesArray = namesCats.filter(element => element.getText().search(/$(partName)/i));
        assert.equal(filteredNamesArray.length, namesCats.length);
        return steps;
    }
}
