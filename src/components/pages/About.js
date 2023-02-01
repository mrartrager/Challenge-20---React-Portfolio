import React from 'react';

const About = () => {
    return (
        <section className="bg-gradient-to-b from-slate-700 to-neutral-50 text-slate px-5 py-32">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="about-info bg-gray-200 p-5 shadow-2xl rounded-2xl border-double border-4 border-sky-500">
                    <h1 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
                        About Me
                    </h1>

                    <p className="font-sans text-2xl pb-5">
                        "Hello There". My name is Matthew Waldron, commonly referred to as Wally. I am a multi-faceted individual with experience in front-end development, graphic design, and art. Additionally, I possess a strong passion for Star Wars, Batman, and Zelda.
                    </p>

                    <p className="font-sans text-2xl pb-5">
                        "IT WAS SAID I WOULD JOIN A DEVELOPMENT TEAM, NOT FREELANCE!"  My front-end skill set is vast and can be utilized to its fullest potential within a team environment. I have a particular affinity for React and have discovered that Tailwind and React work seamlessly together, much like a Jedi and their apprentice. As a graphic designer, I also understand the significance of user interface and user experience and strive to incorporate those elements into my workflow. Furthermore, I am well-versed in Bootstrap.
                    </p>

                    <p className="font-sans text-2xl pb-5">
                        Although my primary focus is on the front-end, I am also well-acquainted with the back-end, proficient in the use of Node.Js, Express.Js, MySQL, MongoDB, and Mongoose.
                    </p>

                    <p className="font-sans text-2xl pb-5">
                        In my leisure time, I enjoy rock climbing, reading, drawing, and immersing myself in the latest video games and television shows.
                    </p>

                    <p className="font-sans text-2xl pb-5">
                        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2 flex justify-items-center justify-cente">Summary</h2>
                        <ul className="flex flex-wrap p-5 m-5">
                            <li className="p-2 m-5 hover:shadow-lg hover:drop-shadow-lg hover:text-amber-700 font-bold cursor-pointer">REACT</li>
                            <li className="p-2 m-5 hover:shadow-lg hover:drop-shadow-lg hover:text-lime-700 font-bold cursor-pointer">Tailwind</li>
                            <li className="p-2 m-5 hover:shadow-lg hover:drop-shadow-lg hover:text-cyan-500 font-bold cursor-pointer">BootStrap</li>
                            <li className="p-2 m-5 hover:shadow-lg hover:drop-shadow-lg hover:text-violet-500 font-bold cursor-pointer">NodeJs</li>
                            <li className="p-2 m-5 hover:shadow-lg hover:drop-shadow-lg hover:text-rose-400 font-bold cursor-pointer">Express</li>
                            <li className="p-2 m-5 hover:shadow-lg hover:drop-shadow-lg hover:text-emerald-500 font-bold cursor-pointer">MySQL</li>
                            <li className="p-2 m-5 hover:shadow-lg hover:drop-shadow-lg hover:text-purple-600 font-bold cursor-pointer">MongoDB</li>
                            <li className="p-2 m-5 hover:shadow-lg hover:drop-shadow-lg hover:text-red-500 font-bold cursor-pointer">Mongoose</li>
                        </ul>
                    </p>
                </div>
                <div>
                    <img className='rounded-full m-10 p-10 blur-sm transition ease-in-out hover:blur-none hover:drop-shadow-2xl hover:rotate-[17deg] ' src={Profile} alt='image of person who made this site'></img>
                </div>
            </div>
        </section>
    )
}

export default About;