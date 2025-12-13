import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    // Add scroll reveal effect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

        .hero-container {
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .hero-bg-gradient {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 60%;
          height: 120%;
          background: radial-gradient(circle at center, rgba(99, 102, 241, 0.08) 0%, transparent 70%);
          pointer-events: none;
          animation: float 20s ease-in-out infinite;
        }

        .hero-bg-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 50% at 50% 0%, black 30%, transparent 100%);
          pointer-events: none;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-5%, 5%) scale(1.05); }
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-name {
          position: relative;
          display: inline-block;
          color: #6366f1;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-name::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
          transform: scaleX(0);
          transform-origin: left;
          animation: underline 1s ease-out 0.5s forwards;
        }

        @keyframes underline {
          to { transform: scaleX(1); }
        }

        .hero-role {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: #64748b;
          text-transform: uppercase;
          font-size: 0.95rem;
        }

        .hero-description {
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          line-height: 1.75;
          color: #475569;
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .reveal-active {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-1 { transition-delay: 0.1s; }
        .reveal-2 { transition-delay: 0.2s; }
        .reveal-3 { transition-delay: 0.3s; }
        .reveal-4 { transition-delay: 0.4s; }
        .reveal-5 { transition-delay: 0.5s; }

        .hero-image-wrapper {
          position: relative;
        }

        .hero-image-frame {
          position: relative;
          aspect-ratio: 1;
          max-width: 450px;
          margin: 0 auto;
        }

        .hero-image-border {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
          animation: rotate 8s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .hero-image-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: white;
          padding: 8px;
          z-index: 1;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          filter: grayscale(10%);
          transition: filter 0.3s ease;
        }

        .hero-image-wrapper:hover .hero-image {
          filter: grayscale(0%);
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3rem;
          padding-top: 3rem;
          border-top: 1px solid #e2e8f0;
        }

        .hero-stat {
          text-align: center;
        }

        .hero-stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: #6366f1;
          margin-bottom: 0.25rem;
        }

        .hero-stat-label {
          font-size: 0.875rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          color: white;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 14px rgba(99, 102, 241, 0.3);
        }

        .hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
        }

        .hero-cta-arrow {
          transition: transform 0.3s ease;
        }

        .hero-cta:hover .hero-cta-arrow {
          transform: translateX(4px);
        }

        .hero-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          color: #6366f1;
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-cta-secondary:hover {
          border-color: #6366f1;
          background: #f8fafc;
          transform: translateY(-2px);
        }

        .hero-social-links {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .hero-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #f8fafc;
          color: #64748b;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .hero-social-link:hover {
          background: #6366f1;
          color: white;
          border-color: #6366f1;
          transform: translateY(-2px);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 500;
          color: #6366f1;
          margin-bottom: 1.5rem;
        }

        .hero-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 3rem;
          }
          
          .hero-stats {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-stat-value {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <section
        id="about"
        className="hero-container min-h-screen flex flex-col justify-center pt-24 pb-16 relative">
        {/* Background Effects */}
        <div className="hero-bg-gradient"></div>
        <div className="hero-bg-grid"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7">
              <div className="reveal reveal-1 hero-badge">
                <span className="hero-badge-dot"></span>
                Available for new projects
              </div>

              <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl mb-6 reveal reveal-2">
                Hi, I'm <span className="hero-name">Ismail Hammad</span>
              </h1>

              <p className="hero-role mb-4 reveal reveal-2">
                Full Stack Developer & Creative Problem Solver
              </p>

              <p className="hero-description text-lg md:text-xl mb-8 max-w-2xl reveal reveal-3">
                I craft exceptional digital experiences that seamlessly blend
                cutting-edge technology with intuitive design. Specializing in
                modern JavaScript ecosystems, I transform complex challenges
                into elegant, scalable solutions that users love.
              </p>

              <div className="flex flex-wrap gap-4 mb-6 reveal reveal-4">
                <a href="#projects" className="hero-cta">
                  View My Work
                  <ArrowRight size={20} className="hero-cta-arrow" />
                </a>
                <a href="#contact" className="hero-cta-secondary">
                  Get in Touch
                </a>
              </div>

              <div className="hero-social-links reveal reveal-5">
                <a
                  href="https://github.com/Hammad153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                  aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ismail-hammad-bb73152b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                  aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:hammadismail1546@gmail.com"
                  className="hero-social-link"
                  aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>

              {/* Stats Section */}
              <div className="hero-stats reveal reveal-5">
                <div className="hero-stat">
                  <div className="hero-stat-value">4+</div>
                  <div className="hero-stat-label">Years Experience</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">10+</div>
                  <div className="hero-stat-label">Projects Completed</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">5+</div>
                  <div className="hero-stat-label">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-5 reveal reveal-3">
              <div className="hero-image-wrapper">
                <div className="hero-image-frame">
                  <div className="hero-image-border"></div>
                  <div className="hero-image-inner">
                    <img
                      src="/images/ahmad.png"
                      alt="Ismail Hammad - Full Stack Developer"
                      className="hero-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
