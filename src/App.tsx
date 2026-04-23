import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/Home'
import ServicesPage from './pages/Services'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}
