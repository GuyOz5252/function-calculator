import './SideBar.css';
import SideBarData from './SideBarData.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SideBar = () => {
	const [activeTab, setActiveTab] = useState('');

	const toggleActiveTab = event => {
		console.log(event.target);
		setActiveTab(event.target.id);
		console.log(event.target.id);
	};

	return (
		<div className="bg-slate-500 w-60 h-screen pt-28 text cenetr px-3 fixed">
			<nav>
				{SideBarData.map(item => {
					return (
						<div>
							<Link
								id={item.path}
								onClick={toggleActiveTab}
								className={
									'side-bar-btn ' + (activeTab === item.path ? 'active-tab' : '')
								}
								to={item.path}
							>
								{item.title}
							</Link>
						</div>
					);
				})}
			</nav>
		</div>
	);
};

export default SideBar;
