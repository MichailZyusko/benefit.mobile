import GreenParser from "./GreenParser";
import { IParserStrategy } from "./interfaces/IParserStrategy";
import { ProductsService } from "../../products/products.service";

class Parsers {
    private static parsers: Array<IParserStrategy>= [
        GreenParser.getInstance(),
    ];

    static async updatePriceInfo(productsService: ProductsService): Promise<void> {
        for (const parser of this.parsers) {
            await parser.parse(productsService);
        }
    }
}

export default Parsers;
