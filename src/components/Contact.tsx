export default function Contact() {
  return (
    <section id="contacto" className="px-6 py-20">
      <div className="mx-auto max-w-7xl rounded-[3rem] bg-zinc-950 p-10 text-white md:p-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-pink-300">
              Contacto
            </p>

            <h2 className="mt-3 text-5xl font-black">
              ¿Quejas, sugerencias o pedidos?
            </h2>

            <p className="mt-5 text-zinc-300">
              Escríbenos por WhatsApp. Queremos atenderte rápido y mejorar cada día.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/521XXXXXXXXXX"
              target="_blank"
              className="rounded-full bg-pink-500 px-8 py-4 text-center font-black text-white hover:bg-pink-600"
            >
              Pedir por WhatsApp
            </a>

            <a
              href="https://wa.me/521XXXXXXXXXX?text=Hola,%20quiero%20dejar%20una%20queja%20o%20sugerencia"
              target="_blank"
              className="rounded-full bg-white px-8 py-4 text-center font-black text-zinc-950 hover:bg-zinc-100"
            >
              Quejas y sugerencias
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}