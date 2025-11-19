"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, Heart, User, Settings } from "lucide-react"

export default function AccountPage() {
    const [activeTab, setActiveTab] = useState("orders")

    return (
        <div className="container py-12">
            <h1 className="mb-8 text-3xl font-bold">My Account</h1>
            <div className="flex flex-col gap-8 lg:flex-row">
                {/* Sidebar Navigation */}
                <aside className="w-full lg:w-64">
                    <nav className="space-y-2">
                        <Button
                            variant={activeTab === "orders" ? "default" : "ghost"}
                            className="w-full justify-start gap-2"
                            onClick={() => setActiveTab("orders")}
                        >
                            <Package className="h-4 w-4" /> Orders
                        </Button>
                        <Button
                            variant={activeTab === "saved" ? "default" : "ghost"}
                            className="w-full justify-start gap-2"
                            onClick={() => setActiveTab("saved")}
                        >
                            <Heart className="h-4 w-4" /> Saved Items
                        </Button>
                        <Button
                            variant={activeTab === "profile" ? "default" : "ghost"}
                            className="w-full justify-start gap-2"
                            onClick={() => setActiveTab("profile")}
                        >
                            <User className="h-4 w-4" /> Profile
                        </Button>
                        <Button
                            variant={activeTab === "settings" ? "default" : "ghost"}
                            className="w-full justify-start gap-2"
                            onClick={() => setActiveTab("settings")}
                        >
                            <Settings className="h-4 w-4" /> Settings
                        </Button>
                    </nav>
                </aside>

                {/* Content Area */}
                <div className="flex-1">
                    {activeTab === "orders" && (
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">Order History</h2>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-base">Order #12345</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex justify-between text-sm">
                                        <span>Date: Oct 24, 2023</span>
                                        <span className="font-medium text-green-600">Delivered</span>
                                    </div>
                                    <div className="mt-4 flex gap-4">
                                        <div className="h-16 w-16 rounded bg-gray-100" />
                                        <div className="h-16 w-16 rounded bg-gray-100" />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {activeTab === "saved" && (
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">Saved Items</h2>
                            <p className="text-muted-foreground">No saved items yet.</p>
                        </div>
                    )}

                    {activeTab === "profile" && (
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">Profile Information</h2>
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="grid gap-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">First Name</label>
                                                <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" defaultValue="John" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">Last Name</label>
                                                <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" defaultValue="Doe" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Email</label>
                                            <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" defaultValue="john@example.com" />
                                        </div>
                                        <Button>Save Changes</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
