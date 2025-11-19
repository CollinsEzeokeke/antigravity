"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProductCard } from "@/components/product/product-card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider" // Need to implement or mock Slider
import { Checkbox } from "@/components/ui/checkbox" // Need to implement or mock Checkbox
import { Filter } from "lucide-react"

// Mock Data
const products = [
    { id: 1, name: "Classic White Tee", price: "$29.99", category: "Clothes", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop" },
    { id: 2, name: "Ceramic Coffee Mug", price: "$14.99", category: "Mugs", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=2070&auto=format&fit=crop" },
    { id: 3, name: "Modern Armchair", price: "$199.99", category: "Furniture", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1887&auto=format&fit=crop" },
    { id: 4, name: "Denim Jacket", price: "$89.99", category: "Clothes", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop" },
    { id: 5, name: "Wooden Table", price: "$149.99", category: "Furniture", image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=2071&auto=format&fit=crop" },
    { id: 6, name: "Travel Mug", price: "$19.99", category: "Mugs", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=2070&auto=format&fit=crop" },
]

export default function ProductsPage() {
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    return (
        <div className="container py-8">
            <div className="flex flex-col gap-8 lg:flex-row">
                {/* Mobile Filter Toggle */}
                <div className="lg:hidden">
                    <Button onClick={() => setIsFilterOpen(!isFilterOpen)} variant="outline" className="gap-2">
                        <Filter className="h-4 w-4" /> Filters
                    </Button>
                </div>

                {/* Sidebar Filters */}
                <aside className={`w-full lg:w-64 ${isFilterOpen ? "block" : "hidden"} lg:block`}>
                    <div className="space-y-6">
                        <div>
                            <h3 className="mb-4 font-semibold">Categories</h3>
                            <div className="space-y-2">
                                {["Clothes", "Mugs", "Furniture"].map((category) => (
                                    <div key={category} className="flex items-center gap-2">
                                        <input type="checkbox" id={category} className="h-4 w-4 rounded border-gray-300" />
                                        <label htmlFor={category} className="text-sm">{category}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-4 font-semibold">Price Range</h3>
                            <div className="px-2">
                                {/* Placeholder for Slider */}
                                <input type="range" className="w-full" min="0" max="500" />
                                <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                                    <span>$0</span>
                                    <span>$500</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="mb-6 flex items-center justify-between">
                        <h1 className="text-2xl font-bold">All Products</h1>
                        <select className="rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                            <option>Sort by: Featured</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest</option>
                        </select>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
