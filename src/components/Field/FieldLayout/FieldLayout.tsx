import { IFieldProps } from '../../../interfaces/props.interface.ts';
import styles from './field.layout.module.css';

export const FieldLayout: React.FC<IFieldProps> = ({
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
