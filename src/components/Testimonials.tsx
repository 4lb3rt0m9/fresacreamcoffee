const opinions = [
  "Las fresas están súper cremosas y bien servidas.",
  "El frappé de Oreo está buenísimo.",
  "Se ve limpio, moderno y atienden rápido.",
]

export default function Testimonials() {
  return (
    <section id="clientes" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="font-black uppercase tracking-[0.25em] text-pink-500">
          Opiniones
        </p>

        <h2 className="mt-3 text-5xl font-black">
          Lo que dicen nuestros clientes
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {opinions.map((opinion) => (
            <div key={opinion} className="rounded-[2rem] bg-[#fff7f2] p-7">
              <p className="text-lg text-zinc-700">“{opinion}”</p>
              <p className="mt-5 font-black">Cliente Fresa Cream</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}