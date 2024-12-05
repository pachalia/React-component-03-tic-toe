import { IFieldProps } from '../../../interfaces/props.interface.ts';
import styles from './field.layout.module.css';
import { isWin } from '../../../utils/utils.ts';

export const FieldLayout: React.FC<IFieldProps> = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	setIsDraw,
	setIsGameEnded,
	isGameEnded,
}) => {
	const clickHandler = (i: number) => {
		if (field[i] === '') {
			const array = field;
			array[i] = currentPlayer;
			setField(array);
		}

		isWin(field, currentPlayer)
			? setIsGameEnded(true)
			: setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');

		if (!field.includes('')) {
			if (isWin(field, currentPlayer)) {
				setIsGameEnded(true);
			} else {
				setIsGameEnded(true);
				setIsDraw(true);
			}
		}
	};
	return (
		<>
			<div className={styles.container}>
				{field?.map((val, i) => (
					<div className={styles.cells} key={i}>
						<button
							className={styles.button}
							onClick={() => clickHandler(i)}
							disabled={isGameEnded}
						>
							{val}
						</button>
					</div>
				))}
			</div>
		</>
	);
};
