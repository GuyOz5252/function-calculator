import { derivative } from 'mathjs';

const InterceptionPoints = ({ functionToCalculate }) => {
	const dx = derivative(functionToCalculate, 'x').toString();
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
					{`(${5}, ${3})`}
				</span>
			</div>
		</div>
	);
};

export default InterceptionPoints;
