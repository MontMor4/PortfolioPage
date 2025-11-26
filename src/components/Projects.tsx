import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card"
import { ExternalLink } from "lucide-react"

const projects = [
    {
        title: "Hybrid NSGA-III",
        description: "Evolutionary algorithms for multi-objective optimization.",
        details: "A comprehensive study improving the NSGA-III algorithm by integrating local search heuristics. The hybrid approach demonstrated superior convergence and diversity on standard benchmark test suites compared to the original algorithm. This study involved extensive experimentation with various mutation and crossover operators to fine-tune the algorithm's performance. The results showed a significant improvement in hypervolume and inverted generational distance metrics, making it a viable candidate for solving complex real-world multi-objective optimization problems.",
        tags: ["AI", "Genetic Algorithms", "Optimization", "Research", "NSGA-III"],
        link: "#"
    },
    {
        title: "Vehicle Routing Problem",
        description: "Capacitated VRP solver using Gurobi and Genetic Algorithms.",
        details: "Solved the Capacitated Vehicle Routing Problem (CVRP) by implementing and comparing two distinct approaches: an exact method using the Gurobi solver and a metaheuristic approach using Genetic Algorithms. The study analyzed trade-offs between solution quality and computational time.",
        tags: ["Gurobi", "Genetic Algorithms", "Graph Optimization", "Python"],
        link: "#"
    },
    {
        title: "AI Chatbot Assistant",
        description: "Intelligent conversational agent built with LLMs and RAG.",
        details: "Built a context-aware chatbot using LangChain and OpenAI's GPT models. Implemented Retrieval-Augmented Generation (RAG) to allow the bot to answer questions based on custom document knowledge bases with high accuracy.",
        tags: ["GenAI", "LLM", "RAG", "Python", "React"],
        link: "#"
    },
    {
        title: "E-commerce API",
        description: "Scalable microservices architecture for online retail.",
        details: "Designed a robust backend for a high-traffic e-commerce platform. Utilized Docker and Kubernetes for container orchestration, ensuring high availability and seamless scaling during peak traffic periods.",
        tags: ["Node.js", "Microservices", "Docker", "Kubernetes"],
        link: "#"
    },
    {
        title: "Portfolio V1",
        description: "First iteration of my personal portfolio using vanilla JS.",
        details: "My initial step into web development. Built a responsive portfolio from scratch without frameworks to deeply understand the DOM, CSS Grid/Flexbox, and modern JavaScript ES6+ features.",
        tags: ["HTML", "CSS", "JavaScript", "Frontend"],
        link: "" // Removed link to test conditional rendering
    },
    {
        title: "Data Viz Dashboard",
        description: "Interactive dashboard for visualizing complex datasets.",
        details: "Created a dynamic dashboard for visualizing large-scale datasets. leveraged D3.js for custom charts and React for state management, enabling users to filter and explore data in real-time.",
        tags: ["D3.js", "React", "Data Visualization", "Analytics"],
        link: "#"
    },
    {
        title: "Smart Home Hub",
        description: "IoT platform for managing connected home devices.",
        details: "Developed a centralized hub to control various smart home devices via MQTT protocol. The system runs on a Raspberry Pi and features a web interface for remote monitoring and automation scheduling.",
        tags: ["IoT", "MQTT", "Raspberry Pi", "Python"],
        link: "#"
    },
    {
        title: "Crypto Tracker",
        description: "Real-time cryptocurrency price tracker and portfolio manager.",
        details: "A real-time financial tracking application that consumes CoinGecko API. Features include live price updates via WebSockets, portfolio value calculation, and historical price charting.",
        tags: ["React", "Web3", "API Integration", "Finance"],
        link: "#"
    },
    {
        title: "Task Management App",
        description: "Collaborative task manager with real-time updates.",
        details: "Built a Trello-like task management tool supporting real-time collaboration. Users can create boards, drag-and-drop tasks, and see updates instantly across devices using Firebase Realtime Database.",
        tags: ["Vue.js", "Firebase", "Real-time", "Productivity"],
        link: "#"
    },
    {
        title: "Image Generator",
        description: "AI-powered image generation tool using Stable Diffusion.",
        details: "Integrated Stable Diffusion models into a user-friendly web interface. Allows users to generate artistic images from text prompts, featuring adjustable parameters like guidance scale and seed control.",
        tags: ["AI", "Stable Diffusion", "Python", "Gradio"],
        link: "#"
    }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <div className="w-[350px] h-[220px] relative shrink-0 mx-4 group/card perspective-1000">
        <Card className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-card/50 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-500 ease-out hover:w-[400px] hover:h-auto hover:z-50 hover:shadow-2xl hover:bg-card/95 overflow-hidden flex flex-col">
            <CardHeader>
                <CardTitle className="text-xl font-bold text-white group-hover/card:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2 group-hover/card:line-clamp-none transition-all duration-300">
                    {project.description}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 flex-grow">
                <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-secondary/50 text-xs">
                            {tag}
                        </Badge>
                    ))}
                    {project.tags.length > 3 && (
                        <Badge variant="secondary" className="bg-secondary/50 text-xs group-hover/card:hidden">
                            +{project.tags.length - 3}
                        </Badge>
                    )}
                    {/* Show all tags on hover */}
                    {project.tags.slice(3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-secondary/50 text-xs hidden group-hover/card:inline-flex">
                            {tag}
                        </Badge>
                    ))}
                </div>

                {/* Expanded Content */}
                <div className="h-0 opacity-0 group-hover/card:h-auto group-hover/card:opacity-100 transition-all duration-500 delay-100 flex flex-col gap-4">
                    <div className="max-h-[150px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.details}
                        </p>
                    </div>

                    {project.link && project.link !== "#" && project.link !== "" && (
                        <Button size="sm" className="w-full gap-2" asChild>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4" />
                                View Project
                            </a>
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    </div>
);

export function Projects() {
    const firstRow = projects.slice(0, 5);
    const secondRow = projects.slice(5, 10);

    return (
        <section id="projects" className="py-24 overflow-hidden relative">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Featured <span className="text-zinc-500">Projects</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    A showcase of my technical work and experiments.
                </p>
            </div>

            <div className="flex flex-col gap-12">
                {/* Top Row - Marquee Left */}
                <div className="relative w-full overflow-visible group z-10 hover:z-40 transition-all duration-300">
                    <div className="flex w-max animate-marquee-left group-hover:paused">
                        {[...firstRow, ...firstRow, ...firstRow, ...firstRow].map((project, index) => (
                            <ProjectCard key={`row1-${index}`} project={project} />
                        ))}
                    </div>
                </div>

                {/* Bottom Row - Marquee Right */}
                <div className="relative w-full overflow-visible group z-10 hover:z-40 transition-all duration-300">
                    <div className="flex w-max animate-marquee-right group-hover:paused">
                        {[...secondRow, ...secondRow, ...secondRow, ...secondRow].map((project, index) => (
                            <ProjectCard key={`row2-${index}`} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
