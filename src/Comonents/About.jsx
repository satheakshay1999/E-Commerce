import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <div className="conatiner py-4 my-5 px-5">
            <div className="row">
                <div className="col-md-6"  >
                    <h1>About us </h1>
                    <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque blanditiis sint enim mollitia optio omnis hic assumenda laborum inventore nulla aperiam, consequuntur dolorum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, tempore omnis! Rerum deleniti voluptatum neque in sunt molestiae, voluptas molestias quidem omnis minima laborum sed aspernatur expedita, atque provident libero. Adipisci reprehenderit repellat, ipsum quos doloribus aperiam, enim recusandae quidem inventore quo consectetur, ipsam aliquam. Pariatur deserunt, eveniet impedit ipsum eius ex, culpa hic possimus fugit exercitationem ab recusandae totam commodi natus repudiandae? Veniam similique impedit cumque deserunt quia est deleniti. Magnam itaque molestiae ullam dolorum distinctio provident repellat laboriosam quasi veritatis dolor quod consequuntur ratione, labore dignissimos natus asperiores.
                    </p>
                    <NavLink to="/contact" className="btn btn-outline-info  d-flexjustify-content-center">Contact us </NavLink>
                </div>
                <div className='col-md-6 d-flex justify-content-center'>
                    <img src="/Pictures/about.jpg" alt="aboutimage"  height="300px" width="450px"></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About