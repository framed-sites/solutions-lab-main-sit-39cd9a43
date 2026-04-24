'use client'

import { useState } from 'react'
import { Send, CheckCircle2, Loader2 } from 'lucide-react'

interface ContactFormProps {
  defaultSubject?: string
  sloopOptions?: string[]
}

// Standaard beschikbare sloepen uit het assortiment
const STANDAARD_SLOEP_OPTIES = [
  'Commodore 570 Tender',
  'QWEST S580',
  'Coastliner 620',
  'Corsiva 570',
  'Rinovatio 570',
  'Aqua 630 Tender',
  'Silver 655 Tender',
  'Aqua T700 Tender',
  'DOCK 650 Steel',
  'Solara 450'
]

export default function ContactForm({ defaultSubject, sloopOptions }: ContactFormProps) {
  // State voor het bijhouden van formulier status
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  // Gebruik meegegeven opties of de standaard lijst met beschikbare sloepen
  const beschikbareSloepen = sloopOptions && sloopOptions.length > 0 ? sloopOptions : STANDAARD_SLOEP_OPTIES

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        voornaam: formData.get('firstname'),
        achternaam: formData.get('lastname'),
        email: formData.get('email'),
        sloep: formData.get('sloep'),
        bericht: formData.get('message'),
      }
      
      // Verzend het formulier naar de contact API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      if (!response.ok) {
        throw new Error('Verzenden mislukt')
      }
      
      setIsSubmitted(true)
    } catch (err) {
      setError('Er is iets misgegaan bij het verzenden. Probeer het later opnieuw.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-accent border border-border rounded-lg p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
        <h3 className="mt-4 font-display text-xl font-semibold text-foreground">Bedankt voor uw bericht</h3>
        <p className="mt-2 text-muted-foreground">We nemen zo spoedig mogelijk contact met u op.</p>
      </div>
    )
  }

  return (
    <form id="form-contact" onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="input-firstname" className="block text-sm font-medium text-foreground mb-2">
            Voornaam
          </label>
          <input
            id="input-firstname"
            name="firstname"
            type="text"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-200 disabled:opacity-50"
            placeholder="Uw voornaam"
          />
        </div>
        <div>
          <label htmlFor="input-lastname" className="block text-sm font-medium text-foreground mb-2">
            Achternaam
          </label>
          <input
            id="input-lastname"
            name="lastname"
            type="text"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-200 disabled:opacity-50"
            placeholder="Uw achternaam"
          />
        </div>
      </div>

      <div>
        <label htmlFor="input-email" className="block text-sm font-medium text-foreground mb-2">
          E-mail
        </label>
        <input
          id="input-email"
          name="email"
          type="email"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-200 disabled:opacity-50"
          placeholder="uw@email.nl"
        />
      </div>

      {beschikbareSloepen.length > 0 && (
        <div>
          <label htmlFor="input-sloep" className="block text-sm font-medium text-foreground mb-2">
            Interesse in sloep
          </label>
          <select
            id="input-sloep"
            name="sloep"
            defaultValue={defaultSubject ?? ''}
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-200 disabled:opacity-50"
          >
            <option value="">Maak een keuze</option>
            {beschikbareSloepen.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
            <option value="algemeen">Algemene vraag</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor="input-message" className="block text-sm font-medium text-foreground mb-2">
          Bericht
        </label>
        <textarea
          id="input-message"
          name="message"
          rows={5}
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-200 resize-y disabled:opacity-50"
          placeholder="Vertel ons over uw vaarwensen..."
        />
      </div>

      {error && (
        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive text-destructive text-sm">
          {error}
        </div>
      )}

      <button
        id="btn-submit-contact"
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-secondary transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Bezig met verzenden...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Verzenden
          </>
        )}
      </button>
    </form>
  )
}