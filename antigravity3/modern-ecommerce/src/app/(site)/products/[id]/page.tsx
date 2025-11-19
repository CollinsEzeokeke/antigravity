"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Star, Minus, Plus, ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"

// Mock Data
const product = {
    id: 1,
    name: "Essential Cotton Tee",
    price: "$35.00",
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
    const { addItem } = useCart()
    const [selectedImage, setSelectedImage] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [selectedSize, setSelectedSize] = useState("M")
    const [selectedColor, setSelectedColor] = useState("White")

    const handleAddToCart = () => {
        const priceNumber = parseFloat(product.price.replace("$", ""))
        addItem({
            id: product.id,
            name: product.name,
            price: priceNumber,
            image: product.images[0],
            size: selectedSize,
            color: selectedColor,
        })
    }

    return (
        <div className="min-h-screen py-12 md:py-20">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Gallery */}
                    <div className="space-y-4">
                        <motion.div
                            key={selectedImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="aspect-square overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800"
                        >
                            <img
                                src={product.images[selectedImage]}
                                alt={product.name}
                                className="h-full w-full object-cover"
                            />
                        </motion.div>
                        <div className="flex gap-3 overflow-x-auto">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative aspect-square w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${selectedImage === index ? "border-foreground scale-105" : "border-transparent opacity-60 hover:opacity-100"
                                        }`}
                                >
                                    <img src={image} alt={`View ${index + 1}`} className="h-full w-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight mb-4">{product.name}</h1>
                            <div className="flex items-center gap-6 mb-4">
                                <p className="text-3xl font-bold">{product.price}</p>
                                <div className="flex items-center gap-2">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm text-muted-foreground">(120 reviews)</span>
                                </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="mb-3 block text-sm font-semibold">Color</label>
                                <div className="flex gap-3">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`h-10 w-10 rounded-full transition-all ${selectedColor === color
                                                    ? "border-foreground scale-110 ring-2 ring-offset-2 ring-foreground"
                                                    : "border-zinc-300 dark:border-zinc-600 hover:scale-105"
                                                } border-2`}
                                            style={{ backgroundColor: color.toLowerCase() }}
                                            title={color}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="mb-3 block text-sm font-semibold">Size</label>
                                <div className="flex gap-3">
                                    {product.sizes.map((size) => (
                                        <Button
                                            key={size}
                                            variant={selectedSize === size ? "default" : "outline"}
                                            onClick={() => setSelectedSize(size)}
                                            className="min-w-[3rem]"
                                        >
                                            {size}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="mb-3 block text-sm font-semibold">Quantity</label>
                                <div className="flex items-center gap-4">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-10 w-10"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    >
                                        <Minus className="h-4 w-4" />
                                    </Button>
                                    <span className="w-12 text-center text-lg font-medium">{quantity}</span>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-10 w-10"
                                        onClick={() => setQuantity(quantity + 1)}
                                    >
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <Button size="lg" className="w-full gap-2 text-lg h-14" onClick={handleAddToCart}>
                                <ShoppingCart className="h-5 w-5" /> Add to Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
