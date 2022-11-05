import { Product } from "../../types/product";

type BestOffer = {
  id: string,
  price: number,
  quantity: number,
  storeFranchise: string,
  storeAddres: string,
}

export default class ProductDto {
  public id: string
  public barcode: string;
  public name: string;
  public image: string | null;
  public category: string;
  public bestOffer: BestOffer | null;
  public cartQuantity = 0;

  private mapOffers = (offers: any[]): BestOffer | null => {
    if (!offers.length) return null;

    const bestOffer = offers.sort((a, b) => (a.price / a.quantity) - (b.price / b.quantity))[0];

    return {
      id: bestOffer.id,
      price: +(bestOffer.price / bestOffer.quantity) / 100,
      quantity: bestOffer.quantity,
      storeFranchise: bestOffer.store.franchise,
      storeAddres: bestOffer.store.address,
    }
  }

  constructor(product: Product) {
    this.id = product.id;
    this.barcode = product.barcode;
    this.name = product.name;
    this.image = product.image;
    this.category = product.category;
    this.bestOffer = this.mapOffers(product.offers);
  }
}