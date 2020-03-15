import Site from '../models/Site';
import Product from '../models/Product';
import Axios from 'axios';
export class BasicSite {
  constructor(mongoID) {
    this.site = Site.findOne({ _id: mongoID });
  }

  async getProducts() {
    let response = await Axios.get(this.site.url + '/products.json');
    let siteProductArray = response.data.products;
    let productArray = [Product];
    for (let i = 0; i < siteProductArray.length; i++) {
      let variantArray = [];
      for (let j = 0; j < siteProductArray[i].variants.length; j++) {
        let variant = siteProductArray[i].variants[j];
        variantArray.push(variant);
      }
      productArray.push(
        new Product.create({
          variants: variantArray,
          name: siteProductArray[i].title,
          handle: siteProductArray[i].handle,
          id: siteProductArray[i].id,
        }),
      );
    }

    this.site.products = productArray;
  }
}
