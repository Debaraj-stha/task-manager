
import { CONTACTSVGIMAGE } from '../../constants/images'

const ContactIllustration = () => {
    return (
        <div className="flex-1 flex justify-center">
            <img
                src={CONTACTSVGIMAGE}
                alt="Contact illustration"
                className="w-full max-w-md h-auto pointer-events-none select-none drop-shadow-lg"
            />
        </div>
    )
}

export default ContactIllustration