import React from 'react';
import Piano from '../../images/playablePiano.png';
import Game from '../../images/gameboxed.png';
import Horoscope from '../../images/horoscope.png';


// import Img from './playablePiano.png' 
const Project = () => {
  const projects = [
    {
      img: {Piano},
      title: 'Playable Piano',
      desc: 'A mini piano than can be played from your computer keyboard',
      link: "https://mrartrager.github.io/Playable-Piano/",
      repo: "https://github.com/mrartrager/Playable-Piano",
    },
    {
      img: {Game},
      title: 'Gameboxed',
      desc: 'A game website where users can create an account, review games, add favorite games to thier profile,',
      link: "https://gamebox.herokuapp.com/",
      repo: "https://github.com/WesleyLere/Gameboxd",
    },
    {
      img: {Horoscope},
      title: 'Horoscope',
      desc: 'A website where users can search a date, find a list of famous people born that day, and see thier horoscope',
      link: "https://nwsheats.github.io/Sign-of-the-Times/",
      repo: "https://github.com/Nwsheats/Sign-of-the-Times",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-neutral-300 bg-cover to-neutral-50 p-10 rounded-3xl m-5 container mx-auto grid md:justify-between">
      <div className=" bg-gray-200 m-5 p-5 shadow-2xl rounded-2xl border-double border-4 border-sky-500" >
        <div >
          <h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2'>
            Projects
          </h2>

          <p className="font-sans text-2xl pb-5">
            The following are a selection of my most notable projects. Some were executed in collaboration with other developers, whereas others were independently completed by me. In all cases, I was responsible for the front-end design. The majority of these projects were developed utilizing the Tailwind framework.
          </p>
        </div>

        <div></div>
      </div>

      <div>
        {projects.map((projects, i) => {
          return (
            <div className='hover:shadow-2xl hover:drop-shadow-2xl  hover:scale-[.9] transition ease-in-out p-10 m-10 border-double border-4 rounded-2xl border-indigo-600'>
              <img className="border-solid border-8 rounded-2xl" src={projects.img} alt={projects.title} />
              <div className=''>
                <p className='font-sans text-2xl pb-5 m-5 p-5'>
                  {projects.desc}
                </p>

                <div className='cursor-pointer text-3xl' >
                  <a className=" hover:text-purple-500" href={projects.link}>
                    Live Link
                  </a>
                </div>
                <div className='cursor-pointer text-3xl'>
                  <a className=" hover:text-orange-400"href={projects.repo}>
                    Github Repo for project
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Project;
