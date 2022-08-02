import './SideBar.css';
import SideBarData from './SideBarData.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SideBar = () => {
	const [activeTab, setActiveTab] = useState('');
	const [sideBar, setSidebar] = useState(false);

	const toggleActiveTab = event => {
		console.log(event.target);
		setActiveTab(event.target.id);
		console.log(event.target.id);
		showSideBar();
	};

	const showSideBar = () => setSidebar(!sideBar);

	return (
		<nav className="md:-z-10">
			<div
				className={
					'bg-slate-500 w-60 h-screen pt-28 text cenetr px-3 fixed -left-full md:left-0 duration-500 ' +
					(sideBar ? 'show' : '')
				}
			>
				<div>
					{SideBarData.map(item => {
						return (
							<div>
								<Link
									id={item.path}
									onClick={toggleActiveTab}
									className={
										'side-bar-btn ' +
										(activeTab === item.path ? 'active-tab' : '')
									}
									to={item.path}
								>
									{item.title}
								</Link>
							</div>
						);
					})}
				</div>
			</div>
			<menu
				className="fixed top-8 left-5 md:hidden cursor-pointer font-bold text-5xl text-white"
				onClick={showSideBar}
			>
				{sideBar ? <span className="">X</span> : <span className="">=</span>}
			</menu>
		</nav>
	);
};

export default SideBar;
