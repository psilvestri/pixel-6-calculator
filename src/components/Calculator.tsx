import Display from './Display.tsx';
import Keyboard from './Keyboard.tsx';
import styles from '../styles/Calculator.module.css';

function Calculator() {
	return (
		<div className={styles.display}>
			<Display />
			<Keyboard />
		</div>
	);
}

export default Calculator;
