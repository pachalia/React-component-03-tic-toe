import { IInformationProps } from '../../../interfaces/props.interface.ts';

export const InformationLayout: React.FC<IInformationProps> = ({
	currentPlayer,
	isDraw,
	isGameEnded,
}) => {
	return (
		<>
			{isDraw && <h1 style={{ textAlign: 'center' }}>Ничья</h1>}
			{!isDraw && isGameEnded && (
				<h1 style={{ textAlign: 'center' }}>Победа: {currentPlayer}</h1>
			)}
			{!isDraw && !isGameEnded && (
				<h1 style={{ textAlign: 'center' }}>Ходит: {currentPlayer}</h1>
			)}
		</>
	);
};
