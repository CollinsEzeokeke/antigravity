"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product/product-card"
import { Button } from "@/components/ui/button"
import { Filter, X } from "lucide-react"

// Mock Data
const products = [
    { id: 1, name: "Essential Cotton Tee", price: "$35.00", category: "Apparel", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop" },
    { id: 2, name: "Artisan Coffee Mug", price: "$22.00", category: "Ceramics", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=2070&auto=format&fit=crop" },
    { id: 3, name: "Minimalist Lounge Chair", price: "$450.00", category: "Living", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1887&auto=format&fit=crop" },
    { id: 4, name: "Raw Denim Jacket", price: "$120.00", category: "Apparel", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop" },
    { id: 5, name: "Solid Wood Dining Table", price: "$890.00", category: "Living", image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=2071&auto=format&fit=crop" },
    { id: 6, name: "Insulated Travel Mug", price: "$28.00", category: "Ceramics", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=2070&auto=format&fit=crop" },
]

export default function ProductsPage() {
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    return (
        <div className="min-h-screen py-12 md:py-20">
            <div className="container mx-auto px-6 md:px-12 max-w-screen-2xl">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-3">All Products</h1>
                    <p className="text-muted-foreground">Discover our curated collection of essentials</p>
                </div>

                <div className="flex flex-col gap-8 lg:flex-row">
                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden">
                        <Button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            variant="outline"
                            className="gap-2 w-full sm:w-auto"
                        >
                            {isFilterOpen ? <X className="h-4 w-4" /> : <Filter className="h-4 w-4" />}
                            {isFilterOpen ? "Close Filters" : "Filters"}
                        </Button>
                    </div>

                    {/* Sidebar Filters */}
                    <aside className={`w-full lg:w-72 ${isFilterOpen ? "block" : "hidden"} lg:block`}>
                        <div className="space-y-8 lg:sticky lg:top-24">
                            <div>
                                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">Categories</h3>
                                <div className="space-y-3">
                                    {["Apparel", "Ceramics", "Living"].map((category) => (
                                        <label key={category} className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-zinc-300 dark:border-zinc-700 text-foreground focus:ring-2 focus:ring-foreground focus:ring-offset-2 cursor-pointer"
                                            />
                                            <span className="text-sm group-hover:text-foreground transition-colors">{category}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">Price Range</h3>
                                <div className="px-2">
                                    <input
                                        type="range"
                                        className="w-full accent-foreground"
                                        min="0"
                                        max="1000"
                                        defaultValue="500"
                                    />
                                    <div className="mt-3 flex justify-between text-sm text-muted-foreground">
                                        <span>$0</span>
                                        <span>$1000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="mb-8 flex items-center justify-between">
                            <p className="text-sm text-muted-foreground">
                                {products.length} products
                            </p>
                            <select className="rounded-lg border border-input bg-background px-4 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer">
                                <option>Sort by: Featured</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest</option>
                            </select>
                        </div>

                        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
