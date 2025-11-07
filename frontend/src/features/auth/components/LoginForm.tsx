import React, { useState } from 'react'
import Input from '../../../components/ui/Input'

const LoginForm = () => {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Logging in:", form);
        // Add login logic here (Firebase, API, etc.)
    };
    return (
        <form onSubmit={handleSubmit} className="space-y-5 text-left">

            <Input
                label="Email"
                placeholder="Enter your email"
                name="email"
                type="email"
                bgClass=" bg-white/20"
                isRequired={true}
            />
            <Input
                bgClass=" bg-white/20"
                label="Password"
                placeholder="Enter your password"
                name="password"
                type="password"
                isRequired={true}
            />



            <button
                type="submit"
                style={{opacity:0,transform:'translateY(40px)'}}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 submit-button"
            >
                Login
            </button>
        </form>
    )
}

export default LoginForm