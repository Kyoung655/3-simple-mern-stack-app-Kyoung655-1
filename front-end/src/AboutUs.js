import { Link } from 'react-router-dom'
import './AboutUs.css'

import { useState, useEffect } from 'react';

const AboutUs = (props) => {
  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/about-us')
        const data = await response.json()
        setAboutData(data)
      } catch (error) {
        console.error('Error fetching about data: ', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
    <h1>{aboutData?.content.title}</h1>
    <h3>{aboutData?.content.name}</h3>
    <img src={aboutData?.content.image} alt={aboutData?.content.imageAltText} />
    {aboutData?.content.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </>
  )
}

export default AboutUs




// import { Link } from 'react-router-dom'
// import './AboutUs.css'
// import imageForAboutUs from './image_for_About_Us.png'; 

// const AboutUs = props => {
//   return (
//     <>
//       <h1>ABOUT US</h1>
//       <div className="spacer">

//       </div>
//       <h3>Kim Young</h3>
//       <div className="spacer">

//       </div>

//       <div id="aboutUsImage">
//       <img src={imageForAboutUs} alt="me" />

//       </div>
      


//       <div className="spacer">

//       </div>
//       <p>
//         Hello, my name is Kim Young. I am a student at NYU majoring in Computer Science and am 
//         currently a senior. Some intersts I have in CS include software engineering, AI, and 
//         Machine Learning. Additionally, I have some experience with front end dev with HTML,
//         CSS, and Bootstrap. For my career developement I hope to eventually become a software 
//         engineer in the future and develop interesting and useful apps that solve pressing 
//         problems.
//     </p> 
//     <div className="spacer">

//     </div>
//     <p>
//         In my personal life, I have a few hobbies including cooking, crocheting, working out,
//         hanging with my friends, and shopping. Originally, I am from New Jersey-the northern part-
//         so even before I moved in my NYU dorm, I was regulary in the wonderful New York City. 
//         There is much to do here and I enjoy eating at restaurants, stumbling across an interesting
//         event, and being able to explore the many eye-cathing things here. 
//     </p>
//     </>
//   )
// }
// export default AboutUs

