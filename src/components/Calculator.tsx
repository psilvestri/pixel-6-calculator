import Display from './Display.tsx';
import Keyboard from './Keyboard.tsx';

function Calculator() {
	return (
		<div
			style={{
				backgroundColor: 'rgb( 42, 45, 50 )',
				width: '300px',
				height: '650px',
				alignItems: 'center',
				borderRadius: '10px',
				margin: 'auto',
			}}
		>
			<Display />
			<Keyboard />
		</div>
	);
}

export default Calculator;
