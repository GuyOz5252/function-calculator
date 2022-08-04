import { useState } from 'react';

const Header = ({ callbackFunction }) => {
	const [functionToCalculate, setFunction] = useState('');
	const [edit, setEdit] = useState(true);

	const clickedCalculate = () => {
		callbackFunction(functionToCalculate);
		setEdit(false);
	};

	const clickedEdit = () => {
		setEdit(true);
	};

	return (
		<div className="bg-slate-900 h-24 w-screen fixed top-0 z-10 flex justify-center items-center flex-wrap">
			{edit ? (
				<div className="w-3/5 md:w-2/5 h-2/5 flex justify-center items-center flex-wrap md:flex-nowrap mb-6 md:mb-0">
					<input
						type="text"
						className="text-center h-7 rounded-full md:rounded-r-none w-full"
						placeholder="Enter function"
						value={functionToCalculate}
						onChange={event => setFunction(event.target.value)}
					/>
					<button
						onClick={clickedCalculate}
						className="text-white h-7 text-center leading-none rounded-full md:rounded-l-none border-2 px-2 mt-3 md:mt-0 h-"
					>
						Calculate
					</button>
				</div>
			) : (
				<div className=" h-2/5 flex justify-center items-center flex-nowrap mb-6 md:mb-0">
					<div className="text-center text-white h-7 rounded-full md:rounded-r-none w-full mt-4">
						{functionToCalculate}
					</div>
					<button
						onClick={clickedEdit}
						className="text-white h-7 text-center leading-none rounded-full border-2 px-2 mt-3 md:mt-0 ml-3"
					>
						i
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
