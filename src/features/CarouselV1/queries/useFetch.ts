import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Resonators } from "../types/CharacterTypes";
import { JSON_URL } from "@/config/axiosInstance";

// Hook fetch danh sách Resonators từ json-server
const useFetch = () => {
    return useQuery<Resonators[]>({
        queryKey: ["resonators"],
        queryFn: async () => {
            // json-server thường có dạng: /resonators, /users, ...
            const res = await axios.get<Resonators[]>(`${JSON_URL}/resonators`);
            return res.data;
        },
    });
}; 

export default useFetch;
