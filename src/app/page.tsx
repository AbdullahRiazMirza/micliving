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
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              ML
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight">
                Mic Living
              </span>
              <span className="text-xs text-muted-foreground">
                Kitchen Cabinetry
              </span>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link href="#categories" className="text-muted-foreground hover:text-foreground">
              Categories
            </Link>
            <Link href="#gallery" className="text-muted-foreground hover:text-foreground">
              Gallery
            </Link>
            <Link href="#about" className="text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground">
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
            <Card className="group relative flex cursor-pointer flex-col overflow-hidden border-muted/70">
              <div className="relative aspect-[4/5]">
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
            <Card className="group relative flex cursor-pointer flex-col overflow-hidden border-muted/70">
              <div className="relative aspect-[4/5]">
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
            <Card className="group relative flex cursor-pointer flex-col overflow-hidden border-muted/70">
              <div className="relative aspect-[4/5]">
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
                label: "Entertainer&apos;s island bench",
              },
            ].map((item) => (
              <figure
                key={item.src}
                className="group relative overflow-hidden rounded-2xl border bg-muted"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="flex items-center justify-between px-4 py-3 text-xs text-muted-foreground">
                  <span>{item.label}</span>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-secondary-foreground">
                    Custom cabinetry
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="border-b py-10 md:py-14"
        >
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                From first sketch to final handle
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                Crafted for how you really live.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
                Every Mic Living kitchen starts with how you move, cook, and
                gather. We combine quiet, minimal cabinetry with thoughtful
                storage so your space feels calm, warm, and easy to live in day
                after day.
              </p>
            </div>
            <div className="grid gap-3 text-xs text-muted-foreground md:text-sm">
              <div className="flex items-center justify-between rounded-xl border bg-card px-4 py-3">
                <span>Cabinetry & installation by one team</span>
                <span className="font-medium text-foreground">End‑to‑end</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border bg-card px-4 py-3">
                <span>Ideal for renovations and new builds</span>
                <span className="font-medium text-foreground">Both</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border bg-card px-4 py-3">
                <span>Available for select surrounding areas</span>
                <span className="font-medium text-foreground">
                  Your city region
                </span>
              </div>
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
