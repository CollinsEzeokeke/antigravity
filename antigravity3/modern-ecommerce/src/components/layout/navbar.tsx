"use client"

import Link from "next/link"
import { Search, ShoppingCart, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function Navbar() {
    const { setIsCartOpen, totalItems } = useCart()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-sm"
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-12">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50">
                    <span className="text-2xl font-bold tracking-tighter">
                        MODERN<span className="font-light">SHOP</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
                    {["Home", "Products", "Categories", "Deals"].map((item) => (
                        <Link
                            key={item}
                            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                            className="relative text-muted-foreground transition-colors hover:text-foreground group py-2"
                        >
                            {item}
                            <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-foreground transition-transform duration-300 group-hover:scale-x-100" />
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="relative group">
                        <Search className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground cursor-pointer" />
                    </div>

                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative group"
                        aria-label="Shopping Cart"
                    >
                        <ShoppingCart className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                        {totalItems > 0 && (
                            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-[10px] font-bold text-background">
                                {totalItems}
                            </span>
                        )}
                    </button>

                    <Link href="/account" className="group">
                        <User className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl md:hidden"
                    >
                        <nav className="flex flex-col items-center gap-8 text-2xl font-medium">
                            {["Home", "Products", "Categories", "Deals", "Account"].map((item) => (
                                <Link
                                    key={item}
                                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="hover:text-muted-foreground transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
