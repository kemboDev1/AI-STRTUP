import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import Features from '@/sections/Features'
import Demo from '@/sections/Demo'
import Pricing from '@/sections/Pricing'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Demo />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
