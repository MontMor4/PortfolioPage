import ulrichProfilePic from "../assets/ulrich-profile-pic.jpeg"
import danielProfilePic from "../assets/daniel-profile-pic.jpeg"
import snkeLogo from "../assets/snke-logo.jpeg"

interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    image: string;
    text: string;
}

const testimonials: Testimonial[] = [
    {
        id: "t1",
        name: "Gerd Ulrich Gamm",
        role: "Manager R&D",
        company: "Brainlab AG",
        image: ulrichProfilePic,
        text: "He always worked using his own initiative, displaying an impressive level of dedication and motivation. He was exceptionally willing to learn, always kept a cool head, acted responsibly, and completed all tasks commendably even under extreme stress."
    },
    {
        id: "t2",
        name: "Daniel Ensminger",
        role: "R&D - Test Automation Intern",
        company: "Brainlab AG",
        image: danielProfilePic,
        text: "He was well-regarded by those around him due to his consistently friendly and well-balanced demeanour. He enjoyed the complete trust of all his line managers, colleagues and clients.His personal conduct was always exemplary."
    },
    {
        id: "t3",
        name: "Anonimous",
        role: "Senior Software Engineer",
        company: "SNKE OS",
        image: snkeLogo,
        text: "Victor possesses comprehensive, extensive specialist knowledge, even in peripheral areas, which he was always able to apply confidently and expertly in practice during his employment as a working student."
    }
]

export function Testimonials() {
    return (
        <section id="testimonials" className="container mx-auto py-12 sm:py-16">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Testimonials</h2>
                <p className="text-muted-foreground text-lg">
                    From people I have worked with
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 gap-y-16">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-sm p-8 pt-12 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300 flex flex-col items-center text-center mt-10"
                    >
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 bg-background">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="mb-6 mt-4">
                            <h4 className="text-xl font-bold text-foreground">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground mt-1">
                                {testimonial.role} at {testimonial.company}
                            </p>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                            "{testimonial.text}"
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
