import React, { useState } from 'react';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your signup logic here, such as sending data to the backend
        console.log(formData);
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="firstName" className="block mb-2 text-sm font-bold">First Name</label>
                    <input type="text" id="firstName" placeholder='Saurabh' name="firstName" value={formData.firstName} onChange={handleChange} className="input w-full" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block mb-2 text-sm font-bold">Last Name</label>
                    <input type="text" id="lastName" placeholder='Manikeri' name="lastName" value={formData.lastName} onChange={handleChange} className="input w-full" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-sm font-bold">Email</label>
                    <input type="email" id="email" placeholder='manikerisaurabh@gmail.com' name="email" value={formData.email} onChange={handleChange} className="input w-full" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2 text-sm font-bold">Password</label>
                    <input type="password" placeholder='asdfASDF21' id="password" name="password" value={formData.password} onChange={handleChange} className="input w-full" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-bold">Confirm Password</label>
                    <input type="password" placeholder='asdfASDF21' id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="input w-full" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block mb-2 text-sm font-bold">Address</label>
                    <textarea id="address" name="address" value={formData.address} onChange={handleChange} className="input w-full" rows="3" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
