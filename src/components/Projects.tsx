import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
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
            "Solved the Capacitated Vehicle Routing Problem (CVRP) by implementing and comparing two distinct approaches: an exact method using the Gurobi solver and a metaheuristic approach using Genetic Algorithms.",
            "The study analyzed trade-offs between solution quality and computational time."
        ],
        tags: ["Graphs", "Genetic Algorithms", "Optimization", "Python", "Gurobi"],
        link: "#",
        image: vehicleRoutingProblem
    },
    {
        title: "ML Fraud Detection",
        description: "Kaggle competition: Credit Card Fraudulent Transactions Detection.",
        details: [
            "Developed a complete machine learning pipeline to predict fraudulent transactions using a large, real-world dataset from a Kaggle competition.",
            "Engineered and preprocessed a complex dataset with over 400 features, implementing strategies to handle high percentages of missing data, severe class imbalance, and mixed data types (numerical and categorical).",
            "Systematically evaluated and compared the performance of multiple classification models, including baseline Decision Trees, XGBoost, LightGBM, and Random Forest, using the ROC AUC metric.",
            "Achieved a competitive ROC AUC score of 0.89 on the Kaggle leaderboard by implementing a tuned Random Forest model.",
            "Experimented with advanced techniques such as ensemble stacking and performed systematic hyperparameter tuning using Optuna to optimize model performance."
        ],
        tags: ["GenAI", "LLM", "RAG", "Python", "React"],
        link: "#",
        image: mlFraudDetection
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
        title: "SEAPA Web System",
        description: "System made for Secretaria Estadual de Agricultura de Minas Gerais",
        details: "My initial step into web development. Built a responsive portfolio from scratch without frameworks to deeply understand the DOM, CSS Grid/Flexbox, and modern JavaScript ES6+ features.",
        tags: ["HTML", "CSS", "JavaScript", "Frontend"],
        link: "",
        image: seapaWebsite
    },
    {
        title: "Data Viz Dashboard",
        description: "Interactive dashboard for visualizing complex datasets.",
        details: "Created a dynamic dashboard for visualizing large-scale datasets. leveraged D3.js for custom charts and React for state management, enabling users to filter and explore data in real-time.",
        tags: ["D3.js", "React", "Data Visualization", "Analytics"],
        link: "#",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Smart Home Hub",
        description: "IoT platform for managing connected home devices.",
        details: "Developed a centralized hub to control various smart home devices via MQTT protocol. The system runs on a Raspberry Pi and features a web interface for remote monitoring and automation scheduling.",
        tags: ["IoT", "MQTT", "Raspberry Pi", "Python"],
        link: "#",
        image: "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Crypto Tracker",
        description: "Real-time cryptocurrency price tracker and portfolio manager.",
        details: "A real-time financial tracking application that consumes CoinGecko API. Features include live price updates via WebSockets, portfolio value calculation, and historical price charting.",
        tags: ["React", "Web3", "API Integration", "Finance"],
        link: "#",
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1974&auto=format&fit=crop"
    },
    {
        title: "Task Management App",
        description: "Collaborative task manager with real-time updates.",
        details: "Built a Trello-like task management tool supporting real-time collaboration. Users can create boards, drag-and-drop tasks, and see updates instantly across devices using Firebase Realtime Database.",
        tags: ["Vue.js", "Firebase", "Real-time", "Productivity"],
        link: "#",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop"
    },
    {
        title: "Wordpress website",
        description: "Website for a local business",
        details: "Integrated Stable Diffusion models into a user-friendly web interface. Allows users to generate artistic images from text prompts, featuring adjustable parameters like guidance scale and seed control.",
        tags: ["AI", "Stable Diffusion", "Python", "Gradio"],
        link: "#",
        image: wordpressWebsite
    }
];

const ProjectCard = ({ project }: { project: Project }) => (
    <div className="w-[380px] h-[420px] relative shrink-0 mx-4 group/card perspective-1000">
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
