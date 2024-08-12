import Image from "../assets/images/image.png";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-indigo-800 shadow-black shadow-lg mx-auto mt-20 md:px-12 p-6 rounded-tl-[30px] rounded-tr-[60px] rounded-bl-[100px] md:rounded-bl-[180px] rounded-br-[40px] max-w-screen-2xl">
      <div className="flex md:flex-row-reverse flex-col justify-between items-center gap-10">
        <div>
          <img
            src={Image}
            alt="Web Development Illustration"
            className="shadow-md rounded-lg lg:h-[386px] transform transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-3 cursor-pointer"
          />
        </div>

        <div className="md:w-3/5">
          <h2 className="mb-6 font-bold text-4xl text-center text-white md:text-7xl leading-snug">
            Web Developer & UI/UX Designer
          </h2>
          <p className="mb-8 text-[#F0F0F0] text-2xl text-start leading-relaxed">
            I specialize in crafting visually stunning, user-friendly websites
            that deliver seamless digital experiences. With a deep understanding
            of both front-end development and design principles, I bridge the
            gap between functionality and aesthetics to create engaging,
            responsive web applications.
          </p>
          <div className="flex justify-center mt-8">
            <a
              href="#"
              download
              className="inline-block bg-gradient-to-r from-purple-600 hover:from-purple-500 to-indigo-600 hover:to-indigo-500 shadow-md hover:shadow-lg px-8 py-4 rounded-lg font-semibold text-lg text-white transition duration-300 ease-in-out"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
