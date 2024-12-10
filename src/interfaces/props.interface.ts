import { field, player } from '../components/Game/Game.tsx';

export interface IProps {
	field: field[];
	setField: React.Dispatch<React.SetStateAction<field[]>>;
	currentPlayer: player;
	isGameEnded: boolean;
	isDraw: boolean;
}

export interface IInformationProps extends Omit<IProps, 'field' | 'setField'> {}

export interface IFieldProps extends Omit<IProps, 'isDraw'> {}

export interface IFieldLayoutProps extends Pick<IProps, 'field' | 'isGameEnded'> {
	clickHandler: Function;
}
