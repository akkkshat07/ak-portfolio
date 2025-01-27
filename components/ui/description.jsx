const Description = ({ title, description, info }) => {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
                <p className="text-gray-400 mb-6">{description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {info.map((item, index) => (
                    <div key={index} className="bg-zinc-800 p-4 rounded-xl hover:bg-zinc-700/50 transition-colors">
                        {item.fieldname && (
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">{item.fieldname}:</span>
                                <span className="text-white">{item.fieldValue}</span>
                            </div>
                        )}
                        {item.icon && (
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">{item.icon}</span>
                                <span className="text-white">{item.name}</span>
                            </div>
                        )}
                        {item.name && !item.icon && (
                            <div className="flex flex-col gap-1.5">
                                <h3 className="text-lg font-bold">{item.name}</h3>
                                <p className="text-gray-400 text-sm">{item.issuer}</p>
                                <p className="text-gray-400 text-sm">{item.date}</p>
                            </div>
                        )}
                        {item.degree && (
                            <div className="flex flex-col gap-1.5">
                                <h3 className="text-lg font-bold">{item.degree} in {item.major}</h3>
                                <p className="text-gray-400 text-sm">{item.school}</p>
                                <p className="text-gray-400 text-sm">{item.date}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Description;
