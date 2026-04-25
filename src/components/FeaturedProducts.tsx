const products = [
  {
    title: "Fresas Premium",
    text: "Fresas frescas con crema suave, toppings y presentación especial.",
    emoji: "🍓",
  },
  {
    title: "Frappé Oreo",
    text: "Bebida fría, cremosa y perfecta para el antojo.",
    emoji: "🥤",
  },
  {
    title: "Café frío",
    text: "Café suave con toque cremoso y estilo refrescante.",
    emoji: "🧊",
  },
  {
    title: "Latte caliente",
    text: "Café calientito con leche cremosa para acompañar tus fresas.",
    emoji: "☕",
  },
]

export default function FeaturedProducts() {
  return (
    <section id="productos" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--strawberry)]">
          Productos estrella
        </p>

        <h2 className="mt-3 font-[Playfair_Display] text-5xl font-black">
          Lo más pedido
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {products.map((product) => (
            <article key={product.title} className="glass-card group p-7">
              <div className="text-6xl transition duration-300 group-hover:scale-110">
                {product.emoji}
              </div>

              <h3 className="mt-6 font-[Playfair_Display] text-3xl font-black">
                {product.title}
              </h3>

              <p className="mt-3 leading-7 text-[var(--coffee)]">
                {product.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}