"use client";

import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import loginSchema from "@/schema/loginSchema";
import AuthService from "@/services/authServices";
import { toast } from "sonner";
import { useRouter } from "next/navigation";



type FormValues = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter()


  const onSubmit = async (data: FormValues) => {
    const { data: res } = await AuthService.login(data.email, data.password)
    const { message, error, user, token } = res.Login
    console.log(token)
    toast.success(message)

    document.cookie = `token=${token}; path=/; max-age=${7 * 24 * 60 * 60}; SameSite=Lax`;
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect to dashboard
    router.push("/dashboard");
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-w-md mx-auto text-left">

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2">
              <FormLabel className="text-white font-medium mb-1">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white border-gray-600 placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-sm" />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2">
              <FormLabel className="text-white font-medium mb-1">Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="bg-gray-800 text-white border-gray-600 placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-sm" />
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200"
        >
          {form.formState.isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
