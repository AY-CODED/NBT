import { useState } from "react";

export default function Enroll() {
  const [success, setSuccess] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    e.target.reset();
    setPreview(null);
    setTimeout(() => setSuccess(false), 4000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative bg-gray-900 text-white min-h-screen overflow-hidden">

      {/* Hero Background */}
      <div className="absolute w-full h-80 bg-gradient-to-r from-blue-900 to-purple-700 rounded-b-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Enroll at <span className="text-blue-400">Norex Brain Tech</span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Start your tech journey today. Fill the form below to secure your spot in our world-class tech programs.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white/10 backdrop-blur-md border border-gray-700 rounded-2xl p-8 shadow-2xl">
          <form className="grid gap-6" onSubmit={handleSubmit}>

            {/* Profile Picture Upload */}
            <div className="flex flex-col items-center">
              {preview ? (
                <img src={preview} alt="Profile Preview" className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-500" />
              ) : (
                <div className="w-32 h-32 rounded-full border-4 border-gray-600 flex items-center justify-center mb-4 text-gray-400">
                  Profile
                </div>
              )}
              <input
                type="file"
                name="profilePic"
                accept="image/*"
                required
                onChange={handleFileChange}
                className="peer w-full text-white cursor-pointer"
              />
              <label className="text-gray-400 text-sm mt-1">Upload Profile Picture / Passport</label>
            </div>

            {/* Name */}
            <div className="relative">
              <input type="text" name="name" required placeholder=" " className="peer w-full p-4 rounded border border-gray-600 bg-transparent outline-none text-white focus:border-blue-400 transition" />
              <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-400">
                Full Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input type="email" name="email" required placeholder=" " className="peer w-full p-4 rounded border border-gray-600 bg-transparent outline-none text-white focus:border-blue-400 transition" />
              <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-400">
                Email Address
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <input type="tel" name="phone" required placeholder=" " className="peer w-full p-4 rounded border border-gray-600 bg-transparent outline-none text-white focus:border-blue-400 transition" />
              <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-400">
                Phone Number
              </label>
            </div>

            {/* Age */}
            <div className="relative">
              <input type="number" name="age" min="13" required placeholder=" " className="peer w-full p-4 rounded border border-gray-600 bg-transparent outline-none text-white focus:border-blue-400 transition" />
              <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-400">
                Age (13+)
              </label>
            </div>

            {/* Course Selection */}
            <div className="relative">
              <select name="course" required className="peer w-full p-4 rounded border border-gray-600 bg-transparent text-white focus:border-blue-400 outline-none transition">
                <option value="" disabled selected>Select Course</option>
                <option value="web-development">Web Development</option>
                <option value="office-automation">Office Automation</option>
                <option value="graphics-design">Graphics Design</option>
                <option value="video-editing">Video Editing</option>
                <option value="cyber-security">Cyber Security</option>
              </select>
            </div>

            {/* Submit Button */}
            <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transform transition py-4 rounded-xl font-semibold shadow-lg text-white">
              Submit Enrollment
            </button>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div className="relative bg-gray-900 border border-blue-500 rounded-xl p-8 max-w-md w-full text-center shadow-2xl animate-fadeIn">
            <h2 className="text-2xl font-bold text-blue-400 mb-2">Enrollment Successful!</h2>
            <p className="text-gray-300">
              Thanks for enrolling at <span className="font-semibold text-white">Norex Brain Tech</span>. <br />
              Our team will contact you shortly.
            </p>
          </div>
        </div>
      )}

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% {opacity: 0; transform: scale(0.9);}
            100% {opacity: 1; transform: scale(1);}
          }
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-out forwards;
          }
        `}
      </style>

    </div>
  );
}