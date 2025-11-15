'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Logging in:', form)
    // TODO: Add actual login logic (API, Firebase, etc.)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 w-full max-w-md mx-auto text-left"
    >
      {/* Email */}
      <Input
        placeholder="Enter your email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        className="bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
        required
      />

      {/* Password */}
      <Input
        placeholder="Enter your password"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        className="bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
        required
      />

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
