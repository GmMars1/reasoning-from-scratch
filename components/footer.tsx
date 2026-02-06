import { Github, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-foreground">
            Build a Reasoning Model (From Scratch)
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            By Sebastian Raschka &middot; Manning Publications &middot; ISBN 9781633434677
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/rasbt/reasoning-from-scratch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub Repository"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://mng.bz/lZ5B"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Manning Publications"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Manning</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
