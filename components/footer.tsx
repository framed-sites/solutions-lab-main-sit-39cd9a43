import Link from 'next/link'
import { Mail, Phone, MapPin, Twitter } from 'lucide-react'

const footerNav = [
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
  { label: 'Silver 655 Tender', href: '/sloepen/silver-655-tender' },
  { label: 'Solara 450', href: '/sloepen/solara-450' },
]

export default function Footer() {
  return (
    <footer id="site-footer" className="bg-secondary text-secondary-foreground mt-24">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display font-semibold text-lg">
              <img
                src="https://static.wixstatic.com/media/af5e69_54979cdb1ba34c1b9b07a483176a68f1~mv2.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/battery%20cell%20logo_edited.png"
                alt="Elektrisch Varen Zonder Laden logo"
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <span>EVZL</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed opacity-90">
              Sloepen op zonne-energie. 100% uitstootvrij, stil en zorgeloos varen op Nederlands vaarwater — zonder walstroom of stopcontact.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://x.com/bolt-performance"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Volg ons op X"
                className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-secondary-foreground/30 hover:bg-primary hover:border-primary transition-colors duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider opacity-80">Navigatie</h3>
            <ul className="mt-4 space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent-foreground transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider opacity-80">Sloepen</h3>
            <ul className="mt-4 space-y-2">
              {sloepLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm opacity-90 hover:opacity-100 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider opacity-80">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+31622199699" className="hover:opacity-100 opacity-90 transition-colors duration-200">
                  +31 6 22 19 96 99
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@bossboating.nl" className="hover:opacity-100 opacity-90 transition-colors duration-200">
                  info@bossboating.nl
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">Westerwijzend 57<br />1616 LB Hoogkarspel</span>
              </li>
            </ul>
            <p className="mt-4 text-xs opacity-70">KvK: 92618847</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs opacity-80">
          <p>© {new Date().getFullYear()} Elektrisch Varen Zonder Laden — Solar powered by Boss Boating</p>
          <div className="flex items-center gap-4">
            <span>Algemene voorwaarden</span>
            <span>Privacy verklaring</span>
            <span>Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
