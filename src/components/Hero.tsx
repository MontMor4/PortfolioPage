import { useEffect } from "react"

export function Hero() {
    useEffect(() => {
        const loadUnicornScript = () => {
            // Check if script is already present
            const existingScript = document.querySelector('script[src*="unicornstudio.js"]');

            if (existingScript) {
                // If script exists, check if global object is ready
                if ((window as any).UnicornStudio) {
                    if (!(window as any).UnicornStudio.isInitialized) {
                        (window as any).UnicornStudio.init();
                        (window as any).UnicornStudio.isInitialized = true;
                    }
                } else {
                    // Script exists but global object not ready - wait for it
                    existingScript.addEventListener('load', () => {
                        if ((window as any).UnicornStudio && !(window as any).UnicornStudio.isInitialized) {
                            (window as any).UnicornStudio.init();
                            (window as any).UnicornStudio.isInitialized = true;
                        }
                    });
                }
                return;
            }

            // Script doesn't exist, load it
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.35/dist/unicornStudio.umd.js";
            script.onload = () => {
                if ((window as any).UnicornStudio && !(window as any).UnicornStudio.isInitialized) {
                    (window as any).UnicornStudio.init();
                    (window as any).UnicornStudio.isInitialized = true;
                }
            };
            script.onerror = (e) => console.error("Failed to load Unicorn Studio script", e);
            document.body.appendChild(script);
        };

        try {
            loadUnicornScript();
        } catch (error) {
            console.error("Error initializing Unicorn Studio:", error);
        }
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Unicorn Studio Background - z-0 to ensure visibility but behind content */}
            <div
                className="absolute inset-0 z-0"
                aria-hidden="true"
            >
                <div
                    data-us-project="tpTgcWEBeLqLDHgSMIJd"
                    style={{ width: '100%', height: '100%' }}
                ></div>
            </div>

            {/* Content - z-10 to sit on top of background */}
            <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center pointer-events-none">
                <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                    <p className="text-xl md:text-5xl text-white/90 mb-8 font-sans">
                        &lt; hey there, I am /&gt;
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <span className="font-zilla text-7xl md:text-9xl text-white tracking-tight">
                            victor
                        </span>
                        <span className="font-playfair italic text-7xl md:text-9xl text-white tracking-tight">
                            mont'mor
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
