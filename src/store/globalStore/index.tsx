import { observable, action } from 'mobx';

interface IGlobalStore {
    num: number;
    setNum(name: string): void;
}

class GlobalStore implements IGlobalStore {
    @observable num: number = 10;

    @action public setNum = (type: string): void => {
        if (type === 'incress') {
            this.num += 1;
        } else {
            this.num -= 1;
        }
    }
}

export { GlobalStore };
