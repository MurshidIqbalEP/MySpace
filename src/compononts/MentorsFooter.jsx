import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const MentorsFooter = () => {
  return (
    <div>
      <footer className="bg-[#5D38DE] text-white py-10 px-8 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-y-10">
          {/* Column 1 - Brand & Email */}
          <div className="flex flex-col gap-4 max-w-xs">
            <h2 className="text-xl font-semibold">⚡ Sparkly</h2>
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-full px-4 py-2 text-sm text-white bg-transparent border border-white/60 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <button className="w-fit mt-2 px-5 py-2 rounded-full bg-white text-[#6C2BD9] font-medium hover:opacity-90 transition">
              Submit
            </button>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h3 className="text-base font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Home</li>
              <li>Mentors</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Column 3 - Courses */}
          <div>
            <h3 className="text-base font-semibold mb-3">Courses</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>UI/UX Designing</li>
              <li>Web Development</li>
              <li>Data Visualization</li>
              <li>Digital Marketing</li>
              <li>AI/ML</li>
            </ul>
          </div>

          {/* Column 4 - App Download */}
          <div>
            <h3 className="text-base font-semibold mb-3">Download our app</h3>
            <div className="flex flex-col gap-2">
              <button className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-white/10 text-white backdrop-blur-md border border-white/30 hover:bg-white/20 transition"
              >
                <img src="apple.png" alt="apple logo" className="w-5 h-5" />
                App store
              </button>

              <button
               className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-white/10 text-white backdrop-blur-md border border-white/30 hover:bg-white/20 transition"
              >
                <span>
                  <img
                    src="play-store.png"
                    className="w-5 h-5"
                    alt="playstore"
                  />
                </span>{" "}
                Play store
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-white/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/70">
            © Sparkly Inc. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <Facebook className="h-5 w-5 text-white hover:opacity-70" />
            <Instagram className="h-5 w-5 text-white hover:opacity-70" />
            <Twitter className="h-5 w-5 text-white hover:opacity-70" />
            <Linkedin className="h-5 w-5 text-white hover:opacity-70" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MentorsFooter;
