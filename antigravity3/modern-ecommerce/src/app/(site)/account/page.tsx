"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, Heart, User, Settings } from "lucide-react"

export default function AccountPage() {
    const [activeTab, setActiveTab] = useState("orders")

    return (
        <div className="min-h-screen py-12 md:py-20">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-3">My Account</h1>
                    <p className="text-muted-foreground">Manage your orders and account settings</p>
                </div>

                <div className="flex flex-col gap-8 lg:flex-row">
                    {/* Sidebar Navigation */}
                    <aside className="w-full lg:w-72">
                        <nav className="space-y-2 lg:sticky lg:top-24">
                            <Button
                                variant={activeTab === "orders" ? "default" : "ghost"}
                                className="w-full justify-start gap-3"
                                onClick={() => setActiveTab("orders")}
                            >
                                <Package className="h-4 w-4" /> Orders
                            </Button>
                            <Button
                                variant={activeTab === "saved" ? "default" : "ghost"}
                                className="w-full justify-start gap-3"
                                onClick={() => setActiveTab("saved")}
                            >
                                <Heart className="h-4 w-4" /> Saved Items
                            </Button>
                            <Button
                                variant={activeTab === "profile" ? "default" : "ghost"}
                                className="w-full justify-start gap-3"
                                onClick={() => setActiveTab("profile")}
                            >
                                <User className="h-4 w-4" /> Profile
                            </Button>
                            <Button
                                variant={activeTab === "settings" ? "default" : "ghost"}
                                className="w-full justify-start gap-3"
                                onClick={() => setActiveTab("settings")}
                            >
                                <Settings className="h-4 w-4" /> Settings
                            </Button>
                        </nav>
                    </aside>

                    {/* Content Area */}
                    <div className="flex-1">
                        {activeTab === "orders" && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold">Order History</h2>
                                <Card>
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <CardTitle className="text-base">Order #12345</CardTitle>
                                            <span className="text-sm font-medium text-green-600">Delivered</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground mb-4">Placed on Oct 24, 2023</p>
                                        <div className="flex gap-4">
                                            <div className="h-20 w-20 rounded-lg bg-zinc-100 dark:bg-zinc-800" />
                                            <div className="h-20 w-20 rounded-lg bg-zinc-100 dark:bg-zinc-800" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {activeTab === "saved" && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold">Saved Items</h2>
                                <div className="flex flex-col items-center justify-center py-20">
                                    <Heart className="h-16 w-16 opacity-10 mb-4" />
                                    <p className="text-muted-foreground">No saved items yet</p>
                                </div>
                            </div>
                        )}

                        {activeTab === "profile" && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold">Profile Information</h2>
                                <Card>
                                    <CardContent className="pt-6">
                                        <form className="space-y-6">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                                                    <Input id="firstName" defaultValue="John" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                                                    <Input id="lastName" defaultValue="Doe" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                                <Input id="email" type="email" defaultValue="john@example.com" />
                                            </div>
                                            <Button size="lg">Save Changes</Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {activeTab === "settings" && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold">Settings</h2>
                                <Card>
                                    <CardContent className="pt-6">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between py-3 border-b">
                                                <div>
                                                    <p className="font-medium">Email Notifications</p>
                                                    <p className="text-sm text-muted-foreground">Receive order updates via email</p>
                                                </div>
                                                <input type="checkbox" defaultChecked className="h-4 w-4 rounded accent-foreground" />
                                            </div>
                                            <div className="flex items-center justify-between py-3 border-b">
                                                <div>
                                                    <p className="font-medium">Marketing Emails</p>
                                                    <p className="text-sm text-muted-foreground">Receive promotional offers</p>
                                                </div>
                                                <input type="checkbox" className="h-4 w-4 rounded accent-foreground" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
