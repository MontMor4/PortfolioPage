import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
    const experiences = [
        {
            company: "Brainlab",
            role: "R&D - Test Automation Intern",
            location: "Germany",
            period: "04/2025 - 10/2025",
            description: [
                "Developed and maintained Python-based automated test scripts using Robot Framework and proprietary APIs to validate a next-generation, confidential medical hardware device, integrating test suites into a Jenkins-based CI/CD pipeline.",
                "Identified, documented, and reported bugs, actively validating new functionalities and collaborating with an international, on-site development team to propose usability enhancements.",
                "Operated within a high-stakes medical-grade environment, adhering to strict quality assurance (QA) protocols and rigorous peer-review processes to mitigate patient risk.",
                "Key Project: Proactively designed, developed, and deployed a standalone executable application (Python/Tkinter) to streamline the execution of hundreds of mandatory semi-automated tests. Engineered and integrated a novel reporting feature using LM Studio (Local LLM) to auto-generate comprehensive PDF test reports."
            ],
            skills: ["Python", "Robot Framework", "Jenkins", "CI/CD", "Tkinter", "LM Studio", "LLM"]
        },
        {
            company: "Levty",
            role: "Software Engineering Intern",
            location: "Remote", // Assuming remote or not specified, but standard for software roles
            period: "06/2023 - 09/2024",
            description: [
                "Automated company processes using JavaScript through the Sydle One framework.",
                "Designed and implemented a Node.js application to migrate confidential judicial data to a new system via API calls.",
                "Conducted advanced SQL queries involving table intersections, grouping, filtering, and pagination.",
                "Optimized database performance by utilizing indexing and query optimization techniques."
            ],
            skills: ["JavaScript", "Node.js", "SQL", "Sydle One", "Database Optimization"]
        },
        {
            company: "Extension Projects",
            role: "Various Roles",
            location: "CEFET-MG",
            period: "2021 - 2024",
            description: [
                "Competitive Programming: Applied algorithms and data structures, developing strong problem-solving, algorithm optimization, and teamwork skills.",
                "Commit Jr.: Developed and maintained institutional and commercial websites and applications using WordPress, HTML, and CSS.",
                "Compet: Served as a software developer, resolving bugs and maintaining projects across frontend, backend, and general application stacks.",
                "Researcher: Conducted extensive studies in artificial intelligence and genetic algorithms, resulting in a published research paper."
            ],
            skills: ["Algorithms", "WordPress", "HTML/CSS", "Research", "AI"]
        }
    ]

    return (
        <section id="experience" className="container mx-auto py-24 sm:py-32">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">Experience</h2>
            <div className="mx-auto max-w-4xl space-y-8">
                {experiences.map((exp, index) => (
                    <Card key={index} className="bg-card/50 backdrop-blur-sm border-white/10">
                        <CardHeader>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                                    <CardDescription className="text-lg font-medium text-primary mt-1">
                                        {exp.company} • {exp.location}
                                    </CardDescription>
                                </div>
                                <Badge variant="secondary" className="text-sm px-3 py-1">
                                    {exp.period}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground mb-6">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill) => (
                                    <Badge key={skill} variant="outline" className="bg-white/5 hover:bg-white/10 transition-colors">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
