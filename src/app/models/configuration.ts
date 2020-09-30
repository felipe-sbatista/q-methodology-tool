export class Configuration {
    public levels: any[];
    public key: string;
    public user: string;

    constructor(levels: any[] = [], key: string = '', user: string = '') {
        this.levels = levels;
        this.key = key;
        this.user = user;
    }

}
