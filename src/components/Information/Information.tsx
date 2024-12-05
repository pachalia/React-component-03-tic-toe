import { InformationLayout } from './InformationLayout/InformationLayout.tsx';
import { IInformationProps } from '../../interfaces/props.interface.ts';

export const Information: React.FC<IInformationProps> = ({
	currentPlayer,
	isDraw,
	isGameEnded,
}) => {
	return (
		<InformationLayout
			currentPlayer={currentPlayer}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
		/>
	);
};
