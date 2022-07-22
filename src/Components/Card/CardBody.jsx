const CardBody = ({ children, className }) => {
    return (
        <div className={`px-6 py-4 text-gray-500 text-md ${className}`}>
            {children}
        </div>
    );
};

export default CardBody;