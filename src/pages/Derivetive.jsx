import { derivative } from 'mathjs';

const Derivative = ({ functionToCalculate }) => {
	const dxOne = derivative(functionToCalculate, 'x').toString();
	const dxTwo = derivative(dxOne, 'x').toString();
	const dxThree = derivative(dxTwo, 'x').toString();

	return (
		<div className="bg-slate-300 h-screen flex-col flex justify-center items-center ml-0 md:ml-60 pt-24">
			<div className="w-3/4">
				<div className="flex flex-col bg-slate-900 text-white p-3 rounded-xl mb-3">
					<label htmlFor="dx-one" className="text-3xl md:text-4xl mb-1">
						first derivative
					</label>
					<span
						id="dx-one"
						className="border-2 border-white rounded-md p-3 text-5xl md:text-6xl"
					>
						{dxOne}
					</span>
				</div>

				<div className="flex flex-col bg-slate-900 text-white p-3 rounded-xl mb-3">
					<label htmlFor="dx-one" className="text-3xl md:text-4xl mb-1">
						second derivative
					</label>
					<span
						id="dx-one"
						className="border-2 border-white rounded-md p-3 text-5xl md:text-6xl"
					>
						{dxTwo}
					</span>
				</div>

				<div className="flex flex-col bg-slate-900 text-white p-3 rounded-xl mb-3">
					<label htmlFor="dx-one" className="text-3xl md:text-4xl mb-1">
						third derivative
					</label>
					<span
						id="dx-one"
						className="border-2 border-white rounded-md p-3 text-5xl md:text-6xl"
					>
						{dxThree}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Derivative;
