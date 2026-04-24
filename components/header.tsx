'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'Beschikbare sloepen', href: '/beschikbare-sloepen' },
  { label: 'Technologie', href: '/technologie' },
  { label: 'Nieuws', href: '/nieuws' },
  { label: 'Contact', href: '/contact' },
]

const sloepLinks = [
  { label: 'Commodore 570 Tender', href: '/sloepen/commodore-570-tender' },
  { label: 'QWEST S580', href: '/sloepen/qwest-s580' },
  { label: 'Coastliner 620', href: '/sloepen/coastliner-620' },
  { label: 'Corsiva 570', href: '/sloepen/corsiva-570' },
  { label: 'Rinovatio 570', href: '/sloepen/rinovatio-570' },
  { label: 'Aqua 630 Tender', href: '/sloepen/aqua-630-tender' },
  { label: 'Silver 655 Tender', href: '/sloepen/silver-655-tender' },
  { label: 'Aqua T700 Tender', href: '/sloepen/aqua-t700-tender' },
  { label: 'DOCK 650 Steel', href: '/sloepen/dock-650-steel' },
  { label: 'Solara 450', href: '/sloepen/solara-450' },
]

export default function Header() {
  const [menuGeopend, setMenuGeopend] = useState(false)
  const [sloepsGeopend, setSloepsGeopend] = useState(false)

  return (
    <header id="site-header" className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        <Link href="/" id="nav-logo" className="flex items-center gap-2 font-display font-semibold text-lg tracking-tight">
          <img
            src="https://static.wixstatic.com/media/af5e69_54979cdb1ba34c1b9b07a483176a68f1~mv2.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/battery%20cell%20logo_edited.png"
            alt="Elektrisch Varen Zonder Laden logo"
            width={28}
            height={28}
            className="w-7 h-7"
          />
          <span className="hidden sm:inline text-foreground">Elektrisch Varen Zonder Laden</span>
          <span className="sm:hidden text-foreground">EVZL</span>
        </Link>

        {/* Desktop nav */}
        <nav id="nav-primary" className="hidden lg:flex items-center gap-8">
          {mainNav.map((item) => {
            if (item.href === '/beschikbare-sloepen') {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setSloepsGeopend(true)}
                  onMouseLeave={() => setSloepsGeopend(false)}
                >
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </Link>
                  {sloepsGeopend && (
                    <div className="absolute left-0 top-full pt-3 w-64">
                      <div className="bg-card border border-border rounded-lg shadow-lg py-2">
                        {sloepLinks.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors duration-200"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            id="btn-header-contact"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-secondary transition-colors duration-200"
          >
            Neem contact op
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          id="btn-mobile-toggle"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMenuGeopend(!menuGeopend)}
          aria-label={menuGeopend ? 'Menu sluiten' : 'Menu openen'}
        >
          {menuGeopend ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuGeopend && (
        <nav id="nav-mobile" className="lg:hidden border-t border-border bg-background">
          <div className="container-wide py-4 flex flex-col gap-1">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuGeopend(false)}
                className="py-2 text-base text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-border">
              <p className="text-xs uppercase tracking-wider text-muted-foreground py-2">Modellen</p>
              {sloepLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMenuGeopend(false)}
                  className="block py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              onClick={() => setMenuGeopend(false)}
              className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium"
            >
              Neem contact op
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}