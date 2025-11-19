import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
    return (
        <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <div className="container mx-auto px-6 md:px-12 py-20">
                <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-12 mb-16">
                    {/* Brand & Newsletter */}
                    <div className="lg:col-span-5 space-y-8">
                        <Link href="/" className="inline-block">
                            <span className="text-3xl font-bold text-white">
                                MODERN<span className="font-light text-muted-foreground">SHOP</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm leading-relaxed">
                            Curated essentials for the modern individual. Quality craftsmanship that speaks for itself.
                        </p>
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Stay Updated</h3>
                            <div className="flex gap-3 max-w-md">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 h-12"
                                />
                                <Button className="h-12 px-6 shrink-0">
                                    Subscribe
                                </Button>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Get the latest updates on new products and exclusive offers.
                            </p>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Shop</h3>
                            <ul className="space-y-3 text-sm">
                                <li><Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">All Products</Link></li>
                                <li><Link href="/categories/clothes" className="text-muted-foreground hover:text-foreground transition-colors">Apparel</Link></li>
                                <li><Link href="/categories/mugs" className="text-muted-foreground hover:text-foreground transition-colors">Ceramics</Link></li>
                                <li><Link href="/categories/furniture" className="text-muted-foreground hover:text-foreground transition-colors">Living</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Support</h3>
                            <ul className="space-y-3 text-sm">
                                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
                                <li><Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQs</Link></li>
                                <li><Link href="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">Shipping</Link></li>
                                <li><Link href="/returns" className="text-muted-foreground hover:text-foreground transition-colors">Returns</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Company</h3>
                            <ul className="space-y-3 text-sm">
                                <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
                                <li><Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
                                <li><Link href="/sustainability" className="text-muted-foreground hover:text-foreground transition-colors">Sustainability</Link></li>
                                <li><Link href="/press" className="text-muted-foreground hover:text-foreground transition-colors">Press</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Connect</h3>
                            <ul className="space-y-3 text-sm">
                                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a></li>
                                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</a></li>
                                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Facebook</a></li>
                                <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Pinterest</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                    <p className="text-sm text-muted-foreground">© 2025 ModernShop. All rights reserved.</p>
                    <div className="flex gap-8 text-sm">
                        <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
                        <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
                        <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
