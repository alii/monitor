import { WebhookClient, MessageEmbed } from 'discord.js';

/**
 * @typedef {object} ariant
 * @property {string} name The name of the variant
 * @property {string} id The ID of the variant
 */

/**
 * @typedef {object} RestockData
 * @property {string} title The title of the product that restocked
 * @property {variant[]} variants The variants of the product
 */

export class RestockEmbed extends MessageEmbed {
  /**
   * Generates an embed for sending
   * @constructor
   * @param {RestockData} data The restock data
   */
  constructor(data) {
    super();
    this.setDescription(`Restock ${data.title}`);
  }
}

/**
 * Sends a restock to the Discord webhook
 * @param {RestockData} data The data of the restock
 */
export const notify = async data => {
  const hook = new WebhookClient(data.site.discordWebhook.id, data.site.discordWebhook.token);
  hook.send(new RestockEmbed(data));
};

export default notify;
