import Site from '../models/Site';
import Product from '../models/Product';
import Axios from 'axios';

export class BasicSite {
  constructor(mongoID) {
    this.site = Site.findOne({ _id: mongoID });
  }

  async getProducts() {
    const response = await Axios.get(this.site.url + '/products.json');
    const products = response.data.products.map(siteProduct => {
      const variantArray = siteProduct.variants.map(variant => {
        return {
          name: variant.title,
          price: variant.price,
          lastUpdated: new Date(variant.updatedAt).getTime(),
          id: variant.id,
        };
      });

      const product = new Product.create({
        variants: variantArray,
        name: siteProduct.title,
        handle: siteProduct.handle,
        id: siteProduct.id,
      });

      return product;
    });

    this.site.products = products;
  }
}
