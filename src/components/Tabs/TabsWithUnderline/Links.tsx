import React from 'react';

const TabLinks = () => {
    return (
        <div className="bg-white dark:bg-gray-800">
       
            <div className="py-6 mx-auto lg:py-4">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                    {/* Repeated blocks for each column */}
                    {['Company', 'Help center', 'Legal', 'Company', 'Download'].map((title, index) => (
                        <div key={index}>
                            <ul className="text-gray-500 dark:text-gray-400">
                                {['About', 'Careers', 'Brand Center', 'Blog'].map((item, idx) => (
                                    <li key={idx} className="mb-4">
                                        <a href="#" className="hover:underline">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default TabLinks;
