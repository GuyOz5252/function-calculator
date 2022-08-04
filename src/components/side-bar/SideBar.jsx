import './SideBar.css';
import SideBarData from './SideBarData.js';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SideBar = () => {
	const [activeTab, setActiveTab] = useState('');
	const [sideBar, setSidebar] = useState(false);

	useEffect(() => {
		setActiveTab(window.location.pathname);
	}, [window.location.pathname]);

	const showSideBar = () => setSidebar(!sideBar);

	return (
		<nav className="-z-10">
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
									onClick={showSideBar}
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
				className="fixed top-8 left-5 md:hidden cursor-pointer font-bold text-5xl text-white z-50"
				onClick={showSideBar}
			>
				{sideBar ? <span>X</span> : <span>=</span>}
			</menu>
		</nav>
	);
};

export default SideBar;
