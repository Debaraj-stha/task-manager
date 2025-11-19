"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
}

const dummyConversations = [
  { id: 1, name: "Alice", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Bob", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Charlie", avatar: "https://i.pravatar.cc/150?img=3" },
];

const dummyMessages: Message[] = [
  { id: 1, sender: "Alice", content: "Hi! How's the project going?", timestamp: "10:00 AM" },
  { id: 2, sender: "You", content: "All good, just finishing up the tasks.", timestamp: "10:02 AM" },
  { id: 3, sender: "Alice", content: "Great! Keep me posted.", timestamp: "10:05 AM" },
];

const MessagesPage: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState<number>(1);
  const [messages, setMessages] = useState<Message[]>(dummyMessages);
  const [newMessage, setNewMessage] = useState<string>("");

  const activeUser = dummyConversations.find((c) => c.id === selectedConversation);

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
    <div className="flex w-full h-[calc(100vh-70px)] bg-white shadow rounded-lg overflow-hidden">

      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-72 border-r border-gray-200 bg-gray-50">
        <h3 className="p-4 font-semibold text-gray-700">Messages</h3>

        <ScrollArea className="flex-1">
          {dummyConversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => setSelectedConversation(conv.id)}
              className={`flex items-center gap-3 p-3 cursor-pointer border-b
                hover:bg-blue-50 transition
                ${selectedConversation === conv.id ? "bg-blue-100" : ""}
              `}
            >
              <Avatar className="h-10 w-10">
                <AvatarImage src={conv.avatar} alt={conv.name} />
                <AvatarFallback>{conv.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="font-medium text-gray-800">{conv.name}</span>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        
        {/* Chat Header */}
        <div className="flex items-center gap-3 p-4 border-b">
          <Avatar className="h-10 w-10">
            <AvatarImage src={activeUser?.avatar} />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-gray-800">
            {activeUser?.name}
          </span>
        </div>

        {/* Chat messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="flex flex-col gap-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "You" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-xl max-w-xs text-sm shadow ${
                    msg.sender === "You"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  <p>{msg.content}</p>
                  <span className="text-[10px] opacity-60 block mt-1">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="flex items-center gap-3 p-4 border-t">
          <Input
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button onClick={handleSendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>

      </div>
    </div>
  );
};

export default MessagesPage;
