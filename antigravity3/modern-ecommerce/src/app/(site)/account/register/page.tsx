"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RegisterPage() {
    return (
        <div className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 px-6 md:px-12">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Create Account</CardTitle>
                    <CardDescription>Sign up to start shopping with us</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-5">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                            <Input id="name" type="text" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <Input id="email" type="email" placeholder="m@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium">Password</label>
                            <Input id="password" type="password" />
                        </div>
                        <Button className="w-full" size="lg">Create Account</Button>
                    </form>
                    <div className="mt-6 text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/account/login" className="font-medium underline hover:text-primary">
                            Sign in
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
