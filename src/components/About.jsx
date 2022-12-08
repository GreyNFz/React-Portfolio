import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full bg-gradient-to-b from-red-800 via-red-500 to-red-600 text-white"
    >
      <div className="text-center max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        {/* My name is Naveen Fonseka, and I've been studying a degree in software engineering for almost two years. I built a website using the MERN stack, java, and other fundamental languages. When I was designing websites, I paid special attention to the user interface (UI). */}
        </p>

        <br />

        <p className="text-xl">
        When I was eighteen, I spent nearly all of my free time working on projects for friends, school, or personal enjoyment. Now that I'm twenty-three, I've decided to pursue my degree in Interactive Media while also looking for work in a web design studio or a well-established IT firm. I primarily use Adobe Photoshop Illustrator, but I am eager to expand my knowledge of other software programs.
        </p>
      </div>
    </div>
  );
};

export default About;
