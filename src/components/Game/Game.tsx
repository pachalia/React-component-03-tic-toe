import { GameLayout } from './GameLayout/GameLayout.tsx';
import { useEffect, useState } from 'react';
import { isWin } from '../../utils/utils.ts';

export type player = 'X' | '0';
export type field = player | '';

export const Game: React.FC = () => {
	const [currentPlayer, setCurrentPlayer] = useState<player>('0');
	const [isGameEnded, setIsGameEnded] = useState<boolean>(false);
	const [isDraw, setIsDraw] = useState<boolean>(false);
	const [field, setField] = useState<field[]>(['', '', '', '', '', '', '', '', '']);

	useEffect(() => {
		!field.includes('') && isWin(field, currentPlayer) ? setIsGameEnded(true) : null;
		if (!field.includes('') && !isWin(field, currentPlayer)) {
			setIsGameEnded(true);
			setIsDraw(true);
		}
		isWin(field, currentPlayer)
			? setIsGameEnded(true)
			: setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
	}, [field]);

	const clickHandler = () => {
		setIsGameEnded(false);
		setIsDraw(false);
		setCurrentPlayer('0');
		setField(['', '', '', '', '', '', '', '', '']);
	};
	return (
		<>
			<GameLayout
				field={field}
				setField={setField}
				currentPlayer={currentPlayer}
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
