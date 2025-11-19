"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

// Mock Cart Data
const cartItems = [
    { id: 1, name: "Essential Cotton Tee", price: 35.00, quantity: 2, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop", size: "M", color: "White" },
    { id: 2, name: "Artisan Coffee Mug", price: 22.00, quantity: 1, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=2070&auto=format&fit=crop", size: null, color: null },
]

export default function CartPage() {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const shipping = 5.00
    const total = subtotal + shipping

    return (
        <div className="min-h-screen py-12 md:py-20">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-3">Shopping Cart</h1>
                    <p className="text-muted-foreground">{cartItems.length} items in your cart</p>
                </div>

                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <ShoppingBag className="h-24 w-24 opacity-10 mb-6" />
                        <h2 className="text-2xl font-semibold mb-3">Your cart is empty</h2>
                        <p className="text-muted-foreground mb-8">Add some items to get started</p>
                        <Button size="lg" asChild>
                            <Link href="/products">Continue Shopping</Link>
                        </Button>
                    </div>
                ) : (
                    <div className="grid gap-12 lg:grid-cols-3">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {cartItems.map((item) => (
                                <Card key={item.id} className="overflow-hidden">
                                    <CardContent className="p-6">
                                        <div className="flex gap-6">
                                            <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
                                                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                            </div>
                                            <div className="flex flex-1 flex-col justify-between">
                                                <div className="flex justify-between">
                                                    <div>
                                                        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                                                        <p className="text-sm text-muted-foreground">
                                                            {item.size && `Size: ${item.size}`} {item.color && `• Color: ${item.color}`}
                                                        </p>
                                                    </div>
                                                    <p className="font-bold text-lg">${item.price.toFixed(2)}</p>
                                                </div>
                                                <div className="flex items-center justify-between mt-4">
                                                    <div className="flex items-center gap-3">
                                                        <Button variant="outline" size="icon" className="h-9 w-9">
                                                            <Minus className="h-4 w-4" />
                                                        </Button>
                                                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                                                        <Button variant="outline" size="icon" className="h-9 w-9">
                                                            <Plus className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950">
                                                        <Trash2 className="h-4 w-4 mr-2" />
                                                        Remove
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Summary */}
                        <div className="lg:col-span-1">
                            <Card className="sticky top-24 shadow-lg border-zinc-200 dark:border-zinc-800">
                                <CardContent className="p-6">
                                    <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                                    <div className="space-y-4 mb-6">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Subtotal</span>
                                            <span className="font-medium">${subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Shipping</span>
                                            <span className="font-medium">${shipping.toFixed(2)}</span>
                                        </div>
                                        <div className="border-t pt-4 flex justify-between">
                                            <span className="font-semibold text-lg">Total</span>
                                            <span className="font-bold text-lg">${total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <Button className="w-full" size="lg" asChild>
                                        <Link href="/checkout">Proceed to Checkout</Link>
                                    </Button>
                                    <Button variant="outline" className="w-full mt-3" asChild>
                                        <Link href="/products">Continue Shopping</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
