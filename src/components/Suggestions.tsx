export default function Suggestions() {
  return (
    <section id="sugerencias" className="px-6 py-20 bg-white">
      <div className="mx-auto max-w-4xl rounded-3xl bg-zinc-950 p-8 text-white md:p-12">
        <p className="font-bold uppercase tracking-[0.25em] text-pink-300">
          Quejas y sugerencias
        </p>

        <h2 className="mt-3 text-4xl font-black">
          Queremos mejorar contigo
        </h2>

        <p className="mt-4 text-zinc-300">
          Escríbenos si tienes una sugerencia, comentario o algo que podamos mejorar.
        </p>

        <a
          href="https://wa.me/521XXXXXXXXXX?text=Hola,%20quiero%20dejar%20una%20queja%20o%20sugerencia"
          target="_blank"
          className="mt-8 inline-block rounded-full bg-pink-600 px-6 py-3 font-bold text-white hover:bg-pink-700"
        >
          Enviar sugerencia
        </a>
      </div>
    </section>
  )
}