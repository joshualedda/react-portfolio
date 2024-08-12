const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-400 shadow-black shadow-lg mx-auto mt-8 md:px-12 p-6 rounded-tl-[30px] rounded-tr-[60px] rounded-bl-[100px] rounded-br-[40px] max-w-screen-2xl">
  <h2 className="mb-8 font-extrabold text-4xl text-center text-purple-300 md:text-5xl">
    Projects
  </h2>
  <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
    {[
      {
        title: "Project 1",
        img: "project1.png",
        description: "A brief description of Project 1.",
        githubLink: "https://github.com/username/project1",
      },
      {
        title: "Project 2",
        img: "project2.png",
        description: "A brief description of Project 2.",
        githubLink: "https://github.com/username/project2",
      },
      {
        title: "Project 3",
        img: "project3.png",
        description: "A brief description of Project 3.",
        githubLink: "https://github.com/username/project3",
      },
    ].map(({ title, img, description, githubLink }) => (
      <div key={title} className="bg-purple-700 shadow-md rounded-lg overflow-hidden">
        <img src={img} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="mb-2 font-bold text-white text-xl">{title}</h3>
          <p className="mb-4 text-gray-300">{description}</p>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-indigo-400 hover:text-indigo-300"
          >
            View on GitHub
          </a>
        </div>
      </div>
    ))}
</div>

    </div>
  )
}

export default Projects