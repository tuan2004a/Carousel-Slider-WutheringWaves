//types/charactertypes.ts

export interface Resonators {
	id: number;
	name: string;
	textColor: string;
	bgColor: string;
	image: string;
	class: string;
}

export interface CharacterProps{
	item?: Resonators;
}