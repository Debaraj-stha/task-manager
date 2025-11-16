"use client"

import React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

const faqs = [
    {
        question: "How do I reset my password?",
        answer: "Go to Settings > Security and use the Update Password option."
    },
    {
        question: "How do I add a new member to my team?",
        answer: "Navigate to Team Members and click the Add Member button."
    },
    {
        question: "How can I contact support?",
        answer: "You can send us a message via the Contact form below or email support@example.com."
    }
]

const page = () => {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Help & Support</h1>

            {/* Search FAQs */}
            <div className="flex gap-2 max-w-md">
                <Input placeholder="Search help topics..." />
                <Button>Search</Button>
            </div>

            {/* FAQ Section */}
            <Accordion type="single" collapsible className="space-y-2 max-w-2xl">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

            {/* Contact Card */}
            <Card className="max-w-md">
                <CardHeader>
                    <CardTitle>Contact Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p>If your issue is not listed above, you can contact our support team:</p>
                    <Input placeholder="Your email" />
                    <Input placeholder="Message" />
                    <Button>Send Message</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default page
