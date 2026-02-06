import { FileText, Code2, FlaskConical, Brain, Zap, Layers, GraduationCap, BarChart3 } from "lucide-react"

const chapters = [
  {
    number: "01",
    title: "Understanding Reasoning Models",
    description: "Explore the foundations of LLM reasoning and what makes these models different.",
    icon: Brain,
    hasCode: false,
  },
  {
    number: "02",
    title: "Generating Text with a Pre-trained LLM",
    description: "Load and run a pre-trained Qwen3 model to generate text and understand its architecture.",
    icon: FileText,
    hasCode: true,
  },
  {
    number: "03",
    title: "Evaluating Reasoning Models",
    description: "Build evaluation tools using MATH-500 benchmarks to measure reasoning capabilities.",
    icon: BarChart3,
    hasCode: true,
  },
  {
    number: "04",
    title: "Inference-Time Scaling",
    description: "Improve reasoning at inference time using chain-of-thought prompting and self-consistency.",
    icon: Zap,
    hasCode: true,
  },
  {
    number: "05",
    title: "Self-Refinement Scaling",
    description: "Implement best-of-N sampling, self-consistency scoring, and iterative self-refinement.",
    icon: FlaskConical,
    hasCode: true,
  },
  {
    number: "06",
    title: "Training with Reinforcement Learning",
    description: "Apply RLVR and GRPO to train reasoning capabilities directly into the model.",
    icon: GraduationCap,
    hasCode: true,
  },
  {
    number: "07",
    title: "Advanced Policy Optimization",
    description: "Improve reinforcement learning with advanced policy optimization techniques.",
    icon: Layers,
    hasCode: true,
  },
  {
    number: "08",
    title: "Distilling Reasoning Models",
    description: "Distill reasoning capabilities into smaller, more efficient models.",
    icon: Code2,
    hasCode: false,
  },
]

export function Chapters() {
  return (
    <section className="px-6 py-24" id="chapters">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What You Will Learn
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A complete journey from pre-trained LLMs to fully functioning reasoning models
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {chapters.map((chapter) => {
            const Icon = chapter.icon
            return (
              <div
                key={chapter.number}
                className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30 hover:bg-card/80"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-primary font-mono">
                    Ch {chapter.number}
                  </span>
                  {chapter.hasCode && (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                      Code
                    </span>
                  )}
                </div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">
                  {chapter.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {chapter.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
