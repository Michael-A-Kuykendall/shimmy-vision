import shimmyLogo from "@/assets/shimmy-vision.png";
import { Github, BookOpen, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-secondary text-secondary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img
              src={shimmyLogo}
              alt="Shimmy Vision"
              className="w-16 h-16 object-contain bg-background rounded p-1"
            />
            <div>
              <p className="font-display text-xl">SHIMMY VISION</p>
              <p className="text-sm opacity-70">AI Vision That Runs Anywhere</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Michael-A-Kuykendall/shimmy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://github.com/Michael-A-Kuykendall/shimmy/wiki/Shimmy-Vision"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              <span>Docs</span>
            </a>
            <a
              href="https://targetedwebresults.com/#contact"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Support</span>
            </a>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-70">
          <p>© 2025 Targeted Web Results LLC. All rights reserved.</p>
          <a href="#" className="hover:text-primary transition-colors">
            Manage Subscription
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
