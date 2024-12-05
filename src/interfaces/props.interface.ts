import { field, player } from '../components/Game/Game.tsx';

export interface IProps {
	field: field[];
	setField: React.Dispatch<React.SetStateAction<field[]>>;
	currentPlayer: player;
	setCurrentPlayer: React.Dispatch<React.SetStateAction<player>>;
	isGameEnded: boolean;
	setIsGameEnded: React.Dispatch<React.SetStateAction<boolean>>;
	isDraw: boolean;
	setIsDraw: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IInformationProps
	extends Pick<IProps, 'isDraw' | 'currentPlayer' | 'isGameEnded'> {}

export interface IFieldProps extends Omit<IProps, 'isDraw'> {}
