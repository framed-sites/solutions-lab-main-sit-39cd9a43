import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="text-lg font-semibold text-foreground">
              Solutions Lab
            </Link>
            <p className="text-sm text-muted-foreground">
              &copy; 2026 Solutions Lab. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
