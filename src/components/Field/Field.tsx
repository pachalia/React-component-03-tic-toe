import { FieldLayout } from './FieldLayout/FieldLayout.tsx';
import { IFieldProps } from '../../interfaces/props.interface.ts';

export const Field: React.FC<IFieldProps> = ({
	field,
	setField,
	currentPlayer,
	isGameEnded,
}) => {
	const clickHandler = (i: number) => {
		if (field[i] === '') {
			const array = field;
			array[i] = currentPlayer;
			setField(() => [...array]);
		}
	};
	return (
		<FieldLayout
			field={field}
			isGameEnded={isGameEnded}
			clickHandler={clickHandler}
		/>
	);
};
