import picture from "../assets/norex.jpg";

export default function About() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <div className="relative w-full h-96">
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=3000&q=80"
          alt="Black tech professionals collaborating"
          className="w-full h-full object-cover brightness-75"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Norex Brain Tech
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Empowering young African minds with digital skills for global impact.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-4 mt-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            About Us
          </h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Norex Brain Tech is a leading technology training institute focused
            on practical and industry-ready skills. We train students in Web
            Development, Office Automation, Graphics Design, Video Editing,
            Cyber Security, Digital Marketing, and other in-demand technology
            fields.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our mission is to equip young minds with digital skills that create
            opportunities both locally and globally. We believe in innovation,
            excellence, and transforming potential into professional success.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={picture}
            alt="Norex Brain Tech"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </div>
  );
}