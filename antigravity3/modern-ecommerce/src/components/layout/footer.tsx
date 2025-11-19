import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-zinc-950 text-white">
            <div className="container px-6 md:px-12 py-20">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 mb-16">
                    {/* Brand & Newsletter */}
                    <div className="lg:col-span-5 space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold tracking-tighter">
                                MODERN<span className="font-light">SHOP</span>
                            </span>
                        </Link>
                        <p className="text-zinc-400 max-w-sm text-sm leading-relaxed">
                            Curated essentials for the modern individual. Quality that speaks for itself.
                        </p>
                        <div className="space-y-3">
                            <p className="text-sm font-medium">Subscribe to our newsletter</p>
                            <div className="flex gap-2 max-w-md">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-white/20"
                                />
                                <Button className="bg-white text-black hover:bg-zinc-200 shrink-0">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold tracking-wide">Shop</h3>
                            <ul className="space-y-3 text-sm text-zinc-400">
                                <li><Link href="/products" className="hover:text-white transition-colors">All Products</Link></li>
                                <li><Link href="/categories/clothes" className="hover:text-white transition-colors">Apparel</Link></li>
                                <li><Link href="/categories/mugs" className="hover:text-white transition-colors">Ceramics</Link></li>
                                <li><Link href="/categories/furniture" className="hover:text-white transition-colors">Living</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold tracking-wide">Support</h3>
                            <ul className="space-y-3 text-sm text-zinc-400">
                                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                                <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
                                <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping</Link></li>
                                <li><Link href="/returns" className="hover:text-white transition-colors">Returns</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold tracking-wide">Company</h3>
                            <ul className="space-y-3 text-sm text-zinc-400">
                                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                                <li><Link href="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
                                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold tracking-wide">Connect</h3>
                            <ul className="space-y-3 text-sm text-zinc-400">
                                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
                                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
                                <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Pinterest</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-sm text-zinc-500">
                    <p>© 2025 ModernShop. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
