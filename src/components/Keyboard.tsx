import styles from '../styles/Keyboard.module.css';

const UPPERKEYS: { id: string; symbol: string }[] = [
	{ id: 'squareRoot', symbol: '\u{221A}' },
	{ id: 'pi', symbol: '\u{03C0}' },
	{ id: 'caret', symbol: '^' },
	{ id: 'factorial', symbol: '!' },
	{ id: 'dropdown', symbol: '\u{2304}' },
];

const LOWERKEYS: { id: string; symbol: string }[] = [
	{ id: 'allClear', symbol: 'AC' },
	{ id: 'parentheses', symbol: '( )' },
	{ id: 'modulus', symbol: '%' },
	{ id: 'divide', symbol: '\u{00F7}' },
	{ id: 'seven', symbol: '7' },
	{ id: 'eight', symbol: '8' },
	{ id: 'nine', symbol: '9' },
	{ id: 'multiply', symbol: '\u{00D7}' },
	{ id: 'four', symbol: '4' },
	{ id: 'five', symbol: '5' },
	{ id: 'six', symbol: '6' },
	{ id: 'subtract', symbol: '-' },
	{ id: 'one', symbol: '1' },
	{ id: 'two', symbol: '2' },
	{ id: 'three', symbol: '3' },
	{ id: 'add', symbol: '+' },
	{ id: 'zero', symbol: '0' },
	{ id: 'decimal', symbol: '.' },
	{ id: 'backspace', symbol: '\u{232B}' },
	{ id: 'equals', symbol: '=' },
];

const upperKeyboard = UPPERKEYS.map((key) => (
	<div className={styles.upperKey}>{key.symbol}</div>
));

const lowerKeyboard = LOWERKEYS.map((key) => (
	<div className={styles.lowerKey}>{key.symbol}</div>
));

function Keyboard() {
	return (
		<div
			style={{
				color: 'white',
				fontSize: '1.8em',
				fontFamily: 'Open Sans',
			}}
		>
			<div
				style={{
					height: '70px',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
				}}
			>
				{upperKeyboard}
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					justifyContent: 'center',
				}}
			>
				{lowerKeyboard}
			</div>
		</div>
	);
}

export default Keyboard;
