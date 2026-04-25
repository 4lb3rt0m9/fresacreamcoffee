const faqs = [
  ["¿Tienen entrega gratis?", "Sí, en compras mayores a $200."],
  ["¿Puedo pasar a recoger?", "Sí, puedes elegir pickup al armar tu pedido."],
  ["¿Puedo programar pedido?", "Sí, indica la hora al enviar tu pedido por WhatsApp."],
  ["¿Tienen reparto?", "Sí, el reparto está disponible según zona."],
]

export default function FAQ() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--strawberry)]">
          Preguntas frecuentes
        </p>

        <h2 className="mt-3 font-[Playfair_Display] text-5xl font-black">
          Antes de pedir
        </h2>

        <div className="mt-10 space-y-4">
          {faqs.map(([q, a]) => (
            <div key={q} className="glass-card p-6">
              <h3 className="font-black text-[var(--espresso)]">{q}</h3>
              <p className="mt-2 text-[var(--coffee)]">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}