import { FieldLayout } from './FieldLayout/FieldLayout.tsx';
import { IFieldProps } from '../../interfaces/props.interface.ts';

export const Field: React.FC<IFieldProps> = ({
	field,
	setField,
	currentPlayer,
	isGameEnded,
}) => {
	return (
		<FieldLayout
			field={field}
			setField={setField}
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
		/>
	);
};
