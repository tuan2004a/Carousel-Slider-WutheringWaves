import { JSON_URL } from "@/config/axiosInstance";
import axios from "axios";
import { Resonators } from "@/types/CharacterTypes";

class CharacterService {
	private constructor() {}

	static async getAllCharacters(): Promise<Resonators[]> {
		try {
			const response = await axios.get<Resonators[]>(`${JSON_URL}/Resonators`);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}

export default CharacterService;