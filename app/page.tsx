import Image from "next/image";
import { products, services } from "@/data/products";

const heroFrames = [
  "/images/hero/frame-009.jpg",
  "/images/hero/frame-010.jpg",
  "/images/hero/frame-011.jpg",
  "/images/hero/frame-012.jpg",
  "/images/hero/frame-013.jpg",
  "/images/hero/frame-014.jpg",
  "/images/hero/frame-015.jpg",
  "/images/hero/frame-016.jpg",
  "/images/hero/frame-017.jpg",
];

const contact = {
  email: "pritikaacameracenter@gmail.com",
  phoneDisplay: "+977 9841224127",
  phoneDial: "+9779841224127",
  whatsapp: "9779841224127",
  mapShareUrl:
    "https://www.google.com/maps/dir//Pritika+Camera+Center,+Above+Apple+Care+Store,+Pako+Marg,+Kathmandu+44600,+Nepal/@51.4636162,7.0091273,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39eb19886dda9147:0xafa6f8b17b7611a8!2m2!1d85.3099673!2d27.7030869?hl=en-DE&entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Pritika+Camera+Center,+Above+Apple+Care+Store,+Pako+Marg,+Kathmandu+44600,+Nepal&output=embed",
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
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-24">
            <div className="animate-enter-up">
              <p className="mb-6 text-xs tracking-[0.3em] text-zinc-300">
                KATHMANDU, NEPAL
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                Real camera gear. Real local support.
              </h1>
              <p className="mt-6 max-w-2xl text-base text-zinc-300 md:text-xl">
                Browse popular products, compare options, and get guidance from
                Pritika Camera Center.
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

            <div className="relative animate-float">
              <Image
                src={products[0].image}
                alt={products[0].name}
                width={900}
                height={620}
                priority
                className="w-full rounded-3xl border border-white/10 object-cover shadow-2xl shadow-orange-500/20"
              />
              <div className="animate-enter-up-delay absolute -bottom-4 left-4 rounded-xl border border-white/15 bg-zinc-950/80 px-4 py-3 text-xs font-semibold tracking-[0.2em] text-orange-300 backdrop-blur">
                LIVE INVENTORY
              </div>
            </div>
          </div>

          <div className="border-y border-white/10 bg-black/30 py-4">
            <div className="hero-rail-track">
              {[...heroFrames, ...heroFrames].map((frame, index) => (
                <div key={`${frame}-${index}`} className="hero-rail-item">
                  <Image
                    src={frame}
                    alt="Store showcase"
                    width={240}
                    height={140}
                    className="h-20 w-36 rounded-lg border border-white/10 object-cover md:h-24 md:w-44"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-10">
            <p className="text-xs tracking-[0.3em] text-zinc-400">PRODUCTS</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Featured gear from your `data/products.ts`
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((item) => (
              <article
                key={item.id}
                className="animate-enter-up rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={800}
                  height={520}
                  className="mb-4 h-44 w-full rounded-xl border border-white/10 object-cover"
                />
                <p className="text-xs tracking-[0.2em] text-zinc-400">{item.category}</p>
                <h3 className="mt-2 text-base font-semibold">{item.name}</h3>
                <p className="mt-1 text-sm text-zinc-300">{item.brand}</p>
                <p className="mt-3 inline-block rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                  {item.status}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="services"
          className="border-y border-white/10 bg-zinc-900/40 px-6 py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-xs tracking-[0.3em] text-zinc-400">SERVICES</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">More than a shop</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-orange-500/20 to-sky-500/20 p-8 md:p-10">
            <p className="text-xs tracking-[0.3em] text-zinc-300">CONTACT</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Visit us at Pako Marg, Kathmandu
            </h2>
            <div className="mt-6 space-y-2 text-zinc-200">
              <p>Phone: {contact.phoneDisplay}</p>
              <p>Email: {contact.email}</p>
              <p>
                Location: Above Apple Care Store, Pako Marg, Kathmandu 44600,
                Nepal
              </p>
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
                <input
                  type="text"
                  name="_honey"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
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
