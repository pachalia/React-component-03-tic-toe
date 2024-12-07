import { Information } from '../../Information/Information.tsx';
import { Field } from '../../Field/Field.tsx';
import { IProps } from '../../../interfaces/props.interface.ts';

export const GameLayout: React.FC<IProps> = ({
	field,
	setField,
	currentPlayer,
	isDraw,
	isGameEnded,
}) => {
	return (
		<>
			<Information
				currentPlayer={currentPlayer}
				isDraw={isDraw}
				isGameEnded={isGameEnded}
			/>
			<Field
				field={field}
				setField={setField}
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
			/>
		</>
	);
};
