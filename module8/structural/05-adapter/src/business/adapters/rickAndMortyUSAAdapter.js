import RickAndMortyUSA from "../../../src/business/integrations/rickAndMortyUSA.js";

export default class RickAndMortyUSAAdapter {
  static async getCharacters() {
    return RickAndMortyUSA.getCharactersFromXML()
  }
}