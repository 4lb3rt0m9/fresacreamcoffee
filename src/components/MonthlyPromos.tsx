const promos = [
  {
    title: "Combo Cream",
    text: "Fresas con crema + frappé o café.",
    price: "Desde $99",
    emoji: "🍓🥤",
  },
  {
    title: "Entrega gratis",
    text: "En compras mayores a $200.",
    price: "Todos los días",
    emoji: "🚚",
  },
  {
    title: "Pedido programado",
    text: "Pide antes y recoge a la hora que indiques.",
    price: "Pickup disponible",
    emoji: "🕒",
  },
]

export default function MonthlyPromos() {
  return (
    <section id="promos" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--strawberry)]">
          Promos del mes
        </p>

        <h2 className="mt-3 font-[Playfair_Display] text-5xl font-black">
          Apertura con sabor
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {promos.map((promo) => (
            <article key={promo.title} className="glass-card group p-7">
              <div className="text-6xl transition duration-300 group-hover:scale-110">
                {promo.emoji}
              </div>

              <h3 className="mt-6 font-[Playfair_Display] text-3xl font-black">
                {promo.title}
              </h3>

              <p className="mt-3 leading-7 text-[var(--coffee)]">
                {promo.text}
              </p>

              <p className="mt-5 text-xl font-black text-[var(--strawberry)]">
                {promo.price}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}