import Link from "next/link";
import Container from "@/components/global/container";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/ui/particles";
import RetroGrid from "@/components/ui/retro-grid";
import { ArrowRight } from "lucide-react";

const CTA = () => {
    return (
        <div className="flex flex-col items-center justify-center  md:py-16  w-full relative">
            <Container>
                <div className="flex flex-col items-center justify-center text-center w-full px-4 md:px-0 mx-auto h-[500px] border border-foreground/10 rounded-3xl overflow-hidden relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-12 bg-violet-500 blur-[10rem]"></div>
                    <div className="flex flex-col items-center justify-center w-full z-20">
                        <h2 className="text-4xl md:text-6xl font-heading heading font-semibold !leading-tight ">
                            Elevate your <br className="hidden md:block" /> experience with us
                        </h2>
                        <p className="text-base md:text-lg text-center text-accent-foreground/80 max-w-xl mx-auto mt-6">
                            Ready to get started? Sign up now and start your journey with us. We are here to help you grow.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 mt-6">
                            <Button asChild className="mr-4 font-bold group/arrow">
                                          <Link
                                            href="https://wa.me/919663216581?text=Hi%2C%20I'm%20interested%20in%20booking%20a%20demo%20with%20your%20team."
                                            target="_blank"
                                          >
                                            Book a demo now 🚀
                                            <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                                          </Link>
                                        </Button>
                          
                        </div>
                    </div>
                    <RetroGrid />
                    <Particles
                        refresh
                        ease={80}
                        color="#d4d4d8"
                        quantity={100}
                        className="size-full absolute inset-0"
                    />
                </div>
            </Container>
        </div>
    )
};

export default CTA