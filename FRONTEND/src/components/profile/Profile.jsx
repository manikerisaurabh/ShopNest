import React from 'react';

const Profile = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-semibold mb-6">My Profile</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                    <div className="mb-4">
                        <label className="block mb-2">Name</label>
                        <input type="text" className="border border-gray-300 rounded w-full py-2 px-3" placeholder="John Doe" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Email</label>
                        <input type="email" className="border border-gray-300 rounded w-full py-2 px-3" placeholder="example@example.com" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Phone</label>
                        <input type="tel" className="border border-gray-300 rounded w-full py-2 px-3" placeholder="123-456-7890" />
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">Save Changes</button>
                </div>
                <div className="bg-white p-4 rounded shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Order History</h2>
                    <div className="overflow-auto max-h-60">
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Order ID</th>
                                    <th className="px-4 py-2">Date</th>
                                    <th className="px-4 py-2">Total</th>
                                    <th className="px-4 py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Sample order data */}
                                <tr>
                                    <td className="border px-4 py-2">#12345</td>
                                    <td className="border px-4 py-2">2024-04-14</td>
                                    <td className="border px-4 py-2">$150.00</td>
                                    <td className="border px-4 py-2">Delivered</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">#12346</td>
                                    <td className="border px-4 py-2">2024-04-12</td>
                                    <td className="border px-4 py-2">$80.00</td>
                                    <td className="border px-4 py-2">Shipped</td>
                                </tr>
                                {/* Add more order history data here */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="bg-white p-4 rounded shadow-md mt-6">
                <h2 className="text-xl font-semibold mb-4">Saved Addresses</h2>
                <ul className="list-disc ml-6">
                    <li>123 Main St, City, Country, ZIP</li>
                    <li>456 Oak Ave, Town, Country, ZIP</li>
                    {/* Add more saved addresses here */}
                </ul>
                <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded mt-4 hover:bg-gray-400 transition-colors duration-300">Add New Address</button>
            </div>
        </div>
    );
}

export default Profile;
