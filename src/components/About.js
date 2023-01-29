import React from 'react';

const About = () => {
    return (
        <section className="bg- text-white px-5 py-32">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="about-info">
                    <h1 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
                        About Me
                    </h1>

                    <p className="pb-5">
                        "Hello There". My name is Matthew Waldron, most people call me Wally.
                        I am a lot of things. I am a front end devloper, a graphic desginer,
                        an artist, and huge nerd for all things Star Wars, Batman, and Zelda related.
                    </p>

                    <p className="pb-5">
                        "IT WAS SAID I WOULD JOIN A DEVELOPMENT TEAM, NOT FREELANCE!" I have many front end
                        skills that can be brought to the table. I love working in React, and have found that
                        Tailwind and React work much like a Jedi and their Apprenctance. As a Graphic Designer I
                        also understand that UI/UX is just as important as functionaltiy and can apply those aspects
                        to my work flow. I am also very familair with Bootstrap as well.
                    </p>

                    <p className="pb-5">
                        As most of my time is spent on the front end, I also am very familair with the back end as well
                        I know how to use Node.Js, Express.Js, MySQL, MongoDB, & Mongoose.
                    </p>

                    <p className="pb-5">
                        In my spare time I am either bouldering at a local rock climbing gym, reading, drawing, or nerding out
                        with the latest video game or tv show.
                    </p>

                    <p className="pb-5">
                        <h2>Summary</h2>
                        <ul>
                            <li>REACT</li>
                            <li>Tailwind</li>
                            <li>BootStrap</li>
                            <li>NodeJs</li>
                            <li>Express</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                        </ul>
                    </p>
                </div>
                <div>
                    <img src='/images/Profile.png' alt='image of person who made this site'></img>
                </div>
            </div>
        </section>
    )
}

export default About;