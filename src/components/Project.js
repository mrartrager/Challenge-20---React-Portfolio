import React from 'react';
// import Img from './playablePiano.png' 
const Project =()=>{
    const projects =[
        {
            img: '/images/playablePiano.png',
            title: 'Playable Piano',
            desc:'a mini piano than can be played from your computer keyboard',
            link:"https://mrartrager.github.io/Playable-Piano/",
            repo:"https://github.com/mrartrager/Playable-Piano",
        },
        {
            img: '/images/gameboxed.png',
            title: 'Gameboxed',
            desc:'A game website where users can create an account, review games, add favorite games to thier profile,',
            link:"https://gamebox.herokuapp.com/",
            repo:"https://github.com/WesleyLere/Gameboxd",
        },
        {
            img: '/images/horoscope.png',
            title: 'Horoscope',
            desc:'A website where users can search a date, find a list of famous people born that day, and see thier horoscope',
            link:"https://nwsheats.github.io/Sign-of-the-Times/",
            repo:"https://github.com/Nwsheats/Sign-of-the-Times",
        },
    ];

    return (
        <section>
        <div >
          <div >
            <h2 >
              Projects
            </h2>
  
            <p >
              These are some of my favorite projects. Some of them were built with a team of other
              developers, while some of them were created just buy me. But on all of them, I did the
              front end design. Most use tailwind framwork.
            </p>
          </div>
  
          <div></div>
        </div>
  
        <div>
          {projects.map((projects, i) => {
            return (
              <div>
                <img className='' src={ projects.img } alt={projects.title} />
                <div>
                  <p>
                    {projects.desc}
                  </p>
  
                  <div>
                    <a href={projects.link}>
                      Live
                    </a>
                    <br></br>
                    <a href={projects.repo}>
                      Repo
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
