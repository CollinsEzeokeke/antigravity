"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from "lucide-react"

// Mock Cart Data
const cartItems = [
    { id: 1, name: "Classic White Tee", price: 29.99, quantity: 2, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop", size: "M", color: "White" },
    { id: 2, name: "Ceramic Coffee Mug", price: 14.99, quantity: 1, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=2070&auto=format&fit=crop", size: null, color: null },
]

export default function CartPage() {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const shipping = 5.00
    const total = subtotal + shipping

    return (
        <div className="container py-12">
            <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
            <div className="grid gap-12 lg:grid-cols-3">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-4 rounded-2xl border p-4">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                            </div>
                            <div className="flex flex-1 flex-col justify-between">
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="font-medium">{item.name}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            {item.size && `Size: ${item.size}`} {item.color && `• Color: ${item.color}`}
                                        </p>
                                    </div>
                                    <p className="font-bold">${item.price.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Button variant="outline" size="icon" className="h-8 w-8">
                                            <Minus className="h-3 w-3" />
                                        </Button>
                                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                                        <Button variant="outline" size="icon" className="h-8 w-8">
                                            <Plus className="h-3 w-3" />
                                        </Button>
                                    </div>
                                    <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div className="h-fit rounded-2xl border bg-gray-50 p-6 dark:bg-gray-900">
                    <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Shipping</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>
                        <div className="border-t pt-2 mt-2 flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                    <Button className="mt-6 w-full" size="lg" asChild>
                        <Link href="/checkout">Proceed to Checkout</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
