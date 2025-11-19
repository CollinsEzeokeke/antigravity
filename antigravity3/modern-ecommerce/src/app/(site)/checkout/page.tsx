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
        <div className="container max-w-3xl py-12">
            {/* Progress Steps */}
            <div className="mb-8 flex justify-between">
                {steps.map((step, index) => (
                    <div key={step} className="flex flex-col items-center gap-2">
                        <div
                            className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${index <= currentStep
                                ? "border-primary bg-primary text-white"
                                : "border-gray-300 text-gray-400"
                                }`}
                        >
                            {index < currentStep ? <CheckCircle2 className="h-6 w-6" /> : index + 1}
                        </div>
                        <span className={`text-sm ${index <= currentStep ? "font-medium text-primary" : "text-gray-400"}`}>
                            {step}
                        </span>
                    </div>
                ))}
            </div>

            {/* Step Content */}
            <Card>
                <CardHeader>
                    <CardTitle>{steps[currentStep]}</CardTitle>
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
                                <div className="grid gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">First Name</label>
                                            <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Last Name</label>
                                            <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Address</label>
                                        <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="123 Main St" />
                                    </div>
                                </div>
                            )}

                            {currentStep === 1 && (
                                <div className="space-y-4">
                                    <div className="rounded-lg border p-4">
                                        <label className="flex items-center gap-2">
                                            <input type="radio" name="payment" defaultChecked />
                                            <span>Credit Card</span>
                                        </label>
                                    </div>
                                    <div className="rounded-lg border p-4">
                                        <label className="flex items-center gap-2">
                                            <input type="radio" name="payment" />
                                            <span>PayPal</span>
                                        </label>
                                    </div>
                                </div>
                            )}

                            {currentStep === 2 && (
                                <div className="space-y-4">
                                    <p>Review your order details here.</p>
                                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                                        <p className="font-medium">Total: $49.98</p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    <div className="mt-8 flex justify-between">
                        <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>
                            Back
                        </Button>
                        <Button onClick={currentStep === steps.length - 1 ? () => alert("Order Placed!") : nextStep}>
                            {currentStep === steps.length - 1 ? "Place Order" : "Next"}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
