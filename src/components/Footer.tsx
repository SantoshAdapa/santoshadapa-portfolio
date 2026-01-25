import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> by Santosh
          </p>
          <p>AI + Engineering Portfolio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
