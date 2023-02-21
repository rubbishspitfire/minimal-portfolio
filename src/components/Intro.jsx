import React from "react";

function Intro() {
    return (
        <div className="flex items-center 
        justify-center flex-col text-center pt-20 
        pb-6">
            <h1 className="text-4xl md:text-7xl mb-1
            md:mb-3 font-bold">Patience Condell</h1>
            <p className="text-base md:text-xl mb-3
            font-medium">Software Engineer & Web Developer</p>
            <p className="text-sm max-w-xl mb-6
            font-bold">I'm an atlanta-based full-stack developer and an enthusiast creator building my
            version of the digital world one step at a time. All coding projects
            are built from the ground up, from planning
            and designing all the way to solving real-life problems with code. 
            <br />  
            Currently, I am a graduate student at Kennesaw State University, 
            where I major in Cybersecurity. In my freetime, I like to play video games, watch anime, 
            read various books and listen to music.</p>
        </div>
    )
}

export default Intro;