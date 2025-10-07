import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import CharacterSlice from "@/store/slice/CharacterSlice";
import { Resonators } from "@/types/CharacterTypes";

interface CharacterProviderProps {
	children: ReactNode;
}

interface CharacterContextActions {
	LoadAllCharacters: () => Promise<void | Resonators[]>;
}

interface CharacterContextState {
	resonators: Resonators[];
}

type CharacterContextType = CharacterContextState & CharacterContextActions;

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

const initialState: CharacterContextState = {
	resonators: []
};

export const CharacterProvider = ({ children }: CharacterProviderProps) => {
	const [state, setState] = useState<CharacterContextState>(initialState);
    const [resonators, setResonators] = useState<Resonators[]>([]);

    const fetchsCharacterRef = useRef<boolean>(false);

    const LoadAllCharacters = useCallback(async () => {
        try {
            const res = await CharacterSlice.fetchAllCharacters();
            setResonators(res);
        } catch (error) {
            console.log(error);
        }
    }, []);


    useEffect(() => {
		if (!fetchsCharacterRef.current) {
			fetchsCharacterRef.current = true;
			LoadAllCharacters();
		}
	}, [LoadAllCharacters]);


    const contextValue: CharacterContextType = useMemo(() => ({
        ...state,
        resonators,
        LoadAllCharacters
    }), [state, resonators, LoadAllCharacters]);

    return <CharacterContext.Provider value={contextValue}>{children}</CharacterContext.Provider>;
}

export const useCharacterContext = () => {
	const context = useContext(CharacterContext);
	if (!context) {
		throw new Error("useCharacterContext must be used within a CharacterProvider");
	}
	return context;
};
