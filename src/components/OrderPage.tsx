import { useMemo, useState } from "react"

const WHATSAPP_NUMBER = "522206295444"

type ProductType = "Fresas" | "Frappé" | "Café caliente" | "Café frío"
type DeliveryType = "pickup" | "reparto" | "programado"

type CartItem = {
  id: number
  product: ProductType
  size: string
  flavor: string
  freeToppings: string[]
  extras: string[]
  quantity: number
  price: number
}

const products = [
  { name: "Fresas" as ProductType, emoji: "🍓", base: 50 },
  { name: "Frappé" as ProductType, emoji: "🥤", base: 55 },
  { name: "Café caliente" as ProductType, emoji: "☕", base: 35 },
  { name: "Café frío" as ProductType, emoji: "🧊", base: 45 },
]

const sizes = [
  { name: "Chico", extra: 0 },
  { name: "Mediano", extra: 15 },
  { name: "Grande", extra: 25 },
]

const flavors = {
  Fresas: ["Clásicas", "Premium", "Chocolate", "Lechera"],
  Frappé: ["Oreo", "Fresa", "Chocolate", "Vainilla", "Caramelo"],
  "Café caliente": ["Americano", "Latte", "Capuchino", "Moka"],
  "Café frío": ["Latte frío", "Moka frío", "Caramelo frío", "Vainilla frío"],
}

const freeToppings = [
  "Lechera",
  "Chocolate",
  "Granola",
  "Chispas",
  "Canela",
]

const extras = [
  { name: "Extra crema", price: 10 },
  { name: "Extra fresa", price: 15 },
  { name: "Oreo", price: 10 },
  { name: "Nuez", price: 12 },
  { name: "Crema batida", price: 10 },
  { name: "Chocolate extra", price: 8 },
]

export default function OrderPage() {
  const [product, setProduct] = useState<ProductType>("Fresas")
  const [size, setSize] = useState(sizes[1])
  const [flavor, setFlavor] = useState("Clásicas")
  const [selectedFreeToppings, setSelectedFreeToppings] = useState<string[]>([])
  const [selectedExtras, setSelectedExtras] = useState<string[]>([])
  const [quantity, setQuantity] = useState(1)
  const [cart, setCart] = useState<CartItem[]>([])

  const [deliveryType, setDeliveryType] = useState<DeliveryType>("pickup")
  const [customerName, setCustomerName] = useState("")
  const [address, setAddress] = useState("")
  const [scheduleTime, setScheduleTime] = useState("")
  const [comments, setComments] = useState("")

  const currentProduct = products.find((p) => p.name === product)!

  const itemPrice = useMemo(() => {
    const extrasTotal = extras
      .filter((e) => selectedExtras.includes(e.name))
      .reduce((sum, e) => sum + e.price, 0)

    return currentProduct.base + size.extra + extrasTotal
  }, [currentProduct, size, selectedExtras])

  const itemTotal = itemPrice * quantity

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const deliveryCost = deliveryType === "reparto" && subtotal < 200 ? 30 : 0

  const total = subtotal + deliveryCost

  const toggleFreeTopping = (name: string) => {
    setSelectedFreeToppings((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name]
    )
  }

  const toggleExtra = (name: string) => {
    setSelectedExtras((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name]
    )
  }

  const resetConfigurator = () => {
    setSelectedFreeToppings([])
    setSelectedExtras([])
    setQuantity(1)
    setSize(sizes[1])
    setFlavor(flavors[product][0])
  }

  const addToCart = () => {
    const newItem: CartItem = {
      id: Date.now(),
      product,
      size: size.name,
      flavor,
      freeToppings: selectedFreeToppings,
      extras: selectedExtras,
      quantity,
      price: itemPrice,
    }

    setCart((current) => [...current, newItem])
    resetConfigurator()
  }

  const removeFromCart = (id: number) => {
    setCart((current) => current.filter((item) => item.id !== id))
  }

  const validateOrder = () => {
    if (cart.length === 0) {
      alert("Agrega al menos un producto al carrito.")
      return false
    }

    if (!customerName.trim()) {
      alert("Ingresa tu nombre.")
      return false
    }

    if (deliveryType === "reparto" && !address.trim()) {
      alert("Ingresa la dirección para reparto.")
      return false
    }

    if (deliveryType === "programado" && !scheduleTime.trim()) {
      alert("Ingresa la hora para programar tu pedido.")
      return false
    }

    return true
  }

  const sendWhatsAppOrder = () => {
    if (!validateOrder()) return

    const folio = `FC-${Date.now()}`

    const itemsText = cart
      .map((item, index) => {
        return `${index + 1}. ${item.quantity}x ${item.product}
   Sabor: ${item.flavor}
   Tamaño: ${item.size}
   Toppings gratis: ${item.freeToppings.length ? item.freeToppings.join(", ") : "Sin toppings"}
   Adicionales: ${item.extras.length ? item.extras.join(", ") : "Sin adicionales"}
   Importe: $${item.price * item.quantity}`
      })
      .join("\n\n")

    const deliveryText =
      deliveryType === "pickup"
        ? "Pickup / Pasar a recoger"
        : deliveryType === "reparto"
        ? "Reparto"
        : "Pedido programado"

    const message = `
Hola, quiero hacer un pedido en Fresa Cream Café.

Folio: ${folio}

Pedido:
${itemsText}

Subtotal: $${subtotal}
Envío: ${deliveryCost === 0 ? "Gratis" : `$${deliveryCost}`}
Total aproximado: $${total}

Tipo de entrega: ${deliveryText}
${deliveryType === "reparto" ? `Dirección: ${address}` : ""}
${deliveryType === "programado" ? `Hora programada: ${scheduleTime}` : ""}

Nombre: ${customerName}
Comentarios: ${comments || "Sin comentarios"}

${subtotal >= 200 ? "Aplica entrega gratis por compra mayor a $200." : "Entrega gratis en compras mayores a $200."}
`.trim()

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  return (
    <section id="pedido" className="bg-gradient-to-br from-[#fff7f2] via-[#ffe4ec] to-[#f3e7dc] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="font-black uppercase tracking-[0.25em] text-pink-500">
            Arma tu pedido
          </p>

          <h2 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
            Personaliza y pide por WhatsApp
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-600">
            Elige fresas, frappés, café frío o caliente. Agrega toppings, adicionales y manda tu pedido directo por WhatsApp.
          </p>

          <p className="mt-4 inline-block rounded-full bg-white px-5 py-2 font-bold text-pink-600 shadow-sm">
            🚚 Entrega gratis en compras mayores a $200
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] bg-white/85 p-6 shadow-xl backdrop-blur md:p-8">
            <h3 className="mb-5 text-2xl font-black">1. Elige producto</h3>

            <div className="grid gap-4 md:grid-cols-4">
              {products.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setProduct(item.name)
                    setFlavor(flavors[item.name][0])
                    setSelectedFreeToppings([])
                    setSelectedExtras([])
                  }}
                  className={`rounded-3xl border p-5 text-left transition hover:-translate-y-1 ${
                    product === item.name
                      ? "border-pink-500 bg-pink-100 shadow-lg"
                      : "border-pink-100 bg-white"
                  }`}
                >
                  <div className="text-5xl">{item.emoji}</div>
                  <p className="mt-4 font-black">{item.name}</p>
                  <p className="text-sm text-zinc-500">Desde ${item.base}</p>
                </button>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="mb-4 text-2xl font-black">2. Sabor / opción</h3>

              <div className="flex flex-wrap gap-3">
                {flavors[product].map((item) => (
                  <button
                    key={item}
                    onClick={() => setFlavor(item)}
                    className={`rounded-full px-5 py-3 font-bold transition ${
                      flavor === item
                        ? "bg-pink-500 text-white"
                        : "bg-pink-50 text-zinc-700 hover:bg-pink-100"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="mb-4 text-2xl font-black">3. Tamaño</h3>

              <div className="flex flex-wrap gap-3">
                {sizes.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setSize(item)}
                    className={`rounded-full px-6 py-3 font-bold transition ${
                      size.name === item.name
                        ? "bg-[#d8b99c] text-white"
                        : "bg-[#f3e7dc] text-zinc-700 hover:bg-[#ead6c4]"
                    }`}
                  >
                    {item.name} {item.extra > 0 && `+ $${item.extra}`}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="mb-4 text-2xl font-black">4. Toppings gratis</h3>

              <div className="flex flex-wrap gap-3">
                {freeToppings.map((item) => (
                  <button
                    key={item}
                    onClick={() => toggleFreeTopping(item)}
                    className={`rounded-full px-5 py-3 font-bold transition ${
                      selectedFreeToppings.includes(item)
                        ? "bg-amber-300 text-zinc-950"
                        : "bg-[#fff8e6] text-zinc-700 hover:bg-amber-100"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="mb-4 text-2xl font-black">5. Adicionales</h3>

              <div className="flex flex-wrap gap-3">
                {extras.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => toggleExtra(item.name)}
                    className={`rounded-full px-5 py-3 font-bold transition ${
                      selectedExtras.includes(item.name)
                        ? "bg-zinc-950 text-white"
                        : "bg-white text-zinc-700 shadow-sm hover:bg-zinc-100"
                    }`}
                  >
                    {item.name} +${item.price}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="mb-4 text-2xl font-black">6. Cantidad</h3>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="grid h-12 w-12 place-items-center rounded-full bg-pink-100 text-2xl font-black"
                >
                  -
                </button>

                <span className="text-3xl font-black">{quantity}</span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="grid h-12 w-12 place-items-center rounded-full bg-pink-500 text-2xl font-black text-white"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] bg-[#fff7f2] p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm text-zinc-500">Total del producto</p>
                  <p className="text-4xl font-black text-pink-500">${itemTotal}</p>
                </div>

                <button
                  onClick={addToCart}
                  className="rounded-full bg-pink-500 px-8 py-4 font-black text-white shadow-lg shadow-pink-200 hover:bg-pink-600"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-[2rem] bg-zinc-950 p-7 text-white shadow-2xl lg:sticky lg:top-24">
            <p className="font-black uppercase tracking-[0.25em] text-pink-300">
              Carrito
            </p>

            <h3 className="mt-3 text-4xl font-black">Tu pedido</h3>

            {cart.length === 0 ? (
              <p className="mt-6 text-zinc-400">
                Aún no has agregado productos.
              </p>
            ) : (
              <div className="mt-6 space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="rounded-3xl bg-white/10 p-4">
                    <div className="flex justify-between gap-4">
                      <div>
                        <p className="font-black">
                          {item.quantity}x {item.product}
                        </p>
                        <p className="text-sm text-zinc-400">
                          {item.flavor} · {item.size}
                        </p>
                        <p className="mt-2 text-xs text-zinc-400">
                          Toppings: {item.freeToppings.length ? item.freeToppings.join(", ") : "Sin toppings"}
                        </p>
                        <p className="text-xs text-zinc-400">
                          Extras: {item.extras.length ? item.extras.join(", ") : "Sin adicionales"}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="font-black text-pink-300">
                          ${item.price * item.quantity}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="mt-2 text-xs text-red-300 hover:text-red-200"
                        >
                          Quitar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 space-y-3 rounded-3xl bg-white/10 p-5">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <strong>${subtotal}</strong>
              </div>

              <div className="flex justify-between">
                <span>Envío</span>
                <strong>{deliveryCost === 0 ? "Gratis" : `$${deliveryCost}`}</strong>
              </div>

              <div className="border-t border-white/10 pt-3">
                <div className="flex justify-between text-2xl">
                  <span className="font-black">Total</span>
                  <strong className="text-pink-300">${total}</strong>
                </div>
              </div>

              {subtotal >= 200 && (
                <p className="rounded-full bg-green-100 px-4 py-2 text-center text-sm font-bold text-green-700">
                  Aplica entrega gratis
                </p>
              )}
            </div>

            <div className="mt-8">
              <h4 className="mb-3 text-xl font-black">Entrega</h4>

              <div className="grid gap-3">
                <button
                  onClick={() => setDeliveryType("pickup")}
                  className={`rounded-2xl px-4 py-3 font-bold ${
                    deliveryType === "pickup"
                      ? "bg-pink-500"
                      : "bg-white/10 hover:bg-white/15"
                  }`}
                >
                  Pickup / Pasar a recoger
                </button>

                <button
                  onClick={() => setDeliveryType("reparto")}
                  className={`rounded-2xl px-4 py-3 font-bold ${
                    deliveryType === "reparto"
                      ? "bg-pink-500"
                      : "bg-white/10 hover:bg-white/15"
                  }`}
                >
                  Reparto
                </button>

                <button
                  onClick={() => setDeliveryType("programado")}
                  className={`rounded-2xl px-4 py-3 font-bold ${
                    deliveryType === "programado"
                      ? "bg-pink-500"
                      : "bg-white/10 hover:bg-white/15"
                  }`}
                >
                  Programar pedido
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <input
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Tu nombre"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-zinc-500"
              />

              {deliveryType === "reparto" && (
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Dirección de entrega"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-zinc-500"
                />
              )}

              {deliveryType === "programado" && (
                <input
                  value={scheduleTime}
                  onChange={(e) => setScheduleTime(e.target.value)}
                  placeholder="Hora programada, ejemplo: 6:30 p.m."
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-zinc-500"
                />
              )}

              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Comentarios: sin nuez, poca crema, extra frío..."
                className="min-h-24 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-zinc-500"
              />
            </div>

            <button
              onClick={sendWhatsAppOrder}
              className="mt-6 w-full rounded-full bg-pink-500 px-8 py-4 font-black text-white shadow-lg shadow-pink-900/30 hover:bg-pink-600"
            >
              Enviar pedido por WhatsApp
            </button>
          </aside>
        </div>
      </div>
    </section>
  )
}