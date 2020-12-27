import fs from 'fs';
import * as yaml from 'js-yaml';

/**
 * This represents the config.yml
 * @class Config
 * @property {string} token
 * @property {string[]} owners
 */
export default class Config {
    public readonly token: string;

    public readonly owners: string[];

    constructor() {
      this.token = '';
      this.owners = [''];
    }

    /**
     * @throws {Error} If an attribute is missing from the config.yml
     */
    public static getConfig(): Config {
      const fileContents = fs.readFileSync('./config.yml', 'utf-8');
      const casted = yaml.safeLoad(fileContents) as Config;

      return casted;
    }
}
