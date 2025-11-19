"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ProductCard } from "@/components/product/product-card"

const categories = [
    { name: "Apparel", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop", href: "/categories/clothes" },
    { name: "Ceramics", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=2070&auto=format&fit=crop", href: "/categories/mugs" },
    { name: "Living", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop", href: "/categories/furniture" },
]

const featuredProducts = [
    { id: 1, name: "Essential Cotton Tee", price: "$35.00", category: "Apparel", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop" },
    { id: 2, name: "Artisan Coffee Mug", price: "$22.00", category: "Ceramics", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=2070&auto=format&fit=crop" },
    { id: 3, name: "Minimalist Lounge Chair", price: "$450.00", category: "Living", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1887&auto=format&fit=crop" },
    { id: 4, name: "Raw Denim Jacket", price: "$120.00", category: "Apparel", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop" },
]

export default function HomePage() {
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 500], [0, 200])

    return (
        <div className="flex flex-col w-full overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden bg-zinc-950 text-white">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute inset-0 opacity-40"
                >
                    <img
                        src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop"
                        alt="Hero Background"
                        className="h-full w-full object-cover"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/30 via-transparent to-zinc-950" />

                <div className="container mx-auto relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-6"
                    >
                        <h2 className="text-sm font-medium tracking-[0.2em] text-zinc-400 uppercase">New Collection 2025</h2>
                        <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl text-balance">
                            Timeless <br className="hidden md:block" /> <span className="text-zinc-500">Design.</span>
                        </h1>
                        <p className="mx-auto max-w-[500px] text-lg text-zinc-300 md:text-xl font-light leading-relaxed">
                            Curated essentials for the modern individual. Quality that speaks for itself.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="mt-12 flex flex-col sm:flex-row gap-4"
                    >
                        <Button size="lg" className="h-14 rounded-full px-10 text-lg font-medium bg-white text-black hover:bg-zinc-200 transition-all" asChild>
                            <Link href="/products">Shop Latest</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 rounded-full px-10 text-lg font-medium border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all" asChild>
                            <Link href="/categories">View Lookbook</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-32 bg-zinc-50 dark:bg-zinc-900/30">
                <div className="container mx-auto px-6 md:px-12 max-w-screen-2xl">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl font-bold tracking-tight">Curated Categories</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">Explore our hand-picked selections across fashion, home, and lifestyle.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[1000px] md:h-[900px]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="md:col-span-6 relative group overflow-hidden rounded-3xl h-[400px] md:h-full"
                        >
                            <Link href={categories[0].href} className="block h-full w-full">
                                <img src={categories[0].image} alt={categories[0].name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                                <div className="absolute bottom-8 left-8">
                                    <h3 className="text-3xl font-bold text-white">{categories[0].name}</h3>
                                </div>
                            </Link>
                        </motion.div>

                        <div className="md:col-span-6 flex flex-col gap-6 h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="relative group overflow-hidden rounded-3xl flex-1"
                            >
                                <Link href={categories[1].href} className="block h-full w-full">
                                    <img src={categories[1].image} alt={categories[1].name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                                    <div className="absolute bottom-8 left-8">
                                        <h3 className="text-2xl font-bold text-white">{categories[1].name}</h3>
                                    </div>
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative group overflow-hidden rounded-3xl flex-1"
                            >
                                <Link href={categories[2].href} className="block h-full w-full">
                                    <img src={categories[2].image} alt={categories[2].name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                                    <div className="absolute bottom-8 left-8">
                                        <h3 className="text-2xl font-bold text-white">{categories[2].name}</h3>
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-32 bg-white dark:bg-zinc-950">
                <div className="container mx-auto px-6 md:px-12 max-w-screen-2xl">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl font-bold tracking-tight text-foreground">Weekly Essentials</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Our most popular items this week. Meticulously crafted and designed to last.
                        </p>
                    </div>

                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Button size="lg" variant="outline" className="rounded-full px-8 bg-forground/5 border-foreground/5" asChild>
                            <Link href="/products">View All Products</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-32 bg-zinc-50 dark:bg-zinc-900/50">
                <div className="container mx-auto px-6 md:px-12 max-w-screen-2xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold tracking-tight mb-6 text-foreground">Trusted by thousands of design enthusiasts.</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                "ModernShop has completely transformed how I shop for my home and wardrobe. The curation is simply unmatched."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" alt="User" className="h-full w-full object-cover" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Alex Morgan</p>
                                    <p className="text-sm text-muted-foreground">Interior Designer, NY</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 translate-y-12">
                                <div className="aspect-[3/4] rounded-2xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" className="h-full w-full object-cover" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="aspect-[3/4] rounded-2xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" className="h-full w-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
