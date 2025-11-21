
import { Button } from "./ui/button"
import { X } from "lucide-react"

import { useEffect } from "react"
import Login from "./form/login"


interface LoginFormProps {
    onClose?: () => void;
}

const LoginForm = ({ onClose }: LoginFormProps) => {


    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            // Close form when clicking outside (you'll need to pass a close function via props)
            // For now, this is a placeholder - you'll need to integrate with your header state
            console.log("Close form")
            onClose && onClose();
        }
    }

    useEffect(() => {
        // Disable scroll when mounted
        document.body.classList.add("no-scroll")

        // Re-enable scroll on unmount
        return () => {
            document.body.classList.remove("no-scroll")
        }
    }, [])

    return (
        <div
            className="w-full h-screen fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-hidden pointer-events-auto"
            onClick={handleBackdropClick}
        >
            {/* Left backdrop - click to close */}
            <div className="absolute inset-0 pointer-events-auto" onClick={() => onClose?.()} />

            {/* Login form container */}
            <div className="absolute right-0 top-0 h-full w-full  sm:w-1/2 lg:w-1/3 xl:w-1/4 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out pointer-events-auto overflow-y-auto"

            >
                {/* Header with close button */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
                    <h2 className="text-2xl font-bold text-gray-800">Login to Your Account</h2>
                    <Button
                        onClick={handleBackdropClick}
                        className=" pointer-events-auto bg-secondary hover:bg-secondary-hover"
                    >
                        <X className="w-5 h-5 text-[var(--secondary-foreground)]" />
                    </Button>
                </div>

                {/* Form content */}
                <div className="p-6 sm:p-8">
                    <Login onClose={onClose} />
                </div>
            </div>
        </div>
    )
}

export default LoginForm