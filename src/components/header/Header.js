import { Link } from 'react-router-dom';
import headerCloud from '../../resourses/img/cloud-vpn 1.png';
import Navbar from '../navbar/Navbar';

import './header.css';

const Header = () => {

	return (
		<div className={'header'}>
			<div className={'header__menu'}>
				{/*<div  className={'header__logo-box'}>*/}
					<Link to={'/'}>
					<img src={headerCloud} alt={'cloud vpn'} className={'header__cloud'}/>
				</Link>
				{/*</div>*/}
				<Link to={'/'}>
				   <h2 className={'header__text'}>APP NAME</h2>
				</Link>
				<Navbar />
					<ul className={'menu'}>
						<li
							className={'menuItems'}><Link to={'/'}>Home</Link></li>
						<li
							className={'menuItems'}><Link to={'location'}>Location</Link></li>
						<li
							className={'menuItems'}><Link to={'travel'}>Travel</Link></li>
						<li
							className={'menuItems'}><Link to={'trading'}>Trading</Link></li>
						<li
							className={'menuItems'}><Link to={'dating'}>Dating</Link></li>
						<li
							className={'menuItems'}><Link to={'cyberthreats'}>Cyber Threats</Link></li>
					</ul>
			</div>
		</div>
	)
}

export default Header;