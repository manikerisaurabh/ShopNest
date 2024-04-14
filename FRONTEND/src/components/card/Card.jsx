import React from 'react';

const Card = () => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img className="w-full h-48 object-cover object-center" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">Shoes!</h2>
                <p className="mt-2 text-gray-600">If a dog chews shoes whose shoes does he choose?</p>
                <div className="mt-4 flex justify-end">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
