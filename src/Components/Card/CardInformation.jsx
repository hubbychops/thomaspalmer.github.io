const CardInformation = ({ label, value }) => {
    return (
        <div className="flex justify-between">
            <div className="text-gray-400">
                {label}
            </div>

            <div className="font-medium text-gray-600">
                {value}
            </div>
        </div>
    );
};

export default CardInformation;