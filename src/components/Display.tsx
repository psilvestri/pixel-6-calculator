import styles from '../styles/Display.module.css';

function Display() {
	return (
		<div
			style={{
				width: '100%',
				height: '200px',
				backgroundColor: 'rgb( 61, 99, 113 )',
				borderRadius: ' 10px 10px 30px 30px',
				display: 'flex',
				flexDirection: 'column-reverse',
				alignItems: 'flex-end',
				justifyContent: 'center',
			}}
		>
			<div
				className={`${styles.indicator}`}
				style={{
					background: 'rgb( 47, 188, 235 )',
					height: '100px',
					width: '1.5px',
					margin: '0 20px',
				}}
			></div>
		</div>
	);
}

export default Display;
