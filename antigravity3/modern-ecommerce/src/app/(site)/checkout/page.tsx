"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const steps = ["Shipping", "Payment", "Review"]

export default function CheckoutPage() {
    const [currentStep, setCurrentStep] = useState(0)

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

    return (
        <div className="min-h-screen py-12 md:py-20">
            <div className="container mx-auto max-w-3xl px-6 md:px-12">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight mb-3">Checkout</h1>
                    <p className="text-muted-foreground">Complete your purchase</p>
                </div>

                {/* Progress Steps */}
                <div className="mb-12 flex justify-center gap-8">
                    {steps.map((step, index) => (
                        <div key={step} className="flex flex-col items-center gap-3">
                            <div
                                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 ${index <= currentStep
                                    ? "border-foreground bg-foreground text-background"
                                    : "border-zinc-300 dark:border-zinc-700 text-zinc-400"
                                    }`}
                            >
                                {index < currentStep ? <CheckCircle2 className="h-6 w-6" /> : index + 1}
                            </div>
                            <span className={`text-sm font-medium ${index <= currentStep ? "" : "text-muted-foreground"}`}>
                                {step}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Step Content */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">{steps[currentStep]}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {currentStep === 0 && (
                                    <div className="grid gap-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                                                <Input id="firstName" placeholder="John" />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                                                <Input id="lastName" placeholder="Doe" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="address" className="text-sm font-medium">Address</label>
                                            <Input id="address" placeholder="123 Main St" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="city" className="text-sm font-medium">City</label>
                                                <Input id="city" placeholder="New York" />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="zip" className="text-sm font-medium">ZIP Code</label>
                                                <Input id="zip" placeholder="10001" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {currentStep === 1 && (
                                    <div className="space-y-4">
                                        <label className="flex items-center gap-4 rounded-lg border-2 border-zinc-200 dark:border-zinc-800 p-4 cursor-pointer hover:border-foreground transition-colors">
                                            <input type="radio" name="payment" defaultChecked className="h-4 w-4 accent-foreground" />
                                            <div className="flex-1">
                                                <p className="font-medium">Credit Card</p>
                                                <p className="text-sm text-muted-foreground">Pay with Visa, Mastercard, or Amex</p>
                                            </div>
                                        </label>
                                        <label className="flex items-center gap-4 rounded-lg border-2 border-zinc-200 dark:border-zinc-800 p-4 cursor-pointer hover:border-foreground transition-colors">
                                            <input type="radio" name="payment" className="h-4 w-4 accent-foreground" />
                                            <div className="flex-1">
                                                <p className="font-medium">PayPal</p>
                                                <p className="text-sm text-muted-foreground">Secure payment via PayPal</p>
                                            </div>
                                        </label>
                                    </div>
                                )}

                                {currentStep === 2 && (
                                    <div className="space-y-6">
                                        <div className="rounded-lg bg-zinc-50 dark:bg-zinc-900 p-6">
                                            <h3 className="font-semibold mb-4">Order Summary</h3>
                                            <div className="space-y-2 text-sm mb-4">
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Subtotal</span>
                                                    <span className="font-medium">$92.00</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Shipping</span>
                                                    <span className="font-medium">$5.00</span>
                                                </div>
                                            </div>
                                            <div className="border-t pt-4 flex justify-between">
                                                <span className="font-semibold text-lg">Total</span>
                                                <span className="font-bold text-lg">$97.00</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground text-center">
                                            By placing your order, you agree to our Terms and Privacy Policy
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        <div className="mt-8 flex justify-between gap-4">
                            <Button variant="outline" onClick={prevStep} disabled={currentStep === 0} className="min-w-24">
                                Back
                            </Button>
                            <Button
                                onClick={currentStep === steps.length - 1 ? () => alert("Order Placed!") : nextStep}
                                className="min-w-32"
                            >
                                {currentStep === steps.length - 1 ? "Place Order" : "Continue"}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
