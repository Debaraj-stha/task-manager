
import Input from '../ui/Input'

const ContactForm = () => {
    return (
        <div className="flex-1 space-y-8">
            <form className="space-y-5 max-w-md text-gray-800">
                <Input
                    name="name"
                    label="Name"
                    type="text"
                    placeholder="Jhon Doe"
                    isRequired
                    onChange={(e) => console.log(e.target.value)}
                />
                <Input
                    name="email"
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                    isRequired
                    onChange={(e) => console.log(e.target.value)}
                />

                <Input
                    name="message"
                    label="Message"
                    isTextArea
                    placeholder="Write your message..."
                />

                {/* Button */}
                <button
                    type="submit"
                    className="w-full sm:w-auto bg-blue-600 text-white font-semibold 
                             px-6 py-2 rounded-lg shadow hover:bg-blue-700 active:scale-95 
                             transition-transform duration-150 text-sm md:text-lg"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default ContactForm