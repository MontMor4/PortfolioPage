import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card"
import { ExternalLink, Trees } from "lucide-react"
import researchPaper from "../assets/research-paper-header.png"
import wordpressWebsite from "../assets/rede-memorial-wordpress-website.png"
import vehicleRoutingProblem from "../assets/vehicle-routing-problem.jpg"
import mlFraudDetection from "../assets/fraud-detection-kaggle-competition.jpg"
import personalWebsite from "../assets/personal-website.png"
import seapaWebsite from "../assets/seapa-website.png"
import automatedTestsTool from "../assets/automated-tests-tool.jpg"
import workInProgress from "../assets/work-in-progress.jpg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

interface Project {
    title: string;
    description: string;
    details: string | string[];
    tags: string[];
    link: string;
    image: string;
}

const projects: Project[] = [
    {
        title: "Published Research Paper",
        description: "Hybrid NSGA-III - Evolutionary algorithms for multi-objective optimization.",
        details: [
            "A comprehensive study improving the NSGA-III algorithm by integrating local search heuristics.",
            "The hybrid approach demonstrated superior convergence and diversity on standard benchmark test suites compared to the original algorithm.",
            "This study involved extensive experimentation with various mutation and crossover operators to fine-tune the algorithm's performance.",
            "The results showed a significant improvement in hypervolume and inverted generational distance metrics, making it a viable candidate for solving complex real-world multi-objective optimization problems."
        ],
        tags: ["AI", "Genetic Algorithms", "Optimization", "Research", "NSGA-III"],
        link: "https://proceedings.sbmac.org.br/sbmac/article/view/4548",
        image: researchPaper
    },
    {
        title: "Vehicle Routing Problem",
        description: "Research Paper: Capacitated VRP solver using Gurobi and Genetic Algorithms.",
        details: [
            "Implemented two approaches: one using Gurobi (a solver) and the other using Genetic Algorithm Optimization (a metaheuristic)",
            "Evaluated the performance of both approaches using real-world datasets to compare their effectiveness in a graph optimization problem",
            "Demonstrated that Genetic Algorithms find high-quality solutions in a reasonable time frame, making them ideal for complex scenarios where Gurobi's optimal solutions may be too slow"
        ],
        tags: ["Graphs", "Genetic Algorithms", "Optimization", "Python", "Gurobi"],
        link: "https://github.com/PedroVIOliv/trabalhoIA_ALGGEN_DRONE",
        image: vehicleRoutingProblem
    },
    {
        title: "Personal Website",
        description: "This personal portfolio website that you are right now ;D",
        details: "This is my personal portfolio website, built to showcase my projects and skills. It leverages modern web technologies like React, TypeScript, and Tailwind CSS for a responsive and interactive user experience, enhanced with Framer Motion for animations and ShadCN UI for components.",
        tags: ["React", "Vite", "TypeScript", "ShadCN UI", "Framer Motion", "Tailwind CSS"],
        link: "#",
        image: personalWebsite
    },
    {
        title: "ML Fraud Detection",
        description: "Kaggle competition: Credit Card Fraudulent Transactions Detection.",
        details: [
            "Developed a complete machine learning pipeline to predict fraudulent transactions using a large, real-world dataset from a Kaggle competition.",
            "Engineered and preprocessed a complex dataset with over 400 features, implementing strategies to handle high percentages of missing data, severe class imbalance, and mixed data types (numerical and categorical).",
            "Systematically evaluated and compared the performance of multiple classification models, including baseline Decision Trees, XGBoost, LightGBM, and Random Forest, using the ROC AUC metric.",
            "Achieved a competitive ROC AUC score of 0.93 on the Kaggle leaderboard by implementing a tuned Random Forest model.",
            "Experimented with advanced techniques such as ensemble stacking and performed systematic hyperparameter tuning using Optuna to optimize model performance."
        ],
        tags: ["GenAI", "LLM", "RAG", "Python", "React"],
        link: "https://www.kaggle.com/competitions/ieee-fraud-detection/data",
        image: mlFraudDetection
    },
    {
        title: "SEAPA Web System",
        description: "System made for Secretaria Estadual de Agricultura de Minas Gerais",
        details: [
            "Spearheaded the complete overhaul and modernization of the SIGEP system's user interface, building a new application (frontend-v2) from the ground up to replace the legacy frontend. The goal was to deliver a modern, high-performance, and maintainable platform with a strong focus on user experience.",
            "Foundation using React, TypeScript, and Vite to ensure a robust and scalable codebase.",
            "Developed a new Design System with reusable, responsive, and accessible components based on ShadCN UI, Radix UI, and Lucide Icons.",
            "Implemented complex features, including interactive dashboards with Recharts, advanced data tables with pagination and filtering using TanStack Table, and dynamic forms with schema-based validation via Zod.",
        ],
        tags: ["React", "TypeScript", "Vite", "ShadCN UI", "Radix UI", "Lucide Icons"],
        link: "#",
        image: seapaWebsite
    },
    {
        title: "Automated Tests Tool",
        description: "Tool to automate tests and generate reports",
        details: "Proactively designed, developed, and deployed a standalone executable application (Python/Tkinter) to streamline the execution of hundreds of mandatory semi-automated tests, eliminating the need for manual terminal commands by providing a centralized GUI. Engineered and integrated a novel reporting feature using LM Studio (Local LLM) to auto-generate comprehensive PDF test reports, adhering to strict data privacy protocols",
        tags: ["Python", "Tkinter", "LM Studio", "PDF", "Data Privacy"],
        link: "#",
        image: automatedTestsTool
    },
    {
        title: "Work in progress",
        description: "",
        details: "",
        tags: [],
        link: "#",
        image: workInProgress
    },
    {
        title: "Work in progress",
        description: "",
        details: "",
        tags: [],
        link: "#",
        image: workInProgress
    },
    {
        title: "Work in progress",
        description: "",
        details: "",
        tags: [],
        link: "#",
        image: workInProgress
    },
    {
        title: "Wordpress website",
        description: "Website for a local business",
        details: "Integrated Stable Diffusion models into a user-friendly web interface. Allows users to generate artistic images from text prompts, featuring adjustable parameters like guidance scale and seed control.",
        tags: ["AI", "Stable Diffusion", "Python", "Gradio"],
        link: "https://redememorial.com.br/",
        image: wordpressWebsite
    }
];

const ProjectCard = ({ project, className }: { project: Project; className?: string }) => (
    <div className={cn("project-card w-[380px] h-[420px] relative shrink-0 mx-4 group/card perspective-1000", className)}>
        <Card className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-card/50 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-500 ease-out hover:scale-105 hover:z-50 hover:shadow-2xl hover:bg-card/95 overflow-hidden flex flex-col">

            {/* Image Section - Slides Up and Out */}
            <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden transition-transform duration-500 ease-in-out group-hover/card:-translate-y-full">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Content Section - Slides Up to Fill Card */}
            <div className="absolute top-1/2 left-0 w-full h-1/2 p-6 flex flex-col transition-all duration-500 ease-in-out group-hover/card:top-0 group-hover/card:h-full bg-card/95 group-hover/card:bg-transparent">
                <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl font-bold text-white group-hover/card:text-primary transition-colors mb-2">
                        {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-base">
                        {project.description}
                    </CardDescription>
                </CardHeader>

                <CardContent className="p-0 flex flex-col gap-4 flex-grow overflow-hidden">
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

                    {/* Expanded Content - Fades In */}
                    <div className="flex-grow opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100 flex flex-col justify-between min-h-0">
                        <div className="overflow-y-auto pr-2 thin-scrollbar mb-4">
                            {Array.isArray(project.details) ? (
                                <ul className="list-disc list-outside ml-4 space-y-1">
                                    {project.details.map((detail, i) => (
                                        <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {project.details}
                                </p>
                            )}
                        </div>

                        {project.link && project.link !== "#" && project.link !== "" && (
                            <Button size="sm" className="w-full gap-2 mt-auto shrink-0" asChild>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4" />
                                    View Project
                                </a>
                            </Button>
                        )}
                    </div>
                </CardContent>
            </div>
        </Card >
    </div >
);

export function Projects() {
    const firstRow = projects.slice(0, 5);
    const secondRow = projects.slice(5, 10);
    const containerRef = useRef<HTMLElement>(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                        toggleActions: "play none none reverse"
                    }
                })

                tl.from(".project-card-row-1", {
                    y: 100,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                })
                    .from(".project-card-row-2", {
                        y: 100,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.1,
                    }, "<0.2")
            }, containerRef)
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="projects" ref={containerRef} className="py-12 sm:py-16 overflow-hidden relative">
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
                            <ProjectCard key={`row1-${index}`} project={project} className="project-card-row-1" />
                        ))}
                    </div>
                </div>

                {/* Bottom Row - Marquee Right */}
                <div className="relative w-full overflow-visible group z-10 hover:z-40 transition-all duration-300">
                    <div className="flex w-max animate-marquee-right group-hover:paused">
                        {[...secondRow, ...secondRow, ...secondRow, ...secondRow].map((project, index) => (
                            <ProjectCard key={`row2-${index}`} project={project} className="project-card-row-2" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
