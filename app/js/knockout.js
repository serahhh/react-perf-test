import { observable, observableArray, applyBindings, utils } from 'knockout';
import { buildData } from './utils';

observableArray.fn.reset = (values) => {
    const array = this();
    this.valueWillMutate();
    utils.arrayPushAll(array, values);
    this.valueHasMutated();
};

export default function() {
    applyBindings({

        selected: observable(),
        data: observableArray(),

        select(item) {
            this.selected(item.id);
        },

        run() {
            const data = buildData();
            const date = new Date();

            this.selected(null);
            this.data(data);
            document.getElementById('run-knockout').innerHTML = `${(new Date() - date)} ms`;
        },

    }, document.getElementById('knockout'));
}
