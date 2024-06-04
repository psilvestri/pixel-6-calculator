const UPPERKEYS = ['\u{221A}', '\u{03C0}', '^', '!', '\u{2304}'];
const LOWERKEYS = [
	'AC',
	'( )',
	'%',
	'\u{00F7}',
	'7',
	'8',
	'9',
	'\u{00D7}',
	'4',
	'5',
	'6',
	'-',
	'1',
	'2',
	'3',
	'+',
	'0',
	'.',
	'\u{232B}',
	'=',
];

const upperKeyboard = UPPERKEYS.map((key) => (
	<div
		style={{
			width: '65px',
			height: '65px',
			margin: '1%',
			alignContent: 'center',
			textAlign: 'center',
		}}
	>
		{key}
	</div>
));

const lowerKeyboard = LOWERKEYS.map((key) => (
	<div
		style={{
			width: '65px',
			height: '65px',
			backgroundColor: 'rgb( 52, 61, 64 )',
			borderRadius: '100%',
			margin: '1%',
			alignContent: 'center',
			textAlign: 'center',
		}}
	>
		{key}
	</div>
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
