import { Hero } from "@/components/hero"
import { Chapters } from "@/components/chapters"
import { Techniques } from "@/components/techniques"
import { CodePreview } from "@/components/code-preview"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Chapters />
      <Techniques />
      <CodePreview />
      <Footer />
    </main>
  )
}
