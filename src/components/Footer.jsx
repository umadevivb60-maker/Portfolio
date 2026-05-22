import React from "react";

function Footer() {
  // Helper function for smooth scrolling back up to any section
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white border-t border-zinc-900 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* Column 1: Brand Heading in Green & Brief Description in White */}
        <div className="flex flex-col space-y-3">
          <div>
            <h3 className="text-xl font-black tracking-tight text-green-500">
              UMADEVI V
            </h3>
            <p className="text-xs text-green-400 tracking-wide uppercase font-bold mt-1">
              Computer Engineering Student
            </p>
          </div>
          <p className="text-sm text-white/80 leading-relaxed max-w-sm">
            A creative thinker passionate about building elegant code, designing animations, and continuously learning new technologies to solve real-world problems.
          </p>
        </div>

        {/* Column 2: Social Connects (Labels in Green, Links in White) */}
        <div className="flex flex-col md:items-center space-y-3">
          <div className="md:text-center">
            <h4 className="text-sm font-bold tracking-wider text-green-400 uppercase">
              Connect With Me
            </h4>
            <div className="flex items-center gap-6 mt-3">
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer" 
                className="text-sm font-medium text-white hover:text-green-400 transition duration-200 border-b border-transparent hover:border-green-400"
              >
                LinkedIn
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer" 
                className="text-sm font-medium text-white hover:text-green-400 transition duration-200 border-b border-transparent hover:border-green-400"
              >
                GitHub
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer" 
                className="text-sm font-medium text-white hover:text-green-400 transition duration-200 border-b border-transparent hover:border-green-400"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Column 3: Back to Top & Copyright */}
        <div className="flex flex-col md:items-end justify-between h-full space-y-6 md:space-y-0">
          <button 
            onClick={(e) => handleScroll(e, "home")}
            className="w-fit text-xs font-bold uppercase tracking-wider bg-zinc-900 text-white px-4 py-2.5 rounded-full transition duration-300 border border-zinc-800 hover:bg-zinc-800 hover:text-green-400 flex items-center gap-1.5"
          >
            <span>Back to Top</span>
            <span className="text-sm">↑</span>
          </button>
          
          <p className="text-xs text-white/60 md:text-right">
            &copy; {new Date().getFullYear()} Umadevi V. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;