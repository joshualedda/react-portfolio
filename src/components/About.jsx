const About = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-purple-800 shadow-2xl mx-auto mt-8 p-8 md:p-16 rounded-3xl max-w-5xl text-gray-200">
      <h2 className="mb-8 font-extrabold text-4xl text-center text-purple-300 md:text-5xl">
        About Me
      </h2>
      <p className="mb-10 text-center text-gray-100 text-xl md:text-2xl leading-relaxed">
        Hi there! I'm <span className="font-bold text-purple-300">Edgie M. Alturas</span>,
        a dedicated Web Developer and UI/UX Designer who brings creativity and
        technical expertise together to craft digital experiences that are both
        visually captivating and highly functional.
      </p>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {[
          { skill: "Laravel", level: "70%", color: "bg-red-500" },
          { skill: "CodeIgniter", level: "65%", color: "bg-yellow-500" },
          { skill: "PHP", level: "85%", color: "bg-purple-500" },
          { skill: "MySQL", level: "80%", color: "bg-blue-500" },
          { skill: "Tailwind CSS", level: "72%", color: "bg-teal-500" },
          { skill: "Bootstrap", level: "80%", color: "bg-indigo-500" },
          { skill: "Canva", level: "65%", color: "bg-red-300" },
          { skill: "jQuery", level: "65%", color: "bg-blue-400" },
          { skill: "JavaScript", level: "60%", color: "bg-green-500" },
          { skill: "Figma", level: "65%", color: "bg-orange-500" },
          { skill: "React", level: "60%", color: "bg-blue-600" },
        ].map(({ skill, level, color }) => (
          <div key={skill} className="mb-6">
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-gray-100 text-lg">
                {skill}
              </span>
              <span className="font-semibold text-gray-100 text-lg">
                {level}
              </span>
            </div>
            <div className="bg-gray-700 rounded-full w-full h-6">
              <div
                className={`h-6 rounded-full ${color}`}
                style={{ width: level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
