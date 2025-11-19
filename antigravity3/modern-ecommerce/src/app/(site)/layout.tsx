import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { CartProvider } from "@/context/cart-context"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { Toaster } from "sonner"

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <CartProvider>
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
                <CartDrawer />
                <Toaster position="bottom-right" />
            </div>
        </CartProvider>
    )
}
