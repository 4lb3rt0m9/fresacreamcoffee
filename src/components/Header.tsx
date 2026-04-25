export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-pink-500 text-2xl text-white">
            🍓
          </div>

          <div>
            <h1 className="text-xl font-black tracking-tight">
              Fresa Cream <span className="text-pink-500">Café</span>
            </h1>
            <p className="text-xs font-medium text-zinc-500">
              Café · Frappé · Fresas con crema
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-8 font-semibold text-zinc-600 md:flex">
          <a href="#menu" className="hover:text-pink-500">Menú</a>
          <a href="#clientes" className="hover:text-pink-500">Opiniones</a>
          <a href="#contacto" className="hover:text-pink-500">Contacto</a>
        </div>

        <a
          href="https://wa.me/521XXXXXXXXXX"
          target="_blank"
          className="rounded-full bg-pink-500 px-6 py-3 font-bold text-white hover:bg-pink-600"
        >
          Pedir
        </a>
      </nav>
    </header>
  )
}