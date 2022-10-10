import styles from './Button.module.css';

export default function Button({
	children,
	onValue,
	onHandleClick,
	color_btn,
}) {
	return (
		<button
			type='button'
			className={
				color_btn === 'function'
					? styles.btn__function
					: '' || color_btn === 'number'
					? styles.btn__number
					: '' || color_btn === 'operator'
					? styles.btn__operator
					: '' || color_btn === 'zero'
					? styles.btn__zero
					: ''
			}
			value={onValue}
			onClick={onHandleClick}
		>
			{children}
		</button>
	);
}
