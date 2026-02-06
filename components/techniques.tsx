export function Techniques() {
  const techniques = [
    {
      label: "Chain-of-Thought",
      description: "Prompt models to reason step by step before answering",
    },
    {
      label: "Self-Consistency",
      description: "Sample multiple reasoning paths and select the majority answer",
    },
    {
      label: "Best-of-N Sampling",
      description: "Generate N solutions and pick the highest-scoring candidate",
    },
    {
      label: "Self-Refinement",
      description: "Iteratively improve answers through model self-critique",
    },
    {
      label: "GRPO",
      description: "Group Relative Policy Optimization for reinforcement learning training",
    },
    {
      label: "Distillation",
      description: "Transfer reasoning ability from large models to smaller ones",
    },
  ]

  return (
    <section className="border-y border-border bg-card/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Key Techniques Covered
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The methods behind DeepSeek R1, GPT-5 Thinking, and modern reasoning models
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techniques.map((technique) => (
            <div
              key={technique.label}
              className="flex flex-col rounded-xl border border-border bg-background p-6"
            >
              <h3 className="mb-2 font-mono text-sm font-semibold text-primary">
                {technique.label}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {technique.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
