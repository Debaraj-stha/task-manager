"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
}

const dummyConversations = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const dummyMessages: Message[] = [
  { id: 1, sender: "Alice", content: "Hi! How's the project going?", timestamp: "10:00 AM" },
  { id: 2, sender: "You", content: "All good, just finishing up the tasks.", timestamp: "10:02 AM" },
  { id: 3, sender: "Alice", content: "Great! Keep me posted.", timestamp: "10:05 AM" },
];

const MessagesPage: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(1);
  const [messages, setMessages] = useState<Message[]>(dummyMessages);
  const [newMessage, setNewMessage] = useState<string>("");

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    const message: Message = {
      id: messages.length + 1,
      sender: "You",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <div className="flex h-full bg-gray-50">
      {/* Sidebar */}
      <Card className="w-72 h-full border-r border-gray-200">
        <CardHeader>
          <CardTitle>Conversations</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[calc(100vh-80px)]">
            <div className="flex flex-col">
              {dummyConversations.map((conv) => (
                <Button
                  key={conv.id}
                  variant={selectedConversation === conv.id ? "default" : "ghost"}
                  className="justify-start rounded-none border-b border-gray-200"
                  onClick={() => setSelectedConversation(conv.id)}
                >
                  {conv.name}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Chat area */}
      <div className="flex-1 flex flex-col">
        <Card className="flex-1 flex flex-col">
          <CardHeader>
            <CardTitle>
              {dummyConversations.find((c) => c.id === selectedConversation)?.name || "Select a chat"}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-4 overflow-y-auto">
            <ScrollArea className="h-full">
              <div className="flex flex-col gap-2">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`px-4 py-2 rounded-lg max-w-xs ${
                        msg.sender === "You" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      <p>{msg.content}</p>
                      <span className="text-xs text-gray-500">{msg.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>

          {/* Input */}
          <div className="flex gap-2 p-4 border-t border-gray-200">
            <Input
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button onClick={handleSendMessage}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MessagesPage;
