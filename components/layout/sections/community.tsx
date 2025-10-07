import { FaWhatsapp } from 'react-icons/fa'; // Importing WhatsApp icon from react-icons
import DiscordIcon from "@/components/icons/discord-icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from 'next/link';

export const CommunitySection = () => {
  return (
    <section id="community"  >
      <hr className="border-secondary" />
      <div className="container  ">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
              
                <div>
                Ready to level up your
                  <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    Business?
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
            We provide top-notch digital services for building websites, apps, and other solutions that drive success. Let's connect and discuss your project. 💡
            </CardContent>

            <CardFooter>
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white flex items-center space-x-2">
                <Link
                  href="https://wa.me/+919606995925?text=I%20am%20interested%20in%20your%20digital%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="w-6 h-6 text-white" />
                  <span>Book a Free Consultation</span>
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
