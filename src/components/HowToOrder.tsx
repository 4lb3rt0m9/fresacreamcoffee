const steps = [
  "Elige tu producto",
  "Personaliza toppings y extras",
  "Selecciona pickup, reparto o programado",
  "Envíalo por WhatsApp",
]

export default function HowToOrder() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--strawberry)]">
          Cómo pedir
        </p>

        <h2 className="mt-3 font-[Playfair_Display] text-5xl font-black">
          Fácil, rápido y sin vueltas
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="glass-card p-6">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--espresso)] font-black text-white">
                {index + 1}
              </span>

              <p className="mt-5 font-black text-[var(--espresso)]">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}