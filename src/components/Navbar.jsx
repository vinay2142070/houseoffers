import { useNavigate, useLocation } from 'react-router-dom'
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg'

const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation();


    const pathMatchRoute = (route) => {
        if (route === location.pathname) {
            return true
        }
    }

    return (<footer className='navbar'>
        <nav className='navbarNav'>
            <ul className='navbarListItems'>
                <li className='navbarListItem' onClick={() => { navigate('/') }}>
                    <ExploreIcon width='36px'
                        height='36px' fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'} />
                    <p>Explore</p>
                </li>

                <li className='navbarListItem' onClick={() => { navigate('/offers') }}>
                    <OfferIcon width='36px'
                        height='36px' fill={pathMatchRoute('/offers') ? '#2c2c2c' : '#8f8f8f'} />
                    <p>Offers</p>
                </li>


                <li className='navbarListItem' onClick={() => { navigate('/profile') }}>
                    <PersonOutlineIcon width='36px'
                        height='36px' fill={pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'} />
                    <p>Profile</p>
                </li>
            </ul>

        </nav>

    </footer>
    )
};

export default Navbar;
