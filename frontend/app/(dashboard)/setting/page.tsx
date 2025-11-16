"use client"

import  { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

const page = () => {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="w-full max-w-md">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Name</Label>
                <Input placeholder="John Doe" />
              </div>
              <div>
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
              </div>
              <Button>Save Profile</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Current Password</Label>
                <Input type="password" placeholder="********" />
              </div>
              <div>
                <Label>New Password</Label>
                <Input type="password" placeholder="********" />
              </div>
              <Button>Update Password</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Email notifications, push alerts, etc.</p>
              <Button>Save Notifications</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default page
