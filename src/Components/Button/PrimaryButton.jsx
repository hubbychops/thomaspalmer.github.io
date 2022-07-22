const PrimaryButton = ({ children, className, fw = false }) => {
    return (
        <button className={`rounded-xl text-white bg-indigo-500 px-6 py-3 ${fw && 'w-full'} ${className}`}>
            {children}
        </button>
    );
};

export default PrimaryButton;