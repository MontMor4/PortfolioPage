import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { FileText } from "lucide-react"
import profilePic1 from "../assets/profile-pic-1.jpg"
import profilePic2 from "../assets/profile-pic-2.jpg"
import profilePic3 from "../assets/profile-pic-3.jpg"
import profilePic4 from "../assets/profile-pic-4.jpg"
import profilePic5 from "../assets/profile-pic-5.jpg"

const profilePics = [profilePic1, profilePic2, profilePic3, profilePic4, profilePic5];

export function About() {
    const [currentProfilePic, setCurrentProfilePic] = useState(profilePics[0]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * profilePics.length);
        setCurrentProfilePic(profilePics[randomIndex]);
    }, []);

    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Profile Photo */}
                    <div className="flex justify-center md:justify-end">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-700 to-zinc-900 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <img
                                src={currentProfilePic}
                                alt="Victor Mont'mor"
                                className="relative w-64 h-80 md:w-[28rem] md:h-[35rem] object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Right Column: About Content */}
                    <div className="space-y-6 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Hello there,
                        </h2>

                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                I am a Computer Engineering student at CEFET-MG (Brazil) with a global perspective gained
                                during my exchange year at Hochschule München (Germany). I define myself as a truly <span className="text-white">solution-oriented developer </span>
                                — I don't just write code; I solve problems.
                            </p>
                            <p>
                                My journey ranges from competitive programming to developing automated tests and tools for medical devices in Germany.
                                I believe technology is a means to an end, not the end itself.
                                That is why I don't limit myself to a single tech stack; whether the challenge requires Python,
                                full-stack development, or diving into AI, I adapt my toolkit to deliver the best solution.
                            </p>
                            <p>
                                <span className="text-white">Fun fact:</span> I built this website from scratch precisely because I wanted to challenge myself to learn something new.
                                If I don't know how to solve a problem yet, give me a few hours, and I will.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Button
                                size="lg"
                                className="gap-2 rounded-full px-8"
                                onClick={() => window.open('#', '_blank')}
                            >
                                <FileText className="w-4 h-4" />
                                View My Resume
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
