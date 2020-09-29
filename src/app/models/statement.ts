export class Statement {
    id: number;
    classification: string;
    status: string;
    text: string;
    explanation: string;

    constructor(id: number, text: string, status: string = undefined, classification: string = undefined) {
        this.id = id;
        this.text = text;
        this.status = status;
        this.classification = classification;
    }
}
