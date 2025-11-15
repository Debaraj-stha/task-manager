'use client'

import { CONTACT_TEXT_COLOR } from '@/constants/colors';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const ContactForm = () => {
    return (
        <Card className="bg-gray-800 border border-white/10 shadow-lg p-6 flex-1">
            <CardContent className={`space-y-5 max-w-md ${CONTACT_TEXT_COLOR.primary}`}>
                {/* Name */}
                <Input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="bg-gray-900 text-white placeholder-gray-400 focus:ring-blue-500"
                    onChange={(e) => console.log(e.target.value)}
                />

                {/* Email */}
                <Input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="bg-gray-900 text-white placeholder-gray-400 focus:ring-blue-500"
                    onChange={(e) => console.log(e.target.value)}
                />

                {/* Message */}
                <Textarea
                    name="message"
                    placeholder="Write your message..."
                    className="bg-gray-900 text-white placeholder-gray-400 focus:ring-blue-500"
                    rows={5}
                />

                {/* Submit Button */}
                <Button
                    type="submit"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-transform duration-150 active:scale-95"
                >
                    Send Message
                </Button>
            </CardContent>
        </Card>
    );
};

export default ContactForm;
