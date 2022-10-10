import { useState } from 'react';

import './App.css';
import styles from './App.module.css';

import Button from './components/Button';
import Display from './components/Display';

function App() {
	const [displayValue, setDisplayValue] = useState(0);
	const [oldDisplayValue, setOldDisplayValue] = useState(0);
	const [operation, setOperation] = useState('');

	const clearDisplay = () => {
		setDisplayValue(0);
		setOldDisplayValue(0);
		setOperation('');
	};

	const addDigit = (n) => {
		if (n === '.' && displayValue.includes('.')) return;

		displayValue === 0
			? setDisplayValue(n)
			: setDisplayValue(displayValue + n);
	};

	const handlePercentage = () => {
		setDisplayValue(displayValue / 100);
	};

	const handleChangeOperator = () => {
		displayValue > 0
			? setDisplayValue(-displayValue)
			: setDisplayValue(Math.abs(displayValue));
	};

	const handleOperation = (op) => {
		setOperation(op);
		setOldDisplayValue(displayValue);
		setDisplayValue(0);
	};

	const handleCalculate = () => {
		if (operation === '/') {
			setDisplayValue(
				parseFloat(oldDisplayValue) / parseFloat(displayValue)
			);
		}
		if (operation === 'X') {
			setDisplayValue(
				parseFloat(oldDisplayValue) * parseFloat(displayValue)
			);
		}
		if (operation === '-') {
			setDisplayValue(
				parseFloat(oldDisplayValue) - parseFloat(displayValue)
			);
		}
		if (operation === '+') {
			setDisplayValue(
				parseFloat(oldDisplayValue) + parseFloat(displayValue)
			);
		}
	};

	return (
		<div className='app'>
			<div className={styles.calculator__container}>
				<div className={styles.calculator__display}>
					<Display onValue={displayValue} />
				</div>
				<div className={styles.calculator__buttons}>
					<div className={styles.col__a}>
						<div className='buttons__functions'>
							<Button
								onValue={'AC'}
								color_btn={'function'}
								onHandleClick={(e) => clearDisplay()}
							>
								AC
							</Button>

							<Button
								onValue={'+/-'}
								color_btn={'function'}
								onHandleClick={() => handleChangeOperator()}
							>
								+/&minus;
							</Button>

							<Button
								onValue={'%'}
								color_btn={'function'}
								onHandleClick={() => handlePercentage()}
							>
								%
							</Button>
						</div>

						<div className='button__numbers--row--a'>
							<Button
								onValue={7}
								color_btn={'number'}
								onHandleClick={(e) => addDigit(e.target.value)}
							>
								7
							</Button>

							<Button
								onValue={8}
								color_btn={'number'}
								onHandleClick={(e) => addDigit(e.target.value)}
							>
								8
							</Button>

							<Button
								onValue={9}
								color_btn={'number'}
								onHandleClick={(e) => addDigit(e.target.value)}
							>
								9
							</Button>
						</div>

						<div className='button__numbers--row--b'>
							<Button
								onValue={4}
								color_btn={'number'}
								onHandleClick={(e) => addDigit(e.target.value)}
							>
								4
							</Button>

							<Button
								onValue={5}
								color_btn={'number'}
								onHandleClick={(e) => addDigit(e.target.value)}
							>
								5
							</Button>

							<Button
								onValue={6}
								color_btn={'number'}
								onHandleClick={(e) => addDigit(e.target.value)}
							>
								6
							</Button>
						</div>

						<div className='button__numbers--row--c'>
							<Button
								onValue={1}
								color_btn={'number'}
								onHandleClick={(e) => addDigit(e.target.value)}
							>
								1
							</Button>

							<Button
								onValue={2}
								color_btn={'number'}
								onHandleClick={(e) => addDigit(e.target.value)}
							>
								2
							</Button>

							<Button
								onValue={3}
								color_btn={'number'}
								onHandleClick={(e) => addDigit(e.target.value)}
							>
								3
							</Button>
						</div>

						<div className='button__numbers--row--d'>
							<Button
								onValue={0}
								color_btn={'zero'}
								onHandleClick={(e) => addDigit(e.target.value)}
							>
								0
							</Button>

							<Button
								onValue={'.'}
								color_btn={'number'}
								onHandleClick={(e) => addDigit(e.target.value)}
							>
								,
							</Button>
						</div>
					</div>

					<div className={styles.col__b}>
						<Button
							onValue={'/'}
							color_btn={'operator'}
							onHandleClick={(e) =>
								handleOperation(e.target.value)
							}
						>
							&divide;
						</Button>

						<Button
							onValue={'X'}
							color_btn={'operator'}
							onHandleClick={(e) =>
								handleOperation(e.target.value)
							}
						>
							X
						</Button>

						<Button
							onValue={'-'}
							color_btn={'operator'}
							onHandleClick={(e) =>
								handleOperation(e.target.value)
							}
						>
							&minus;
						</Button>

						<Button
							onValue={'+'}
							color_btn={'operator'}
							onHandleClick={(e) =>
								handleOperation(e.target.value)
							}
						>
							+
						</Button>

						<Button
							onValue={'='}
							color_btn={'operator'}
							onHandleClick={() =>
								handleCalculate(
									displayValue,
									operation,
									displayValue
								)
							}
						>
							=
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
