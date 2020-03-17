import Axios from 'axios';

export class BasicSite {
  /**
   *
   * @param {import("mongoose").Document} site
   */
  constructor(site) {
    this.site = site;
  }

  async getProducts() {
    const response = await Axios.get(this.site.url + '/products.json', {
      responseType: 'json',
    });

    const products = response.data.products.map(siteProduct => {
      const variantArray = siteProduct.variants.map(variant => {
        return {
          name: variant.title,
          price: variant.price,
          lastUpdated: new Date(variant.updatedAt).getTime(),
          id: variant.id,
        };
      });

      const product = {
        variants: variantArray,
        name: siteProduct.title,
        handle: siteProduct.handle,
        id: siteProduct.id,
      };

      return product;
    });

    this.site.products = products.filter(product => {
      if (this.site.products.find(loadedProduct => loadedProduct.id === product.id)) {
        // TODO: This product is already loaded. Compare, notify and update where necessary
      } else {
        // TODO: This product was newly added! Notify and save it
      }
    });

    await this.site.save();
  }
}
