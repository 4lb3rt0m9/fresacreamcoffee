import { useEffect, useState } from "react"

export default function Location() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hour = new Date().getHours()
    setIsOpen(hour >= 9 && hour < 20)
  }, [])

  return (
    <section id="ubicacion" className="px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--strawberry)]">
            Ubicación
          </p>

          <h2 className="mt-3 font-[Playfair_Display] text-5xl font-black">
            Visítanos
          </h2>

          <p className="mt-6 text-[var(--coffee)]">
            Horario: lunes a domingo de 9:00 a.m. a 8:00 p.m.
          </p>

          <p className="mt-4 font-black">
            {isOpen ? "🟢 Abierto ahora" : "🔴 Cerrado, puedes programar tu pedido"}
          </p>

          <p className="mt-6 text-[var(--coffee)]">
            Dirección: AQUÍ VA TU DIRECCIÓN REAL.
          </p>

          <a href="https://maps.google.com/?q=TU_DIRECCION_O_COORDENADAS" target="_blank" className="mt-8 inline-block btn-primary">
            Cómo llegar
          </a>
        </div>

        <div className="glass-card overflow-hidden p-0">
          <iframe
            src="https://www.google.com/maps?q=TU_DIRECCION_O_COORDENADAS&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}