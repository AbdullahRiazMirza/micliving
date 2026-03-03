"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#categories", label: "Categories" },
  { href: "#gallery", label: "Gallery" },
  { href: "#why-choose-us", label: "Why us" },
  { href: "#contact", label: "Contact" },
] as const;

const SWIPE_CLOSE_THRESHOLD = 60;
const DRAWER_DURATION_MS = 300;

export function MobileNavDrawer() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [closed, setClosed] = useState(true);
  const drawerTouchStart = useRef<{ x: number } | null>(null);

  useEffect(() => {
    setMounted(typeof document !== "undefined");
  }, []);

  useEffect(() => {
    if (open) {
      setClosed(false);
    } else {
      const t = setTimeout(() => setClosed(true), DRAWER_DURATION_MS);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleDrawerTouchStart = useCallback((e: React.TouchEvent) => {
    drawerTouchStart.current = { x: e.targetTouches[0].clientX };
  }, []);

  const handleDrawerTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!drawerTouchStart.current) return;
    const x = e.changedTouches[0].clientX;
    const dx = x - drawerTouchStart.current.x;
    if (dx <= -SWIPE_CLOSE_THRESHOLD) setOpen(false);
    drawerTouchStart.current = null;
  }, []);

  const overlayAndDrawer = (
    <>
      <div
        role="presentation"
        className={cn(
          "fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ease-out md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden
        onClick={() => setOpen(false)}
      />
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-full flex-col border-l border-border bg-background shadow-xl transition-[transform] duration-300 ease-out md:hidden",
          open ? "translate-x-0" : "translate-x-full",
          !open && closed && "pointer-events-none invisible"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!open}
        onTouchStart={open ? handleDrawerTouchStart : undefined}
        onTouchEnd={open ? handleDrawerTouchEnd : undefined}
        onTouchCancel={() => { drawerTouchStart.current = null; }}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4">
          <span className="text-sm font-semibold text-foreground">Menu</span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="size-5" />
          </Button>
        </div>
        <nav className="flex flex-col gap-1 p-4" aria-label="Main">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="shrink-0 md:hidden"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="size-5" />
      </Button>
      {mounted && createPortal(overlayAndDrawer, document.body)}
    </>
  );
}
