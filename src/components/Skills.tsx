import { Badge } from "@/components/ui/badge"

export function Skills() {
    const skills = {
        "Languages": ["Python", "JavaScript", "SQL", "HTML", "CSS"],
        "Technologies": ["React", "Node.js", "Robot Framework", "Jenkins", "Tkinter", "WordPress", "Sydle One"],
        "Concepts": ["Artificial Intelligence", "Generative AI", "LLMs", "Genetic Algorithms", "CI/CD", "Database Optimization", "Research"],
        "Tools": ["LM Studio", "Gurobi", "Git", "GitHub"]
    }

    return (
        <section id="skills" className="container mx-auto py-24 sm:py-32">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">Skills</h2>
            <div className="mx-auto max-w-4xl space-y-8">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="space-y-4">
                        <h3 className="text-xl font-semibold text-muted-foreground">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-sm py-1 px-3 hover:bg-white/20 transition-colors cursor-default">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
