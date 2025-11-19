"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Star, Minus, Plus, ShoppingCart } from "lucide-react"

// Mock Data
const product = {
    id: 1,
    name: "Classic White Tee",
    price: "$29.99",
    description: "A timeless classic. This premium white tee is made from 100% organic cotton, featuring a comfortable fit and durable stitching. Perfect for any occasion.",
    images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1887&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1827&auto=format&fit=crop",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray"],
}

export default function ProductPage({ params }: { params: { id: string } }) {
    const [selectedImage, setSelectedImage] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [selectedSize, setSelectedSize] = useState("M")
    const [selectedColor, setSelectedColor] = useState("White")

    return (
        <div className="container py-12">
            <div className="grid gap-12 lg:grid-cols-2">
                {/* Gallery */}
                <div className="space-y-4">
                    <motion.div
                        key={selectedImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="aspect-square overflow-hidden rounded-2xl bg-gray-100"
                    >
                        <img
                            src={product.images[selectedImage]}
                            alt={product.name}
                            className="h-full w-full object-cover"
                        />
                    </motion.div>
                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {product.images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`relative aspect-square w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 ${selectedImage === index ? "border-primary" : "border-transparent"
                                    }`}
                            >
                                <img src={image} alt={`View ${index + 1}`} className="h-full w-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
                        <div className="mt-2 flex items-center gap-4">
                            <p className="text-2xl font-bold text-primary">{product.price}</p>
                            <div className="flex items-center gap-1 text-yellow-400">
                                <Star className="h-4 w-4 fill-current" />
                                <span className="text-sm font-medium text-foreground">4.8 (120 reviews)</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-muted-foreground">{product.description}</p>

                    <div className="space-y-4">
                        <div>
                            <label className="mb-2 block text-sm font-medium">Color</label>
                            <div className="flex gap-3">
                                {product.colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`h-8 w-8 rounded-full border-2 ${selectedColor === color ? "border-primary" : "border-transparent"
                                            } ring-1 ring-gray-200`}
                                        style={{ backgroundColor: color.toLowerCase() }}
                                        title={color}
                                    />
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium">Size</label>
                            <div className="flex gap-3">
                                {product.sizes.map((size) => (
                                    <Button
                                        key={size}
                                        variant={selectedSize === size ? "default" : "outline"}
                                        onClick={() => setSelectedSize(size)}
                                        className="w-12"
                                    >
                                        {size}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium">Quantity</label>
                            <div className="flex items-center gap-4">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                >
                                    <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-8 text-center font-medium">{quantity}</span>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Button size="lg" className="w-full gap-2 text-lg">
                            <ShoppingCart className="h-5 w-5" /> Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
