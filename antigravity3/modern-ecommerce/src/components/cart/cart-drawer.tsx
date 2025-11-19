"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import Link from "next/link"

export function CartDrawer() {
    const { items, removeItem, updateQuantity, isCartOpen, setIsCartOpen, subtotal } = useCart()

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-background shadow-2xl sm:w-[400px]"
                    >
                        <div className="flex h-full flex-col">
                            <div className="flex items-center justify-between border-b p-4">
                                <h2 className="text-lg font-semibold">Shopping Cart</h2>
                                <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-4">
                                {items.length === 0 ? (
                                    <div className="flex h-full flex-col items-center justify-center gap-4 text-muted-foreground">
                                        <ShoppingBag className="h-16 w-16 opacity-20" />
                                        <p>Your cart is empty</p>
                                        <Button onClick={() => setIsCartOpen(false)}>Continue Shopping</Button>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {items.map((item) => (
                                            <motion.div
                                                layout
                                                key={`${item.id}-${item.size}-${item.color}`}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="flex gap-4 rounded-xl border p-3"
                                            >
                                                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                                </div>
                                                <div className="flex flex-1 flex-col justify-between">
                                                    <div>
                                                        <h3 className="font-medium line-clamp-1">{item.name}</h3>
                                                        <p className="text-xs text-muted-foreground">
                                                            {item.size && `Size: ${item.size}`} {item.color && `• ${item.color}`}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <p className="font-bold text-sm">${item.price.toFixed(2)}</p>
                                                        <div className="flex items-center gap-2">
                                                            <Button
                                                                variant="outline"
                                                                size="icon"
                                                                className="h-6 w-6"
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            >
                                                                <Minus className="h-3 w-3" />
                                                            </Button>
                                                            <span className="w-4 text-center text-xs">{item.quantity}</span>
                                                            <Button
                                                                variant="outline"
                                                                size="icon"
                                                                className="h-6 w-6"
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            >
                                                                <Plus className="h-3 w-3" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {items.length > 0 && (
                                <div className="border-t p-4">
                                    <div className="mb-4 flex justify-between text-lg font-bold">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="grid gap-2">
                                        <Button size="lg" className="w-full" asChild onClick={() => setIsCartOpen(false)}>
                                            <Link href="/checkout">Checkout</Link>
                                        </Button>
                                        <Button variant="outline" className="w-full" asChild onClick={() => setIsCartOpen(false)}>
                                            <Link href="/cart">View Cart</Link>
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
