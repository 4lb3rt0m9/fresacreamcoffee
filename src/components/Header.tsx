export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/55 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="font-[Playfair_Display] text-2xl font-black tracking-tight">
            Fresa Cream Café
          </h1>
          <p className="text-xs font-semibold tracking-[0.2em] text-[var(--coffee)]">
            STRAWBERRIES · COFFEE · CREAM
          </p>
        </div>

        <div className="hidden items-center gap-7 text-sm font-black text-[var(--coffee)] md:flex">
          <a href="#promos" className="hover:text-[var(--strawberry)]">Promos</a>
          <a href="#productos" className="hover:text-[var(--strawberry)]">Productos</a>
          <a href="#pedido" className="hover:text-[var(--strawberry)]">Pedir</a>
          <a href="#ubicacion" className="hover:text-[var(--strawberry)]">Ubicación</a>
        </div>
      </nav>
    </header>
  )
}