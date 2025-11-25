import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Projects() {
    const projects = [
        {
            title: "Research Paper: Hybrid Version of NSGA-III Algorithm",
            description: [
                "Improved efficiency and performance of the original NSGA-III algorithm through hybridization.",
                "Conducted extensive experiments to validate the proposed modifications across various optimization scenarios.",
                "Extensive studies in artificial intelligence, genetic algorithms, as well as thorough investigations into multi-objective optimization problems.",
                "Research results published in the SBMAC proceedings."
            ],
            tags: ["AI", "Genetic Algorithms", "Optimization", "Research", "NSGA-III"],
            link: "#" // Placeholder as link wasn't extracted from image text directly but mentioned as [Paper link]
        },
        {
            title: "Capacitated Vehicle Routing Problem Article",
            description: [
                "Implemented two approaches: one using Gurobi (a solver) and the other using Genetic Algorithm Optimization (a metaheuristic).",
                "Evaluated the performance of both approaches using real-world datasets to compare their effectiveness in a graph optimization problem.",
                "Demonstrated that Genetic Algorithms find high-quality solutions in a reasonable time frame, making them ideal for complex scenarios where Gurobi's optimal solutions may be too slow."
            ],
            tags: ["Gurobi", "Genetic Algorithms", "Graph Optimization", "Python"],
            link: null
        }
    ]

    return (
        <section id="projects" className="container mx-auto py-24 sm:py-32">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 mx-auto max-w-5xl">
                {projects.map((project, index) => (
                    <Card key={index} className="bg-card/50 backdrop-blur-sm border-white/10 flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="text-xs">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground text-sm">
                                {project.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
