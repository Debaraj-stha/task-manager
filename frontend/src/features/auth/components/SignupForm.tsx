import React, { useState } from 'react'
import Input from '../../../components/ui/Input'

const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        workspace: '',
        terms: false,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // ✅ TODO: Validate and send to backend (Firebase/Auth or custom API)
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
                <Input
                    label="Name"
                    placeholder="Enter your name"
                    name="name"
                    type="text"
                    value={formData.name}
                    // onChange={handleChange}
                    bgClass="bg-white/20"
                />

                <Input
                    label="Email"
                    placeholder="Enter your email"
                    name="email"
                    type="email"
                    value={formData.email}
                    // onChange={handleChange}
                    isRequired
                    bgClass="bg-white/20"
                />

                <Input
                    label="Password"
                    placeholder="Enter your password"
                    name="password"
                    type="password"
                    value={formData.password}
                    // onChange={handleChange}
                    isRequired
                    bgClass="bg-white/20"
                />

                <Input
                    label="Confirm Password"
                    placeholder="Re-enter your password"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    // onChange={handleChange}
                    isRequired
                    bgClass="bg-white/20"
                />
            </div>


            <div className="flex items-center space-x-2 input-card">
                <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={formData.terms}
                    onChange={handleChange}
                    required
                    className="accent-blue-500"
                />
                <label htmlFor="terms" className="text-sm text-white/80">
                    I agree to the <span className="text-blue-400 cursor-pointer">Terms & Privacy Policy</span>
                </label>
            </div>

            <button
                type="submit"
                style={{ opacity: 0, transform: 'translateY(40px)' }}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 submit-button"
            >
                Create Account
            </button>
        </form>
    )
}

export default SignupForm
