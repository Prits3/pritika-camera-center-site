"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { products, services } from "@/data/products";
import { copy, productTranslations, serviceTranslations, visitSlots, type Language } from "@/data/translations";
const aboutFrames = [
  "/images/about/kpa.png",
  "/images/about/pcc.png",
  "/images/about/award.png",
];
const serviceTitles = services.map((service) => service.title);
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
  const [language, setLanguage] = useState<Language>("en");
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState(serviceTitles[0] ?? "");
  const t = copy[language];
  const productLocale = productTranslations[language];
  const serviceLocale = serviceTranslations[language];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const selectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    document.getElementById("service-booking")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-zinc-100">
      <header
        className={`fixed inset-x-0 top-0 z-30 border-b border-zinc-200/70 bg-[#f5f5f7]/95 backdrop-blur transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
          <p className="text-sm font-semibold tracking-[0.16em] text-zinc-900">
            PRITIKA CAMERA CENTER
          </p>
          <nav className="hidden gap-7 text-sm text-zinc-700 md:flex">
            <a href="#products" className="hover:text-zinc-950">
              {t.navProducts}
            </a>
            <a href="#services" className="hover:text-zinc-950">
              {t.navServices}
            </a>
            <a href="#about" className="hover:text-zinc-950">
              {t.navAbout}
            </a>
          </nav>
          <div className="flex items-center gap-3 text-zinc-800">
            <label htmlFor="language" className="sr-only">
              Language
            </label>
            <select
              id="language"
              value={language}
              onChange={(event) => setLanguage(event.target.value as Language)}
              className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-semibold outline-none ring-[#0071e3] focus:ring-2"
            >
              <option value="en">EN</option>
              <option value="ne">NE</option>
              <option value="hi">HI</option>
            </select>
            <button
              type="button"
              onClick={() =>
                document.getElementById("products")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              aria-label="Go to products"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() =>
                document.getElementById("service-booking")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              aria-label="Go to booking"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="5" y="5" width="14" height="14" rx="2.8" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              aria-label="Go to about section"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="border-b border-zinc-200 bg-[#f5f5f7] text-zinc-900">
          <div className="mx-auto max-w-6xl px-6 pb-16 pt-28 text-center md:pt-32">
            <p className="text-sm tracking-[0.2em] text-zinc-500">{t.heroLocation}</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
              {t.heroTitle}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-zinc-700 md:text-3xl">
              {t.heroSubtitle}
            </p>
            <p className="mt-4 text-lg text-zinc-500">{t.heroSince}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#products"
                className="rounded-full bg-[#0071e3] px-8 py-3 text-base font-medium text-white transition hover:bg-[#0066cc]"
              >
                {t.ctaLearn}
              </a>
              <a
                href="#service-booking"
                className="rounded-full border border-[#0071e3] px-8 py-3 text-base font-medium text-[#0071e3] transition hover:bg-[#0071e3]/10"
              >
                {t.ctaBook}
              </a>
            </div>
            <div className="mx-auto mt-12 max-w-4xl">
              <Image
                src={products[0]?.image ?? "/images/hero/frame-009.jpg"}
                alt={(products[0] && productLocale[products[0].id]?.name) ?? "Featured product"}
                width={900}
                height={620}
                priority
                className="w-full rounded-3xl border border-zinc-200 object-cover shadow-xl shadow-zinc-400/20"
              />
            </div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-10">
            <p className="text-xs tracking-[0.3em] text-zinc-400">{t.productsLabel}</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              {t.productsHeading}
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-300">
              {t.productsDesc}
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
                  alt={productLocale[item.id]?.name ?? item.name}
                  width={800}
                  height={520}
                  className="mb-4 h-44 w-full rounded-xl border border-white/10 object-cover"
                />
                <p className="text-xs tracking-[0.2em] text-zinc-400">
                  {productLocale[item.id]?.category ?? item.category}
                </p>
                <h3 className="mt-2 text-base font-semibold">
                  {productLocale[item.id]?.name ?? item.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-300">{item.brand}</p>
                <p className="mt-3 inline-block rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                  {productLocale[item.id]?.status ?? item.status}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="border-y border-white/10 bg-zinc-900/50 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs tracking-[0.3em] text-zinc-400">{t.aboutLabel}</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              {t.aboutHeading}
            </h2>
            <p className="mt-5 text-zinc-300">{t.aboutP1}</p>
            <p className="mt-4 text-zinc-300">{t.aboutP2}</p>
            <p className="mt-4 text-zinc-300">{t.aboutP3}</p>
            <p className="mt-4 text-zinc-300">{t.aboutP4}</p>
            <p className="mt-4 text-zinc-100">{t.aboutP5}</p>
          </div>

          <div className="mt-10 border-y border-white/10 bg-black/20 py-4">
            <div className="hero-rail-track">
              {[...aboutFrames, ...aboutFrames, ...aboutFrames].map((frame, index) => (
                <div key={`${frame}-${index}`} className="hero-rail-item">
                  <Image
                    src={frame}
                    alt="Pritika Camera Center memories and achievements"
                    width={360}
                    height={220}
                    className="h-28 w-44 rounded-xl border border-white/10 object-cover md:h-36 md:w-60"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="border-y border-white/10 bg-zinc-900/40 px-6 py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-xs tracking-[0.3em] text-zinc-400">{t.servicesLabel}</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              {t.servicesHeading}
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-300">
              {t.servicesDesc}
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
                  <h3 className="font-semibold">
                    {serviceLocale[service.title]?.title ?? service.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-300">
                    {serviceLocale[service.title]?.description ?? service.description}
                  </p>
                  <p className="mt-4 text-xs font-semibold tracking-[0.18em] text-orange-300">
                    {t.bookServiceCta}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="service-booking" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <p className="text-xs tracking-[0.3em] text-zinc-400">{t.bookingLabel}</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              {t.bookingHeading}
            </h2>
            <p className="mt-3 text-sm text-zinc-300">
              {t.storeHoursLine}
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
                  {t.fieldService}
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
                      {serviceLocale[title]?.title ?? title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="booking-name" className="mb-2 block text-sm text-zinc-300">
                  {t.fieldFullName}
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
                  {t.fieldPhone}
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
                  {t.fieldAddress}
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
                  {t.fieldDate}
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
                  {t.fieldSlot}
                </label>
                <select
                  id="visit-slot"
                  name="preferred_time_slot"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-white/15 bg-zinc-950 px-4 py-3 text-sm outline-none ring-orange-500 focus:ring-2"
                >
                  <option value="" disabled>
                    {t.selectSlot}
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
                  {t.bookVisitBtn}
                </button>
              </div>
            </form>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-orange-500/20 to-sky-500/20 p-8 md:p-10">
            <p className="text-xs tracking-[0.3em] text-zinc-300">{t.contactLabel}</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              {t.contactHeading}
            </h2>
            <div className="mt-6 space-y-2 text-zinc-200">
              <p>Phone: {contact.phoneDisplay}</p>
              <p>Email: {contact.email}</p>
              <p>{t.contactLocation}</p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${contact.phoneDial}`}
                className="rounded-full bg-white px-7 py-3 text-center font-semibold text-zinc-950 hover:bg-zinc-200"
              >
                {t.callNow}
              </a>
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 px-7 py-3 text-center font-semibold hover:bg-white/10"
              >
                {t.whatsappChat}
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs tracking-[0.3em] text-zinc-400">
                {t.quickMessageLabel}
              </p>
              <h3 className="mt-2 text-2xl font-semibold">{t.quickMessageHeading}</h3>
              <p className="mt-3 text-sm text-zinc-300">
                {t.quickMessageDesc}{" "}
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
                  placeholder={t.placeholderName}
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
                  placeholder={t.placeholderPhone}
                  className="w-full rounded-lg border border-white/15 bg-zinc-950 px-4 py-3 text-sm outline-none ring-orange-500 placeholder:text-zinc-500 focus:ring-2"
                />
                <textarea
                  required
                  name="message"
                  rows={5}
                  minLength={10}
                  maxLength={600}
                  autoComplete="off"
                  placeholder={t.placeholderMessage}
                  className="w-full rounded-lg border border-white/15 bg-zinc-950 px-4 py-3 text-sm outline-none ring-orange-500 placeholder:text-zinc-500 focus:ring-2"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-orange-500 px-6 py-3 text-center font-semibold text-zinc-950 transition hover:bg-orange-400"
                >
                  {t.sendInquiryBtn}
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
                  {t.mapDirections}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-zinc-400">
          <p>Copyright {new Date().getFullYear()} Pritika Camera Center</p>
          <p>{t.footerTagline}</p>
          <p>{t.footerHours}</p>
        </div>
      </footer>
    </div>
  );
}
