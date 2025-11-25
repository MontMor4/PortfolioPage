import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function Education() {
    const education = [
        {
            school: "CEFET-MG",
            degree: "Bachelor's Degree in Computer Engineering",
            period: "Expected Graduation: Dec 2026",
            details: "Overall GPA: 84.5"
        },
        {
            school: "Hochschule München",
            degree: "Exchange Program",
            period: "09/2024 - 10/2025",
            details: "Selected through a highly competitive process at CEFET-MG for an exchange program in Munich to pursue one year of the Bachelor's in Computer Science. Gained valuable experience in international academic, cultural and work environments."
        }
    ]

    return (
        <section id="education" className="container mx-auto py-24 sm:py-32">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">Education</h2>
            <div className="mx-auto max-w-4xl space-y-8">
                {education.map((edu, index) => (
                    <Card key={index} className="bg-card/50 backdrop-blur-sm border-white/10">
                        <CardHeader>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                <CardTitle className="text-xl font-bold">{edu.school}</CardTitle>
                                <span className="text-sm text-muted-foreground font-medium">{edu.period}</span>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg font-medium text-primary mb-2">{edu.degree}</p>
                            <p className="text-muted-foreground">{edu.details}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
