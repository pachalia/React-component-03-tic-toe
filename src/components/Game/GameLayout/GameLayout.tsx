import { Information } from '../../Information/Information.tsx';
import { Field } from '../../Field/Field.tsx';
import { IProps } from '../../../interfaces/props.interface.ts';

export const GameLayout: React.FC<IProps> = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isDraw,
	setIsDraw,
	isGameEnded,
	setIsGameEnded,
}) => {
	const clickHandler = () => {
		setIsGameEnded(false);
		setIsDraw(false);
		setCurrentPlayer('X');
		setField(['', '', '', '', '', '', '', '', '']);
	};
	return (
		<>
			<Information
				setCurrentPlayer={setCurrentPlayer}
				currentPlayer={currentPlayer}
				field={field}
				setField={setField}
				setIsDraw={setIsDraw}
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
			/>
			<Field
				field={field}
				setField={setField}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				setIsDraw={setIsDraw}
				setIsGameEnded={setIsGameEnded}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			{isGameEnded && (
				<button
					onClick={clickHandler}
					style={{ margin: '30px auto', display: 'block' }}
				>
					Начать сначала
				</button>
			)}
		</>
	);
};
