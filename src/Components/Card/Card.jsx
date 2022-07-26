const Card = ({ children, className, showDividers = true }) => {
    return (
        <div className={`rounded-lg bg-white shadow ${className} ${showDividers && 'divide-y divide-gray-200'}`}>
            {children}
        </div>
    );
};

export default Card;