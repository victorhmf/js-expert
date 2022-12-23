import RickAndMortyUSAAdapter from "../../../src/business/adapters/rickAndMortyUSAAdapter";
import RickAndMortyUSA from "../../../src/business/integrations/rickAndMortyUSA";

describe('RickAndMortyUSAAdapter', () => {
  beforeEach(() => jest.clearAllMocks())
  describe('#getCharacters', () => {
    test('should be an adapter for RickAndMortyUSA.getCharactersXML', async () => {
      const usaIntegration = jest.spyOn(
        RickAndMortyUSA, 
        RickAndMortyUSA.getCharactersFromXML.name
      ).mockResolvedValue([])
      
      const result = await RickAndMortyUSAAdapter.getCharacters()
      expect(result).toEqual([])
      expect(usaIntegration).toHaveBeenCalled()
    });
  });
});