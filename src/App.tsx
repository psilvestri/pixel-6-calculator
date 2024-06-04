import Display from './Display';
import Keyboard from './Keyboard';

function App() {
	return (
		<div
			style={{
				backgroundColor: 'rgb( 42, 45, 50 )',
				width: '300px',
				height: '650px',
				alignItems: 'center',
				borderRadius: '10px',
			}}
		>
			<Display />
			<Keyboard />
		</div>
	);
}

export default App;
