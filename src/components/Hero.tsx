export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-pink-200/60 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-amber-200/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <div>
          <p className="mb-5 font-black uppercase tracking-[0.25em] text-pink-500">
            Sweet coffee spot
          </p>

          <h2 className="text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
            Fresas, café y frappés con{" "}
            <span className="bg-gradient-to-r from-pink-500 to-red-400 bg-clip-text text-transparent">
              crema
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-xl leading-8 text-zinc-600">
            Un lugar moderno para disfrutar fresas con crema, café frío,
            café caliente y frappés preparados al momento.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#menu"
              className="rounded-full bg-pink-500 px-8 py-4 text-center font-black text-white hover:bg-pink-600"
            >
              Ver menú
            </a>

            <a
              href="https://wa.me/521XXXXXXXXXX"
              target="_blank"
              className="rounded-full border border-zinc-200 bg-white px-8 py-4 text-center font-black hover:bg-zinc-50"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rotate-3 rounded-[3rem] bg-white p-5 shadow-2xl">
            <div className="rounded-[2.5rem] bg-gradient-to-br from-pink-100 via-white to-amber-100 p-8 text-center">
              <div className="text-8xl">🍓☕🥤</div>
              <h3 className="mt-8 text-4xl font-black">Combo Cream</h3>
              <p className="mt-3 text-zinc-600">
                Fresas con crema + frappé o café
              </p>
              <p className="mt-8 text-5xl font-black text-pink-500">$99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}