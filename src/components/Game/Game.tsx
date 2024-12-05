import { GameLayout } from './GameLayout/GameLayout.tsx';
import { useState } from 'react';

export type player = 'X' | '0';
export type field = player | '';

export const Game: React.FC = () => {
	const [currentPlayer, setCurrentPlayer] = useState<player>('X');
	const [isGameEnded, setIsGameEnded] = useState<boolean>(false);
	const [isDraw, setIsDraw] = useState<boolean>(false);
	const [field, setField] = useState<field[]>(['', '', '', '', '', '', '', '', '']);

	return (
		<GameLayout
			field={field}
			setField={setField}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			isDraw={isDraw}
			setIsDraw={setIsDraw}
		/>
	);
};
