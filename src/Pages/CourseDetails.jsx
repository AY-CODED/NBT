import { useParams, Link } from "react-router-dom";

const courseData = {
  "web-development": {
    title: "Web Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    description:
      "Learn how to build modern websites and web applications using HTML, CSS, JavaScript, bootstrap, UI/UX and React. This course focuses on real-world development skills that companies are looking for.",
    duration: "6 Months",
    level: "Beginner to Advanced",
    projects: "10+ Projects",
    outline: [
      "HTML & CSS Fundamentals",
      "JavaScript Programming",
      "React Development",
      "Building Real Projects",
      "Deployment & Hosting",
    ],
  },

  "office-automation": {
    title: "Office Automation",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
    description:
      "Master modern office tools used by professionals worldwide including Microsoft Word, Excel, and PowerPoint.",
    duration: "2 Months",
    level: "Beginner",
    projects: "5 Practical Tasks",
    outline: [
      "Microsoft Word",
      "Excel Data Analysis",
      "PowerPoint Presentation",
      "Google Workspace",
      "Office Productivity Tools",
    ],
  },

  "graphics-design": {
    title: "Graphics Design",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1400&q=80",
    description:
      "Learn how to create professional designs using industry tools like Photoshop, Coral Draw and Illustrator.",
    duration: "2 Months",
    level: "Beginner to Intermediate",
    projects: "8 Design Projects",
    outline: [
      "Adobe Photoshop",
      "Illustrator",
      "Brand Design",
      "Logo Creation",
      "Social Media Design",
    ],
  },

  "video-editing": {
    title: "Video Editing",
    image:
      "https://images.unsplash.com/photo-1574717024453-3540563a6c2d?auto=format&fit=crop&w=1400&q=80",
    description:
      "Learn modern video editing techniques using professional editing software.",
    duration: "2 Months",
    level: "Beginner",
    projects: "6 Video Projects",
    outline: [
      "Adobe Premiere Pro",
      "After Effects",
      "Color Grading",
      "Motion Graphics",
      "YouTube Video Editing",
    ],
  },

  "cyber-security": {
    title: "Cyber Security",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
    description:
      "Learn how to protect systems and networks from cyber attacks and security threats.",
    duration: "6 Months",
    level: "Intermediate",
    projects: "7 Security Labs",
    outline: [
      "Network Security",
      "Ethical Hacking",
      "Penetration Testing",
      "Security Tools",
      "Cyber Defense Strategies",
    ],
  },
};

export default function CourseDetails() {
  const { id } = useParams();
  const course = courseData[id];

  if (!course) {
    return (
      <h1 className="text-center text-2xl mt-20 font-semibold">
        Course not found
      </h1>
    );
  }

  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* HERO SECTION */}
      <div
        className="relative h-[420px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${course.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl font-bold mb-4">{course.title}</h1>
          <p className="text-lg text-gray-200">{course.description}</p>
        </div>
      </div>

      {/* COURSE INFO */}
      <div className="max-w-6xl mx-auto px-4 py-16">

        <div className="grid md:grid-cols-3 gap-6 mb-16">

          <div className="bg-slate-900 p-6 rounded-xl text-center border border-slate-700">
            <h3 className="text-xl font-semibold mb-2">Duration</h3>
            <p className="text-gray-300">{course.duration}</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl text-center border border-slate-700">
            <h3 className="text-xl font-semibold mb-2">Level</h3>
            <p className="text-gray-300">{course.level}</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl text-center border border-slate-700">
            <h3 className="text-xl font-semibold mb-2">Projects</h3>
            <p className="text-gray-300">{course.projects}</p>
          </div>

        </div>

        {/* COURSE OUTLINE */}
        <h2 className="text-3xl font-bold mb-8 text-center">
          Course Outline
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {course.outline.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 p-5 rounded-lg border border-slate-700 hover:border-blue-500 transition"
            >
              {item}
            </div>
          ))}

        </div>

        {/* ENROLL BUTTON */}
        <div className="text-center mt-16">
          <Link
            to="/enroll"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold transition"
          >
            Enroll Now
          </Link>
        </div>

      </div>

    </div>
  );
}