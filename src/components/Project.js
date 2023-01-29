import React from 'react';

const Project =()=>{
    const projects =[
        {
            img: 'Playable Piano',
            title: 'Playable Piano',
            desc:'a mini piano than can be played from your computer keyboard',
            link:"https://mrartrager.github.io/Playable-Piano/",
            repo:"https://github.com/mrartrager/Playable-Piano",
        },
        {
            img: 'Gameboxed',
            title: 'Gameboxed',
            desc:'A game website where users can create an account, review games, add favorite games to thier profile,',
            link:"https://gamebox.herokuapp.com/",
            repo:"https://github.com/WesleyLere/Gameboxd",
        },
        {
            img: 'Horoscope',
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
          {projects.map((project, i) => {
            return (
              <div>
                <img src={project.img} alt={project.title} />
                <div>
                  <p>
                    {project.desc}
                  </p>
  
                  <div>
                    <a href={project.live}>
                      Live
                    </a>
                    <a href={project.code}>
                      Code
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
