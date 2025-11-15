'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface SignupFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
  workspace: string
  terms: boolean
}

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    workspace: '',
    terms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Signup Data:', formData)
    // TODO: Add actual signup logic (API, Firebase, etc.)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-2xl mx-auto">
      {/* Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm text-white/80 mb-1">
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-800 text-white  border-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-white/80 mb-1">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-800 text-white border-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm text-white/80 mb-1">
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            className="bg-gray-800 text-white  border-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="confirmPassword" className="text-sm text-white/80 mb-1">
            Confirm Password
          </label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Re-enter password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="bg-gray-800 text-white  border-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
            required
          />
        </div>

        <div className="flex flex-col md:col-span-2">
          <label htmlFor="workspace" className="text-sm text-white/80 mb-1">
            Workspace Name (optional)
          </label>
          <Input
            id="workspace"
            name="workspace"
            type="text"
            placeholder="Workspace Name"
            value={formData.workspace}
            onChange={handleChange}
            className="bg-gray-800 text-white  border-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
          />
        </div>
      </div>

      {/* Terms & Privacy */}
      <div className="flex items-center space-x-2">
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
          I agree to the{' '}
          <span className="text-blue-400 hover:underline cursor-pointer">
            Terms & Privacy Policy
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-transform duration-200"
      >
        Create Account
      </Button>
    </form>
  )
}

export default SignupForm
