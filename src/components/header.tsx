import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from './ui/sheet'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="text-xl font-bold text-foreground">
          Solutions Lab
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Home</Link>
          <Link to="/services" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Services</Link>
          <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Contact</Link>
        </nav>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Solutions Lab</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col space-y-1">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary transition-colors">Home</Link>
              <Link to="/services" className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary transition-colors">Services</Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary transition-colors">Contact</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
