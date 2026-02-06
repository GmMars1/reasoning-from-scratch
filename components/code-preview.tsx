export function CodePreview() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Hands-On Code
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every concept is accompanied by real, runnable Python code
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
              <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
              <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
            </div>
            <span className="ml-2 text-xs text-muted-foreground font-mono">
              ch04_main.py
            </span>
          </div>
          <pre className="overflow-x-auto p-6 text-sm leading-relaxed font-mono">
            <code>
              <span className="text-muted-foreground">{"# Chain-of-thought prompting for improved reasoning"}</span>
              {"\n"}
              <span className="text-primary">{"def"}</span>
              <span className="text-foreground">{" cot_prompt"}</span>
              <span className="text-muted-foreground">{"(question, model):"}</span>
              {"\n"}
              <span className="text-foreground">{"    prompt = ("}</span>
              {"\n"}
              <span className="text-green-400">{'        "Think step by step.\\n"'}</span>
              {"\n"}
              <span className="text-green-400">{'        f"Question: {question}\\n"'}</span>
              {"\n"}
              <span className="text-green-400">{'        "Answer:"'}</span>
              {"\n"}
              <span className="text-foreground">{"    )"}</span>
              {"\n\n"}
              <span className="text-foreground">{"    response = model.generate("}</span>
              {"\n"}
              <span className="text-foreground">{"        prompt,"}</span>
              {"\n"}
              <span className="text-foreground">{"        max_new_tokens="}</span>
              <span className="text-primary">{"512"}</span>
              <span className="text-foreground">{","}</span>
              {"\n"}
              <span className="text-foreground">{"        temperature="}</span>
              <span className="text-primary">{"0.7"}</span>
              {"\n"}
              <span className="text-foreground">{"    )"}</span>
              {"\n"}
              <span className="text-primary">{"    return"}</span>
              <span className="text-foreground">{" response"}</span>
            </code>
          </pre>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-foreground">8+</div>
            <div className="mt-1 text-xs text-muted-foreground">Chapters</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-foreground">Qwen3</div>
            <div className="mt-1 text-xs text-muted-foreground">Base Model</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-foreground">MATH-500</div>
            <div className="mt-1 text-xs text-muted-foreground">Benchmark</div>
          </div>
        </div>
      </div>
    </section>
  )
}
