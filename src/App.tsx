import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <main className="min-h-screen bg-[#fff7f2] text-zinc-950">
      <Header />
      <Hero />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}