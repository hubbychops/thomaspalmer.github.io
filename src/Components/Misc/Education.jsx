import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';

const Education = ({ school, duration, description }) => {
    return (
        <div className="p-6">
            <div className="flex justify-between">
                <h3 className="font-medium text-gray-700">{school}</h3>
            </div>

            <div className="flex flex-wrap text-sm text-gray-400 -ml-2">
                <div className="p-2">
                    <FontAwesomeIcon icon={faCalendar} /> {duration}
                </div>
            </div>

            <div className="text-gray-500 space-y-3">
                {description}
            </div>
        </div>
    );
};

export default Education;