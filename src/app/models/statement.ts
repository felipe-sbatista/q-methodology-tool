export class Statement {
    id: number;
    classification: string;
    status: string;
    text: string;
    explanation: string;

    constructor(id, text) {
        this.id = id;
        this.text = text;
    }
}
