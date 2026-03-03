"use client";

import { useState } from "react";
import Image from "next/image";
import { products, services } from "@/data/products";

const liveProductFrames = products.map((product) => product.image);
const serviceTitles = services.map((service) => service.title);

const visitSlots = [
  "Sunday-Friday | 10:00 - 11:00",
  "Sunday-Friday | 11:00 - 12:00",
  "Sunday-Friday | 12:00 - 13:00",
  "Sunday-Friday | 13:00 - 14:00",
  "Sunday-Friday | 14:00 - 15:00",
  "Sunday-Friday | 15:00 - 16:00",
  "Sunday-Friday | 16:00 - 17:00",
  "Sunday-Friday | 17:00 - 18:00",
  "Sunday-Friday | 18:00 - 19:00",
  "Saturday | 10:00 - 11:00",
  "Saturday | 11:00 - 12:00",
  "Saturday | 12:00 - 13:00",
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
  const [selectedService, setSelectedService] = useState(serviceTitles[0] ?? "");

  const selectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    document.getElementById("service-booking")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-zinc-100">

      <main>
        <section className="relative h-[70vh] min-h-[430px] max-h-[860px] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/hero/frame-009.jpg"
            className="h-full w-full object-cover"
          >
            <source src="/video/hero.mp4" type="video/mp4" />
            <source src="/video/hero.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-slate-950/90" />
          <div className="pointer-events-none absolute inset-x-0 bottom-7 flex justify-center">
            <div className="h-10 w-6 rounded-full border border-white/40 p-1">
              <div className="scroll-dot h-2 w-2 rounded-full bg-white" />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.28),transparent_45%),radial-gradient(circle_at_85%_15%,rgba(56,189,248,0.2),transparent_45%),linear-gradient(120deg,#1f2937_0%,#111827_45%,#0b1220_100%)]">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
            <div className="animate-enter-up">
              <p className="mb-6 text-xs tracking-[0.3em] text-zinc-300/90">
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
                src={products[0]?.image ?? "/images/hero/frame-009.jpg"}
                alt={products[0]?.name ?? "Featured product"}
                width={900}
                height={620}
                className="w-full rounded-3xl border border-white/10 object-cover shadow-2xl shadow-orange-500/20"
              />
              <div className="animate-enter-up-delay absolute -bottom-4 left-4 rounded-xl border border-white/15 bg-zinc-950/80 px-4 py-3 text-xs font-semibold tracking-[0.2em] text-orange-300 backdrop-blur">
                LIVE INVENTORY
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-black/30 py-4">
          <div className="hero-rail-track">
            {[...liveProductFrames, ...liveProductFrames].map((frame, index) => (
              <div key={`${frame}-${index}`} className="hero-rail-item">
                <Image
                  src={frame}
                  alt="Live product"
                  width={240}
                  height={140}
                  className="h-20 w-36 rounded-lg border border-white/10 object-cover md:h-24 md:w-44"
                />
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-10">
            <p className="text-xs tracking-[0.3em] text-zinc-400">PRODUCTS</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Featured Camera Gear
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-300">
              Handpicked cameras, lenses, and creator essentials available at
              Pritika Camera Center.
            </p>
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
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Click a service to book
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-300">
              Choose your service and we will reserve a visit slot at the store.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {services.map((service) => (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => selectService(service.title)}
                  className={`rounded-xl border p-5 text-left transition ${
                    selectedService === service.title
                      ? "border-orange-400/80 bg-orange-500/10"
                      : "border-white/10 bg-white/[0.03] hover:border-white/30"
                  }`}
                >
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{service.description}</p>
                  <p className="mt-4 text-xs font-semibold tracking-[0.18em] text-orange-300">
                    BOOK THIS SERVICE
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="service-booking" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <p className="text-xs tracking-[0.3em] text-zinc-400">SERVICE BOOKING</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Book your store visit
            </h2>
            <p className="mt-3 text-sm text-zinc-300">
              Store hours: Sunday-Friday 10:00-19:00, Saturday 10:00-13:00.
            </p>
            <form
              action={`https://formsubmit.co/${contact.email}`}
              method="POST"
              className="mt-8 grid gap-4 md:grid-cols-2"
            >
              <input type="hidden" name="_subject" value="New service booking request" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="md:col-span-2">
                <label htmlFor="service" className="mb-2 block text-sm text-zinc-300">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={selectedService}
                  onChange={(event) => setSelectedService(event.target.value)}
                  required
                  className="w-full rounded-lg border border-white/15 bg-zinc-950 px-4 py-3 text-sm outline-none ring-orange-500 focus:ring-2"
                >
                  {serviceTitles.map((title) => (
                    <option key={title} value={title}>
                      {title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="booking-name" className="mb-2 block text-sm text-zinc-300">
                  Full name
                </label>
                <input
                  id="booking-name"
                  required
                  name="name"
                  type="text"
                  minLength={2}
                  maxLength={80}
                  autoComplete="name"
                  className="w-full rounded-lg border border-white/15 bg-zinc-950 px-4 py-3 text-sm outline-none ring-orange-500 focus:ring-2"
                />
              </div>

              <div>
                <label htmlFor="booking-phone" className="mb-2 block text-sm text-zinc-300">
                  Phone number
                </label>
                <input
                  id="booking-phone"
                  required
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  minLength={7}
                  maxLength={20}
                  pattern="[0-9+\\s()-]{7,20}"
                  autoComplete="tel"
                  className="w-full rounded-lg border border-white/15 bg-zinc-950 px-4 py-3 text-sm outline-none ring-orange-500 focus:ring-2"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="booking-address" className="mb-2 block text-sm text-zinc-300">
                  Address
                </label>
                <input
                  id="booking-address"
                  required
                  name="address"
                  type="text"
                  minLength={5}
                  maxLength={160}
                  autoComplete="street-address"
                  className="w-full rounded-lg border border-white/15 bg-zinc-950 px-4 py-3 text-sm outline-none ring-orange-500 focus:ring-2"
                />
              </div>

              <div>
                <label htmlFor="visit-date" className="mb-2 block text-sm text-zinc-300">
                  Preferred date
                </label>
                <input
                  id="visit-date"
                  required
                  name="preferred_date"
                  type="date"
                  className="w-full rounded-lg border border-white/15 bg-zinc-950 px-4 py-3 text-sm outline-none ring-orange-500 focus:ring-2"
                />
              </div>

              <div>
                <label htmlFor="visit-slot" className="mb-2 block text-sm text-zinc-300">
                  Preferred time slot
                </label>
                <select
                  id="visit-slot"
                  name="preferred_time_slot"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-white/15 bg-zinc-950 px-4 py-3 text-sm outline-none ring-orange-500 focus:ring-2"
                >
                  <option value="" disabled>
                    Select a time slot
                  </option>
                  {visitSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-orange-500 px-6 py-3 text-center font-semibold text-zinc-950 transition hover:bg-orange-400"
                >
                  Book Service Visit
                </button>
              </div>
            </form>
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
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-zinc-400">
          <p>Copyright {new Date().getFullYear()} Pritika Camera Center</p>
          <p>Photo and video equipment for creators in Nepal</p>
          <p>Store Hours: Sunday-Friday 10:00-19:00 | Saturday 10:00-13:00</p>
        </div>
      </footer>
    </div>
  );
}
