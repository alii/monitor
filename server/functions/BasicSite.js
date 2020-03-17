import Axios from 'axios';
import cheerio from 'cheerio';

export class BasicSite {
  /**
   *
   * @param {import("mongoose").Document} site
   */
  constructor(site) {
    this.site = site;
  }

  async get(url, options) {
    return Axios.get(url, options);
  }

  async getProducts() {
    const response = await this.get(this.site.url + '/products.json', {
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

    this.site.products = products.filter(async _product => {
      const productPage = await this.get(`${this.site.url}/products/${_product.handle}`);
      const $ = cheerio.load(productPage.data);
      const product = JSON.parse($('script[data-product-json]').text());

      if (this.site.products.find(loadedProduct => loadedProduct.id === product.id)) {
        // TODO: Compare product and if necessary notify and save

        console.log(product);
      } else {
        // TODO: This product was newly added! Notify and save it
      }
    });

    await this.site.save();
  }
}
