export class Transaction {
    constructor(
        public vendor: string,
        public purchaseDate: Date,
        public category: string,
        public item: string,
        public description: string,
        public cost: number,
        public imagePath: string
    ){}
}