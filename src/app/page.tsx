import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HeroCarousel } from "@/components/hero-carousel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="#hero" className="flex items-center gap-2">
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight text-foreground">
                MIC
                <span className="ml-0.5 inline-block h-1.5 w-1.5 rounded-full bg-primary align-middle" aria-hidden title="." />
              </span>
              <span className="text-xs font-medium text-primary">
                Premium Cabinets
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link
              href="#categories"
              className="text-muted-foreground transition-colors hover:font-bold hover:text-foreground hover:underline hover:underline-offset-4"
            >
              Categories
            </Link>
            <Link
              href="#gallery"
              className="text-muted-foreground transition-colors hover:font-bold hover:text-foreground hover:underline hover:underline-offset-4"
            >
              Gallery
            </Link>
            <Link
              href="#why-choose-us"
              className="text-muted-foreground transition-colors hover:font-bold hover:text-foreground hover:underline hover:underline-offset-4"
            >
              Why us
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground transition-colors hover:font-bold hover:text-foreground hover:underline hover:underline-offset-4"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden md:inline-flex">
              <Link href="#contact">Book a consultation</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Full-width hero carousel — outside main for edge-to-edge */}
      <section id="hero" className="w-full">
        <HeroCarousel />
      </section>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-12 md:px-6 md:pb-24 md:pt-16">
        {/* Shop by category */}
        <section
          id="categories"
          className="border-b pb-10 md:pb-14"
        >
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Shop by category
              </h2>
              <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                A visual overview of how we build your kitchen.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="group relative aspect-[4/5] w-full cursor-pointer overflow-hidden border-muted/70 p-0">
              <div className="absolute inset-0">
                <Image
                  src="/images/kam-idris-vqMQN9zImG4-unsplash.jpg"
                  alt="Modern minimalist kitchen cabinetry"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <CardHeader className="absolute inset-x-0 bottom-0 border-t border-border/60 bg-gradient-to-t from-background/95 via-background/80 to-transparent pb-4 pt-10">
                <CardTitle className="text-base">Modern Kitchens</CardTitle>
                <CardContent className="p-0 pt-1 text-xs text-muted-foreground">
                  Handle‑less doors, clean lines, integrated storage.
                </CardContent>
              </CardHeader>
            </Card>
            <Card className="group relative aspect-[4/5] w-full cursor-pointer overflow-hidden border-muted/70 p-0">
              <div className="absolute inset-0">
                <Image
                  src="/images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg"
                  alt="Classic shaker-style kitchen cabinetry"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <CardHeader className="absolute inset-x-0 bottom-0 border-t border-border/60 bg-gradient-to-t from-background/95 via-background/80 to-transparent pb-4 pt-10">
                <CardTitle className="text-base">Classic Shaker</CardTitle>
                <CardContent className="p-0 pt-1 text-xs text-muted-foreground">
                  Framed doors and warm, timeless profiles.
                </CardContent>
              </CardHeader>
            </Card>
            <Card className="group relative aspect-[4/5] w-full cursor-pointer overflow-hidden border-muted/70 p-0">
              <div className="absolute inset-0">
                <Image
                  src="/images/clay-elliot-1by_GbwEMwc-unsplash.jpg"
                  alt="Pantry and kitchen storage cabinetry"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <CardHeader className="absolute inset-x-0 bottom-0 border-t border-border/60 bg-gradient-to-t from-background/95 via-background/80 to-transparent pb-4 pt-10">
                <CardTitle className="text-base">Pantry & Storage</CardTitle>
                <CardContent className="p-0 pt-1 text-xs text-muted-foreground">
                  Pull‑outs, tall pantries, and hidden organisation.
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Gallery */}

        <section
          id="gallery"
          className="border-b py-10 md:py-14"
        >
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Recent kitchens
              </h2>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                A quick look at the kind of spaces we create.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {[
              {
                src: "/images/christian-mackie-cc0Gg3BegjE-unsplash.jpg",
                label: "Northside townhouse",
              },
              {
                src: "/images/jason-briscoe-GliaHAJ3_5A-unsplash.jpg",
                label: "Family entertainer",
              },
              {
                src: "/images/julia-jylx7bVZMIk-unsplash.jpg",
                label: "Compact city kitchen",
              },
              {
                src: "/images/roam-in-color-zzMb7jacyBc-unsplash.jpg",
                label: "Light‑filled shaker kitchen",
              },
              {
                src: "/images/kam-idris-vqMQN9zImG4-unsplash.jpg",
                label: "Oak and stone palette",
              },
              {
                src: "/images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg",
                label: "Entertainer island bench",
              },
            ].map((item) => (
              <figure
                key={item.src}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-muted"
              >
                <div className="absolute inset-0">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-background/90 to-transparent px-4 py-3 text-xs text-muted-foreground">
                  <span>{item.label}</span>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-secondary-foreground">
                    Custom cabinetry
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section
          id="stats"
          className="border-b py-10 md:py-14"
        >
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                500+
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground md:text-sm">
                Kitchens delivered
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                10+
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground md:text-sm">
                Years in cabinetry
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                1
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground md:text-sm">
                Team, start to finish
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                Local
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground md:text-sm">
                Designed & built in your area
              </p>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section
          id="why-choose-us"
          className="border-b py-10 md:py-14"
        >
          <div className="mb-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Why MIC.
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Why choose us
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              We focus on what matters: one team, clear process, and cabinetry built to last.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border bg-card p-5 md:p-6">
              <h3 className="text-base font-semibold text-foreground">
                One team, start to finish
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                From measure and design to build and install, one team owns your project—no handoffs, no mixed messages.
              </p>
            </div>
            <div className="rounded-2xl border bg-card p-5 md:p-6">
              <h3 className="text-base font-semibold text-foreground">
                Premium materials
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Moisture-resistant carcasses, soft-close hardware, and finishes that stand up to daily use and look better over time.
              </p>
            </div>
            <div className="rounded-2xl border bg-card p-5 md:p-6">
              <h3 className="text-base font-semibold text-foreground">
                Custom design, not one-size-fits-all
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every kitchen is different. We tailor layout, storage, and style to how you cook, gather, and live.
              </p>
            </div>
            <div className="rounded-2xl border bg-card p-5 md:p-6">
              <h3 className="text-base font-semibold text-foreground">
                Clear process & timeline
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Consult, design, build, install—with upfront timelines and no surprise delays. We keep you informed at every step.
              </p>
            </div>
            <div className="rounded-2xl border bg-card p-5 md:p-6">
              <h3 className="text-base font-semibold text-foreground">
                Built for your space
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We measure on site and work with your builder or architect so cabinetry fits perfectly and integrates with your plans.
              </p>
            </div>
            <div className="rounded-2xl border bg-card p-5 md:p-6">
              <h3 className="text-base font-semibold text-foreground">
                Warranty & support
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Structural warranty on cabinetry and support after install so your kitchen keeps performing for years.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="pt-12 md:pt-16"
        >
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Share your kitchen plans
              </h2>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground md:text-base">
                Tell us a little about your project and we&apos;ll be in touch
                within one business day to organise a call or in‑home visit.
              </p>
              <form
                className="mt-6 space-y-4"
                action="https://formspree.io/f/yourFormId"
                method="POST"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New Mic Living kitchen enquiry"
                />
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium text-muted-foreground"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Full name"
                      className="h-10"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium text-muted-foreground"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="h-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="suburb"
                    className="text-xs font-medium text-muted-foreground"
                  >
                    Suburb / area
                  </label>
                  <Input
                    id="suburb"
                      name="suburb"
                    placeholder="Your suburb or area"
                    className="h-10"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium text-muted-foreground"
                  >
                    Tell us about your project
                  </label>
                  <Textarea
                    id="message"
                      name="message"
                    placeholder="Renovation timing, rough kitchen size, any inspiration you have..."
                    rows={4}
                      required
                  />
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button type="submit" size="lg">
                    Send enquiry
                  </Button>
                  <p className="text-xs text-muted-foreground md:text-sm">
                    By submitting, you agree to be contacted about your
                    enquiry. No spam, ever.
                  </p>
                </div>
              </form>
            </div>
            <div className="space-y-6 rounded-2xl border bg-card p-5 text-sm text-muted-foreground md:p-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Contact details
                </h3>
                <p className="mt-2">
                  Phone: <span className="font-medium text-foreground">XX XXX XXX</span>
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:hello@micliving.com"
                    className="font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    hello@micliving.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Showroom / workshop
                </h3>
                <p className="mt-2">
                  Replace this with your address or note that you operate as a
                  mobile, in‑home consultancy.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Typical projects
                </h3>
                <p className="mt-2">
                  Full kitchen renovations, new‑build cabinetry packages, pantry
                  and laundry joinery, and select joinery to match existing
                  spaces.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
