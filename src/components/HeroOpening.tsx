export default function HeroOpening() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden px-6 py-24 md:py-32">
      <div className="absolute left-[-10%] top-10 h-[34rem] w-[34rem] rounded-full bg-[var(--strawberry-soft)]/35 blur-3xl" />
      <div className="absolute right-[-10%] bottom-0 h-[34rem] w-[34rem] rounded-full bg-[var(--latte)]/45 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-white/70 bg-white/50 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-[var(--strawberry)] backdrop-blur-xl">
            Gran apertura · 9am - 8pm
          </div>

          <h1 className="font-[Playfair_Display] text-6xl font-black leading-[0.9] tracking-tight md:text-8xl">
            Fresa Cream
            <span className="block text-[var(--strawberry)]">Café</span>
          </h1>

          <p className="mt-6 max-w-xl text-xl leading-8 text-[var(--coffee)]">
            Fresas con crema, frappés y café en una experiencia cremosa,
            elegante y lista para ordenar.
          </p>

          <div className="mt-7 glass-card p-5">
            <p className="font-black text-[var(--espresso)]">
              🚚 Entrega gratis desde $200 · Pickup · Reparto · Pedido programado
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#pedido" className="btn-primary text-center">
              Armar pedido
            </a>

            <a href="#promos" className="btn-secondary text-center">
              Ver promos
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="glass-card rotate-2 p-6">
            <div className="rounded-[1.7rem] bg-gradient-to-br from-white/80 via-[var(--cream)] to-[var(--cream-2)] p-8 text-center">
              <div className="text-8xl">🍓☕🥤</div>

              <p className="mt-8 text-sm font-black uppercase tracking-[0.3em] text-[var(--coffee)]">
                Signature combo
              </p>

              <h2 className="mt-3 font-[Playfair_Display] text-5xl font-black">
                Combo Cream
              </h2>

              <p className="mt-4 text-[var(--coffee)]">
                Fresas con crema + frappé o café
              </p>

              <p className="mt-8 text-6xl font-black text-[var(--strawberry)]">
                $99
              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-4 rounded-3xl bg-[var(--espresso)] px-6 py-4 text-white shadow-2xl">
            <p className="text-sm text-white/60">Promoción limitada</p>
            <p className="text-xl font-black">Gran apertura</p>
          </div>
        </div>
      </div>
    </section>
  )
}