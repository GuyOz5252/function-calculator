import { derivative, evaluate, Infinity } from 'mathjs';

const InterceptionPoints = ({ functionToCalculate }) => {
	const dx = derivative(functionToCalculate, 'x').toString();

	const findXVal = () => {
		// find all x vals that evalutae the function as 0
	};

	const findYVal = () => {
		let scope = {
			x: 0,
		};
		return evaluate(functionToCalculate, scope);
	};

	return (
		<div className="bg-slate-300 h-screen flex-col flex justify-center items-center ml-0 md:ml-60 pt-24">
			<div className="flex flex-col bg-slate-900 text-white p-3 rounded-xl mb-3">
				<label htmlFor="dx-one" className="text-3xl md:text-4xl mb-1">
					interception with x-axis
				</label>
				<span
					id="dx-one"
					className="border-2 border-white rounded-md p-3 text-5xl md:text-6xl"
				>
					{`(${'*'}, ${0})`}
				</span>
			</div>

			<div className="flex flex-col bg-slate-900 text-white p-3 rounded-xl mb-3">
				<label htmlFor="dx-one" className="text-3xl md:text-4xl mb-1">
					interception with y-axis
				</label>
				<span
					id="dx-one"
					className="border-2 border-white rounded-md p-3 text-5xl md:text-6xl"
				>
					{`(${0}, ${findYVal()})`}
				</span>
			</div>
		</div>
	);
};

export default InterceptionPoints;
