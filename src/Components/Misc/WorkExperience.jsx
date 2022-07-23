import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons/faBuilding';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons/faLocationPin';
import { faCalendar} from '@fortawesome/free-solid-svg-icons/faCalendar';

const WorkExperience = ({ company, role, location, duration, description }) => {
    return (
        <div className="p-6">
            <div className="flex justify-between">
                <h3 className="font-medium text-gray-700">{role}</h3>
            </div>

            <div className="flex flex-wrap text-sm text-gray-400 -ml-2">
                <div className="p-2">
                    <FontAwesomeIcon icon={faBuilding} /> {company}
                </div>
                <div className="p-2">
                    <FontAwesomeIcon icon={faLocationPin} /> {location}
                </div>
                <div className="p-2">
                    <FontAwesomeIcon icon={faCalendar} /> {duration}
                </div>
            </div>

            <div className="text-gray-500">
                {description}
            </div>
        </div>
    );
};

export default WorkExperience;

//
// company: 'Corporate Innovations',
//     role: 'Lead Developer',
//     location: 'Banbury, Oxfordshire',
//     duration: 'July 2011 - January 2016',
//     description