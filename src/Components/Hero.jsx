import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    title: "Artificial Intelligence Solutions",
    description:
      "Transforming businesses with advanced AI systems and intelligent automation.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Scalable Software Engineering",
    description:
      "Building secure, scalable and high-performance digital platforms.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    title: "Cybersecurity & Cloud Innovation",
    description:
      "Protecting digital ecosystems with enterprise-grade security systems.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen bg-slate-950 text-white overflow-hidden">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-900/40 via-slate-950 to-cyan-900/30"></div>

      {/* Slide Container */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full flex items-center relative"
          >
            {/* Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt="Tech"
                className="w-full h-full object-cover opacity-30"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

              {/* Text Section */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {slide.title}
                </h1>

                <p className="text-slate-300 text-lg max-w-lg">
                  {slide.description}
                </p>

                <div className="flex gap-4">
                  <button className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl transition shadow-lg">
                    Get Started
                  </button>

                  <button className="border border-slate-600 px-6 py-3 rounded-xl hover:border-indigo-500 transition">
                    Learn More
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div>
                    <h2 className="text-2xl font-bold text-indigo-400">120+</h2>
                    <p className="text-slate-400 text-sm">Projects</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-indigo-400">80+</h2>
                    <p className="text-slate-400 text-sm">Clients</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-indigo-400">5+</h2>
                    <p className="text-slate-400 text-sm">Years Experience</p>
                  </div>
                </div>
              </div>

              {/* Glass Tech Card */}
              <div className="hidden md:block">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">
                  <h3 className="text-xl font-semibold mb-4">
                    Smart Technology Platform
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Norex Brain Tech integrates artificial intelligence,
                    cloud systems, and data-driven strategies to build
                    next-generation digital products.
                  </p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index
                ? "bg-indigo-500"
                : "bg-slate-600"
            }`}
          ></div>
        ))}
      </div>

    </section>
  );
};

export default Hero;