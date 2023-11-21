import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaravan, faClock, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import './ThreeOne.css';

const Services = [
    {
        "id": "12345",
        "name": "Home",
        "icon": <FontAwesomeIcon icon={faCaravan} className={'icon-button'}/>,
        "info": "The DVM services are here to provide for your driving needs. See everything we offer",
        "url": "#"
    },
    {
        "id": "2987543",
        "name": "Schedule",
        "icon": <FontAwesomeIcon icon={faClock} className={'icon-button'} />,
        "info": "You can schedule your driver's license exam here anytime 24/7 365 days a year",
        "url": "#"
    },
    {
        "id": "3029485",
        "name": "Contact Us",
        "icon": <FontAwesomeIcon icon={faPaperPlane} className={'icon-button'} />,
        "info": "Lot's of question? Just call or email use and we'll get back to you within 15 minutes",
        "url": "#"
    }
];

export default Services;