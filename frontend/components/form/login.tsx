"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import FACEBOOK_ICON from '../../assets/svg/facebook.svg'
import GOOGLE_ICON from '../../assets/svg/google-icon.svg'
import Image from "next/image"
import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/label"


interface LoginFormProps {
    onClose?: () => void;
}

const Login = ({onClose}:LoginFormProps) => {

    const formSchema = z.object({
        email: z.email("Invalid email address"),
        password: z.string().min(6, "Password must be at least 6 characters long"),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(formSchema),
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data)
        onClose && onClose();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="example@gmail.com"
                                    {...field}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                />
                            </FormControl>
                            <FormMessage className="text-red-500 text-xs mt-1" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-medium text-gray-700 mb-2">
                                Password
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="••••••••"
                                    {...field}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                />
                            </FormControl>
                            <FormMessage className="text-red-500 text-xs mt-1" />
                        </FormItem>
                    )}
                />

                {/* Additional options */}
                <div className="flex items-center justify-between text-sm">
                    <div className="flex flex-row">
                        <Checkbox id="remember-me" className="mr-2" />
                        <Label htmlFor="remember-me" className="text-gray-700">
                            Remember me
                        </Label>
                    </div>
                    <a href="#" className="text-secondary transition-colors hover:text-[var(--secondary-hover)]">
                        Forgot password?
                    </a>
                </div>

                <Button
                    type="submit"
                    variant={"default"}
                    className="bg-secondary text-[var(--secondary-foreground)] font-medium py-2 hover:bg-[var(--secondary-hover)] transition-colors"
                >
                    {form.formState.isSubmitting ? "Logging in..." : "Login"}
                </Button>

                {/* Divider */}
                <div className="relative flex items-center my-4">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink mx-4 text-gray-500 text-sm">or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Social login options */}
                <div className="grid grid-cols-2 gap-3">
                    <Button
                        type="button"
                        variant="outline"
                        aria-label="google-login"
                        className="flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-transparent hover:text-primary"
                    >

                        <Image src={GOOGLE_ICON} height={15} width={15} alt="googleicon" />  Google
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        aria-label="facebook-login"
                        className="flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-transparent hover:text-primary "
                    >

                        <Image src={FACEBOOK_ICON} height={15} width={15} alt="facebook icon" /> Facebook
                    </Button>
                </div>

                {/* Sign up link */}
                <div className="text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <a href="#" className="text-secondary font-medium hover:text-[var(--secondary-hover)] transition-colors">
                        Sign up
                    </a>
                </div>
            </form>
        </Form>
    )
}

export default Login