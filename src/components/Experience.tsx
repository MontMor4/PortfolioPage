import { Badge } from "@/components/ui/badge"
import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import gccLogo from "@/assets/gcc-cefet-logo.jpeg"
import levtLogo from "@/assets/levty-logo.png"
import brainlabLogo from "@/assets/brainlab-logo.png"
import sbmacLogo from "@/assets/sbmac-logo.png"
import competLogo from "@/assets/compet-logo.png"
import commitLogo from "@/assets/commit-logo.jpeg"

interface Experience {
    id: string;
    company: string;
    role: string;
    location: string;
    period: string;
    description: string[];
    skills: string[];
    logo?: string;
    link?: string;
}

const experiences: Experience[] = [
    {
        id: "exp-brainlab",
        company: "Brainlab AG",
        role: "R&D - Test Automation Intern",
        location: "Munich, Germany",
        period: "04/2025 - 10/2025",
        description: [
            "Developed and maintained Python-based automated test scripts using Robot Framework and proprietary APIs to validate a next-generation, confidential medical hardware device, integrating test suites into a Jenkins-based CI/CD pipeline",
            "Identified, documented, and reported bugs, actively validating new functionalities and collaborating with an international, on-site development team to propose usability enhancements",
            "Operated within a high-stakes medical-grade environment, adhering to strict quality assurance (QA) protocols and rigorous peer-review processes to mitigate patient risk",
            "Key Project: Proactively designed, developed, and deployed a standalone executable application (Python/Tkinter) to streamline the execution of hundreds of mandatory semi-automated tests, eliminating the need for manual terminal commands by providing a centralized GUI. Engineered and integrated a novel reporting feature using LM Studio (Local LLM) to auto-generate comprehensive PDF test reports, adhering to strict data privacy protocols"
        ],
        skills: ["Python", "Robot Framework", "Jenkins", "CI/CD", "Quality Assurance", "Medical Device Testing", "Python/Tkinter", "LM Studio", "PDF Report Generation"],
        logo: brainlabLogo,
        link: "https://www.brainlab.com/"
    },
    {
        id: "exp-levty",
        company: "LEVTY",
        role: "Software Engineering Intern",
        location: "Belo Horizonte, Brazil",
        period: "06/2023 - 09/2024",
        description: [
            "Automated company processes using JavaScript through the Sydle One framework",
            "Designed and implemented a Node.js application to migrate confidential judicial data to a new system via API calls",
            "Conducted advanced SQL queries involving table intersections, grouping, filtering, and pagination",
            "Optimized database performance by utilizing indexing and query optimization techniques"
        ],
        skills: ["JavaScript", "Node.js", "SQL", "Sydle One", "Database Optimization"],
        logo: levtLogo,
        link: "https://www.levty.com/br/"
    },
    {
        id: "exp-competitor",
        company: "GCC",
        role: "Competitor Programmer",
        location: "Brazil",
        period: "2022 - 2024",
        description: [
            "Gained valuable experience in teamwork and cooperation;",
            "Studied and applied algorithms and data structures;",
            "Focused on problem - solving and algorithm optimization.",
            "Awarded two-time Silver Medalist in the SBC Minas Gerais Programming Marathon (2023 and 2024)"
        ],
        skills: ["Algorithms", "Data Structures", "Teamwork", "Competitive Programming"],
        logo: gccLogo,
        link: "https://www.instagram.com/gcc.cefetmg/"
    },
    {
        id: "exp-researcher",
        company: "CEFET-MG",
        role: "Researcher",
        location: "Belo Horizonte, Brazil",
        period: "09/2022 - 09/2023",
        description: [
            "Conducted studies on the functionality of various genetic algorithms;",
            "Developed strategies to optimize existing algorithms through incremental improvements and modifications;",
            "Authored an article that demonstrates satisfactory performance of a hybrid algorithm in multi-objective optimization problems."
        ],
        skills: ["Genetic Algorithms", "Hybrid Algorithms", "Multi-Objective Optimization", "Research", "AI"],
        logo: sbmacLogo,
        link: "https://proceedings.sbmac.org.br/sbmac/article/view/4548"
    },
    {
        id: "exp-compet",
        company: "COMPET - Extension Project",
        role: "Software Developer",
        location: "Remote",
        period: "05/2022 - 05/2023",
        description: [
            "Maintenance and development of Compet's websites and projects;",
            "Resolved bugs in web pages and applications;",
            "Worked with HTML, CSS, and JavaScript to make necessary adjustments during development."
        ],
        skills: ["HTML", "CSS", "JavaScript"],
        logo: competLogo,
        link: "https://compet.vercel.app/"
    },
    {
        id: "exp-commit",
        company: "Commit Jr.",
        role: "Website Developer",
        location: "Remote",
        period: "10/2021- 10/2022",
        description: [
            "Gained valuable experience in teamwork, organization, and cooperation;",
            "Developed web applications (institutional websites, e-commerce platforms, among others) using WordPress;",
            "Utilized HTML and CSS for fine-tuning during development."
        ],
        skills: ["WordPress", "HTML", "CSS"],
        logo: commitLogo,
        link: "https://www.linkedin.com/company/commitjr/"
    }
]

export function Experience() {
    const [activeId, setActiveId] = useState<string>("")
    const observer = useRef<IntersectionObserver | null>(null)
    const navRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id)
                }
            })
        }

        observer.current = new IntersectionObserver(handleIntersect, {
            root: null,
            rootMargin: "-45% 0px -45% 0px", // Focus on the center of the viewport
            threshold: 0,
        })

        experiences.forEach((exp) => {
            const element = document.getElementById(exp.id)
            if (element) observer.current?.observe(element)
        })

        return () => {
            observer.current?.disconnect()
        }
    }, [])

    // Auto-scroll navigation to keep active item in view
    useEffect(() => {
        if (activeId && navRef.current) {
            const activeElement = navRef.current.querySelector(`[data-nav-id="${activeId}"]`)
            if (activeElement) {
                activeElement.scrollIntoView({ behavior: "smooth", block: "nearest" })
            }
        }
    }, [activeId])

    const scrollToExperience = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" })
            setActiveId(id)
        }
    }

    return (
        <section id="experience" className="container mx-auto py-12 sm:py-16">
            <div className="grid gap-12 lg:grid-cols-[1fr_300px] items-start max-w-6xl mx-auto">
                {/* Left Column: Content */}
                <div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-16 text-left">Curriculum Vitae</h2>

                    <div className="relative ml-4 md:ml-6 space-y-16">
                        {experiences.map((exp) => (
                            <div key={exp.id} id={exp.id} className="relative ml-8 md:ml-12 scroll-mt-[45vh] group">
                                {/* Vertical Line */}
                                <div className="absolute w-[2px] bg-gray-800 top-12 bottom-0 left-[-30px] md:left-[-42px] -translate-x-1/2" />

                                {/* Logo on the line */}
                                <span className={cn(
                                    "absolute -left-[50px] md:-left-[66px] top-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border ring-4 ring-background overflow-hidden transition-all duration-300",
                                    activeId === exp.id ? "border-primary/50 ring-primary/10 scale-110" : "border-gray-800 bg-background"
                                )}>
                                    {exp.logo ? (
                                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full bg-gray-800" />
                                    )}
                                </span>

                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold flex items-center gap-3 text-foreground transition-colors duration-300">
                                            {exp.role}
                                            {exp.link && (
                                                <a
                                                    href={exp.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-2 rounded-full text-xs h-7")}
                                                >
                                                    View {exp.company} <ExternalLink className="w-3 h-3" />
                                                </a>
                                            )}
                                        </h3>
                                        <div className="text-base font-medium text-muted-foreground mt-1">
                                            {exp.company} • {exp.location}
                                        </div>
                                    </div>
                                    <div className="text-sm font-medium text-muted-foreground/80 whitespace-nowrap">
                                        {exp.period}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {exp.skills.map((skill) => (
                                            <Badge key={skill} variant="secondary" className="bg-gray-800/50 text-gray-300 hover:bg-gray-800 border-transparent font-normal">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                    <ul className="space-y-2 text-muted-foreground/90 list-disc list-outside ml-4">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="leading-relaxed">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Sticky Navigation */}
                <div className="hidden lg:block relative h-full">
                    <div className="sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4 thin-scrollbar">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                            Career Progress
                        </h3>
                        <div className="relative pl-4" ref={navRef}>
                            {/* Vertical line for navigation */}
                            <div className="absolute left-[21px] top-2 bottom-2 w-[2px] bg-gray-800 -z-10" />

                            <div className="space-y-6">
                                {experiences.map((exp) => (
                                    <div
                                        key={exp.id}
                                        data-nav-id={exp.id}
                                        onClick={() => scrollToExperience(exp.id)}
                                        className={cn(
                                            "group flex items-start gap-4 cursor-pointer transition-all duration-300 relative",
                                            activeId === exp.id ? "scale-100" : "opacity-70 hover:opacity-100"
                                        )}
                                    >
                                        {/* Dot Indicator */}
                                        <div className={cn(
                                            "w-3 h-3 rounded-full border-2 transition-all duration-300 shrink-0 z-10 mt-2 bg-background",
                                            activeId === exp.id
                                                ? "border-primary bg-primary scale-125"
                                                : "border-gray-600 group-hover:border-gray-400"
                                        )} />

                                        {/* Card Content */}
                                        <div className={cn(
                                            "flex-1 transition-all duration-300 rounded-lg",
                                            activeId === exp.id
                                                ? "bg-white/5 p-4 -mt-2 -ml-2 border border-white/10 shadow-sm"
                                                : "py-0.5"
                                        )}>
                                            <div className="flex flex-col">
                                                <span className={cn(
                                                    "font-bold transition-colors duration-300",
                                                    activeId === exp.id ? "text-base text-foreground mb-1" : "text-sm text-muted-foreground group-hover:text-foreground"
                                                )}>
                                                    {exp.role}
                                                </span>
                                                <span className={cn(
                                                    "text-muted-foreground/60 transition-all duration-300",
                                                    activeId === exp.id ? "text-sm block" : "text-xs"
                                                )}>
                                                    {exp.company}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
