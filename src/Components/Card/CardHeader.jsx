const CardHeader = ({ children, className }) => {
    return (
        <div className={`px-6 py-4 font-bold ${className}`}>
            {children}
        </div>
    );
};

export default CardHeader;