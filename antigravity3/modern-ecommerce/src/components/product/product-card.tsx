"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

interface Product {
    id: number
    name: string
    price: string
    image: string
    category: string
}

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    const { addItem } = useCart()

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        const priceNumber = parseFloat(product.price.replace("$", ""))
        addItem({
            id: product.id,
            name: product.name,
            price: priceNumber,
            image: product.image,
        })
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative"
        >
            <Link href={`/products/${product.id}`} className="block">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />

                    <button
                        onClick={handleAddToCart}
                        className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-4 items-center justify-center rounded-full bg-white text-black shadow-lg opacity-0 transition-all duration-300 hover:bg-zinc-100 group-hover:translate-y-0 group-hover:opacity-100"
                        aria-label="Add to Cart"
                    >
                        <Plus className="h-5 w-5" />
                    </button>
                </div>

                <div className="mt-4 space-y-1">
                    <div className="flex justify-between items-start">
                        <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:underline decoration-1 underline-offset-4">
                            {product.name}
                        </h3>
                        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{product.price}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                </div>
            </Link>
        </motion.div>
    )
}
