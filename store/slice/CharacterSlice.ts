import { Resonators } from "@/types/CharacterTypes";
import CharacterService from "@/service/CharacterService";

class CharacterSlice {
	private constructor() {}

	static async fetchAllCharacters(): Promise<Resonators[]> {
		try {
			const res = await CharacterService.getAllCharacters();
			return res;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}

export default CharacterSlice;