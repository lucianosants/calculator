import styles from './Display.module.css';

export default function Display({ onValue }) {
	return (
		<input
			readOnly
			disabled
			className={styles.display__input}
			value={onValue}
		/>
	);
}
