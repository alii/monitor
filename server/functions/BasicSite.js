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

    this.site.products = products.filter(async product => {
      if (this.site.products.find(loadedProduct => loadedProduct.id === product.id)) {
        const productPage = await this.get(`${this.site.url}/products/${this.product.handle}`);
        const $ = cheerio.load(productPage.data);
        const productJSON = JSON.parse($('script[data-product-json]').text());

        console.log(productJSON);
      } else {
        // TODO: This product was newly added! Notify and save it
      }
    });

    await this.site.save();
  }
}
