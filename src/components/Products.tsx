const products = [
  ["Fresas Premium", "Fresas con crema y toppings", "🍓"],
  ["Frappé Oreo", "Bebida cremosa fría", "🥤"],
  ["Café frío", "Café refrescante", "🧊"],
]

export default function FeaturedProducts() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-[Playfair_Display] font-black">
          Productos estrella
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {products.map(([title, text, emoji]) => (
            <div key={title} className="glass-card p-6">
              <div className="text-5xl">{emoji}</div>
              <h3 className="mt-4 font-black">{title}</h3>
              <p className="text-zinc-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}