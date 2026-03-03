const categories = [
  {
    title: "Cameras",
    description: "Mirrorless, DSLR, compact, and cinema camera bodies.",
  },
  {
    title: "Lenses",
    description: "Prime, zoom, portrait, and specialty lenses for every shoot.",
  },
  {
    title: "Studio Setup",
    description: "Lighting, softboxes, tripods, backdrops, and rigs.",
  },
  {
    title: "Accessories",
    description: "Batteries, cards, mics, filters, bags, and daily essentials.",
  },
];

const services = [
  "Product guidance for beginners to professionals",
  "Event and creator setup consultation",
  "Accessory matching for your exact camera model",
  "After-sales support and trusted local help",
];

const contact = {
  email: "pritikaacameracenter@gmail.com",
  phoneDisplay: "+977 9841224127",
  phoneDial: "+9779841224127",
  whatsapp: "9779841224127",
  mapShareUrl: "https://share.google/UNlk4GBNjK41OxKnG",
  mapEmbedUrl: "https://www.google.com/maps?q=Newroad,+Kathmandu,+Nepal&output=embed",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-semibold tracking-[0.16em]">
            PRITIKA CAMERA CENTER
          </a>
          <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a href="#products" className="hover:text-white">
              Products
            </a>
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(234,88,12,0.35),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.25),transparent_40%)]" />
          <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="mb-6 text-xs tracking-[0.3em] text-zinc-300">
              NEWROAD, KATHMANDU, NEPAL
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-7xl">
              Your trusted camera partner for creators, studios, and storytellers.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-zinc-300 md:text-xl">
              Professional photo and video equipment, expert guidance, and
              practical support to help you shoot better from day one.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#products"
                className="rounded-full bg-orange-500 px-8 py-4 text-center text-base font-semibold text-zinc-950 transition hover:bg-orange-400"
              >
                Explore Products
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/30 px-8 py-4 text-center text-base font-semibold transition hover:bg-white/10"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.3em] text-zinc-400">PRODUCTS</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                Built for every shooting style
              </h2>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {categories.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-zinc-300">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="services"
          className="border-y border-white/10 bg-zinc-900/40 px-6 py-16 md:py-20"
        >
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs tracking-[0.3em] text-zinc-400">SERVICES</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                More than a shop
              </h2>
              <p className="mt-4 text-zinc-300">
                We help you choose the right setup based on your style, budget,
                and actual use case.
              </p>
            </div>
            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-zinc-200"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-orange-500/20 to-sky-500/20 p-8 md:p-10">
            <p className="text-xs tracking-[0.3em] text-zinc-300">CONTACT</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Visit us at Newroad, Kathmandu
            </h2>
            <div className="mt-6 space-y-2 text-zinc-200">
              <p>Phone: {contact.phoneDisplay}</p>
              <p>Email: {contact.email}</p>
              <p>Location: Newroad, Kathmandu, Nepal</p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${contact.phoneDial}`}
                className="rounded-full bg-white px-7 py-3 text-center font-semibold text-zinc-950 hover:bg-zinc-200"
              >
                Call Now
              </a>
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 px-7 py-3 text-center font-semibold hover:bg-white/10"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs tracking-[0.3em] text-zinc-400">
                QUICK MESSAGE
              </p>
              <h3 className="mt-2 text-2xl font-semibold">Send us an inquiry</h3>
              <p className="mt-3 text-sm text-zinc-300">
                Fill this form and you will receive messages at{" "}
                <span className="font-semibold text-zinc-200">{contact.email}</span>.
              </p>
              <form
                action={`https://formsubmit.co/${contact.email}`}
                method="POST"
                className="mt-6 space-y-4"
              >
                <input type="hidden" name="_subject" value="New inquiry from website" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="true" />
                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                <input
                  required
                  name="name"
                  type="text"
                  minLength={2}
                  maxLength={60}
                  autoComplete="name"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-white/15 bg-zinc-950 px-4 py-3 text-sm outline-none ring-orange-500 placeholder:text-zinc-500 focus:ring-2"
                />
                <input
                  required
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  minLength={7}
                  maxLength={20}
                  pattern="[0-9+\\s()-]{7,20}"
                  autoComplete="tel"
                  placeholder="Phone number"
                  className="w-full rounded-lg border border-white/15 bg-zinc-950 px-4 py-3 text-sm outline-none ring-orange-500 placeholder:text-zinc-500 focus:ring-2"
                />
                <textarea
                  required
                  name="message"
                  rows={5}
                  minLength={10}
                  maxLength={600}
                  autoComplete="off"
                  placeholder="What products are you looking for?"
                  className="w-full rounded-lg border border-white/15 bg-zinc-950 px-4 py-3 text-sm outline-none ring-orange-500 placeholder:text-zinc-500 focus:ring-2"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-orange-500 px-6 py-3 text-center font-semibold text-zinc-950 transition hover:bg-orange-400"
                >
                  Send Inquiry
                </button>
              </form>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <iframe
                title="Pritika Camera Center Map"
                src={contact.mapEmbedUrl}
                className="h-full min-h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="border-t border-white/10 p-4">
                <a
                  href={contact.mapShareUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-orange-300 hover:text-orange-200"
                >
                  Open full map directions
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Pritika Camera Center</p>
          <p>Photo and video equipment for creators in Nepal</p>
        </div>
      </footer>
    </div>
  );
}
