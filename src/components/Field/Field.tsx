import { FieldLayout } from './FieldLayout/FieldLayout.tsx';
import { IFieldProps } from '../../interfaces/props.interface.ts';

export const Field: React.FC<IFieldProps> = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	setIsDraw,
	isGameEnded,
	setIsGameEnded,
}) => {
	return (
		<FieldLayout
			field={field}
			setField={setField}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			setIsDraw={setIsDraw}
			setIsGameEnded={setIsGameEnded}
			isGameEnded={isGameEnded}
		/>
	);
};
