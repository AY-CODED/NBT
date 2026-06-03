import { GraduationCap, Globe, ClipboardList } from "lucide-react";

function Card() {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* Hero Background Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 h-64 w-full rounded-b-3xl"></div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto px-6 -mt-32">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-red-100 text-red-500 text-3xl">
              <GraduationCap size={40} />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-800">
              Certificates with Global Recognition
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our courses lead to professional IT certifications from leading
              technology organizations. Each course includes classroom learning
              and practical lab sessions for hands-on experience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-500 text-3xl">
              <Globe size={40} />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-800">
              International Education Alliances
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We partner with top universities worldwide to give students
              access to international ICT programs while studying locally.
              Expand your career opportunities globally.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-500 text-3xl">
              <ClipboardList size={40} />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-800">
              Our Mission
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Technology is an empowering tool that increases productivity and
              prosperity. Our mission is to equip students with the skills
              needed to thrive in today’s digital economy.
            </p>
          </div>

        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 shadow-md">
            Get Started →
          </button>
        </div>

      </div>
    </div>
  );
}

export default Card;