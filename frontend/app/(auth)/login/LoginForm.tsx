'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

interface LoginFormState {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const [form, setForm] = useState<LoginFormState>({ email: '', password: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Logging in:', form)
    // TODO: Add actual login logic (API, Firebase, etc.)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 w-full max-w-md mx-auto text-left"
    >
      {/* Email Field */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-white font-medium mb-1">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          className="bg-gray-800 text-white  border-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
          required
        />
      </div>

      {/* Password Field */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="password" className="text-white font-medium mb-1">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          className="bg-gray-800 text-white placeholder-gray-400  border-gray-800 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
          required
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200"
      >
        Login
      </Button>
    </form>
  )
}

export default LoginForm
