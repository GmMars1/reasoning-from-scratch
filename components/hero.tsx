import { BookOpen, Github, ExternalLink } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex flex-col items-center px-6 pb-24 pt-32 text-center">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
        <BookOpen className="h-4 w-4 text-primary" />
        New Book by Sebastian Raschka
      </span>

      <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
        Build a Reasoning Model{" "}
        <span className="text-primary">(From Scratch)</span>
      </h1>

      <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
        Learn how LLM reasoning models work by building one yourself. Start with
        a pre-trained base LLM and add reasoning capabilities step by step in
        code.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <a
          href="https://mng.bz/lZ5B"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <ExternalLink className="h-4 w-4" />
          Get the Book
        </a>
        <a
          href="https://github.com/rasbt/reasoning-from-scratch"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          <Github className="h-4 w-4" />
          View on GitHub
        </a>
      </div>
    </section>
  )
}
