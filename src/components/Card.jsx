import React from 'react'

const Card = () => {
    return (
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <img
                className="w-full h-48 object-cover border-b-4 border-blue-500"
                src={Card2}
                alt="React.js Internship"
            />
            <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">
                    React.js
                </h2>
                <p className="text-gray-700 mb-6">
                    <span className="font-bold">
                        Are you ready to dive into the world of React.js development
                        and build a strong foundation for your career?
                    </span>{" "}
                    Haxio Solution is thrilled to announce a Free Internship in React.js, designed to help aspiring developers gain
                    real-world experience, master essential skills, and create
                    impactful projects!
                </p>
                <a
                    href="https://forms.gle/BX8qpZmqX5ZXvppv5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
                >
                    Apply Now
                </a>
            </div>
        </div>
    )
}

export default Card 