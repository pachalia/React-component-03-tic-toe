import { IFieldLayoutProps } from '../../../interfaces/props.interface.ts';
import styles from './field.layout.module.css';

export const FieldLayout: React.FC<IFieldLayoutProps> = ({
	field,
	isGameEnded,
	clickHandler,
}) => {
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
