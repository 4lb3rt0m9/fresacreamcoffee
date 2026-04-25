import Header from "./components/Header"
import HeroOpening from "./components/HeroOpening"
import MonthlyPromos from "./components/MonthlyPromos"
import FeaturedProducts from "./components/FeaturedProducts"
import HowToOrder from "./components/HowToOrder"
import OrderPage from "./components/OrderPage"
import Location from "./components/Location"
import FAQ from "./components/FAQ"
import FloatingWhatsApp from "./components/FloatingWhatsApp"
import Footer from "./components/Footer"

export default function App() {
  return (
    <main className="min-h-screen text-[var(--espresso)]">
      <Header />
      <HeroOpening />
      <MonthlyPromos />
      <FeaturedProducts />
      <HowToOrder />
      <OrderPage />
      <Location />
      <FAQ />
      <FloatingWhatsApp />
      <Footer />
    </main>
  )
}