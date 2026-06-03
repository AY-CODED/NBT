import { Link } from "react-router-dom";
import { CheckCircle, Shield, Laptop, Users } from "lucide-react";
import picture from "../assets/norex.jpg"; 

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE – TEXT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-blue-500">Norex Brain Tech?</span>
          </h2>

          <p className="text-gray-400 mb-10 leading-relaxed">
            At Norex Brain Tech, we equip children and teenagers with the
            digital skills they need to succeed in today’s technology-driven
            world. We don’t just teach — we build future innovators and leaders
            of tomorrow.
          </p>

          {/* Reasons */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-blue-500 mt-1" />
              <div>
                <h4 className="text-white font-semibold text-lg">
                  Practical & Hands-On Learning
                </h4>
                <p className="text-gray-400 text-sm">
                  Students build real projects in Web Development, Graphics
                  Design, Video Editing, and Office Automation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Users className="text-blue-500 mt-1" />
              <div>
                <h4 className="text-white font-semibold text-lg">
                  Experienced & Patient Instructors
                </h4>
                <p className="text-gray-400 text-sm">
                  Our tutors guide each child step-by-step, ensuring full
                  understanding and confidence.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Laptop className="text-blue-500 mt-1" />
              <div>
                <h4 className="text-white font-semibold text-lg">
                  Future-Ready Tech Skills
                </h4>
                <p className="text-gray-400 text-sm">
                  We prepare students early for opportunities in the fast-growing
                  technology industry.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Shield className="text-blue-500 mt-1" />
              <div>
                <h4 className="text-white font-semibold text-lg">
                  Safe & Supportive Environment
                </h4>
                <p className="text-gray-400 text-sm">
                  A secure, encouraging atmosphere where creativity and learning
                  thrive.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            to="/enroll"
            className="mt-10 inline-block bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-full text-white font-semibold shadow-lg"
          >
            Enroll Your Child Today
          </Link>
        </div>

        {/* RIGHT SIDE – IMAGE */}
        <div className="relative">
          <img
            src={picture}
            alt="Students learning at Norex Brain Tech"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-blue-600/20 w-40 h-40 rounded-full blur-3xl"></div>
        </div>

      </div>
    </section>
  );
}