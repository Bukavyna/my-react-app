import { useState, useEffect } from 'react';
// import axios from 'axios';
import MicroservicesSystem from '../microservices-system/MicroservicesSystem';
import OnlineChatBtn from '../onlineChatBtn/OnlineChatBtn';
import OnlineWatchBtn from '../onlineWatchBtn/OnlineWatchBtn';
import YesBtn from '../yesBtn/YesBtn';
import NoBtn from '../noBtn/NoBtn';
import Coro from '../coro/Coro';
import SupportSection from '../supportSection/SupportSection';

import './connectedStatusBlock.css';

const ConnectedStatusBlock = () => {
	const [ isConnected, setIsConnect ] = useState(navigator.onLine);
	// const [ location, setLocation ] = useState('');
	// const [ ipAddress, setIpAddress ] = useState('');

	useEffect(() => {
		const updateLineStatus = () => {
			setIsConnect(navigator.onLine);
		};

		window.addEventListener('online', updateLineStatus);
		window.addEventListener('offline', updateLineStatus);

		// axios.get(`https://ipinfo.io?token=YOUR_TOKEN_HERE`)
		// 	.then(response => {
		// 		setIpAddress(response.data.ip);
		// 		setLocation(response.data.country);
		// 	})

		return () => {
			window.addEventListener('online', updateLineStatus);
			window.addEventListener('offline', updateLineStatus);
		};
	}, []);

	return (
		<div className={'connected-status-block'}>

			<MicroservicesSystem />
			<Coro />

			<div className={'connected-status__box'}>
				<h6 className={'connected-status__title'}
					style={{
						color: isConnected ? '' : '#EE5081'
					}}>
					{isConnected ? 'You are Connected!' : 'You are disconnected!'}
				</h6>
				<p className={'connected-status-box__ip-address-text'}>Your IP Address:</p>
				<p className={'connected-status-box__ip-address'}>09.324.23.245</p>
				{/*<p className={'connected-status-box__ip-address'}>{ipAddress}</p>*/}
				<p className={'connected-status-box__location'}>United States</p>
				{/*<p className={'connected-status-box__location'}>{location}</p>*/}
				<p className={'connected-status-box__location-correct'}>Is your location correct?</p>
				<div className={'connected-status-block__box-btn-yes-no'}>
					<YesBtn />
					<NoBtn />
				</div>
				<div className={'connected-status-block__box-btn-online'}>
					<OnlineChatBtn />
					<OnlineWatchBtn />
				</div>
			</div>

			<MicroservicesSystem />
			<SupportSection />
		</div>
	)
}

export default ConnectedStatusBlock;