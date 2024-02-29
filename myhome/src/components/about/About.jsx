import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"
//about component
const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />
            <p>We are primarily skilled and experienced in construction and real estate development. In order to tailor our products to meet the growing demand of today and tomorrow, as well as to better satisfy market requirements, we have expanded our business to become a key player in the field. Our expertise lies in the development and management of real estate construction and promotion activities, leveraging a network of professionals in studies and engineering.</p>
            <p>My Home is part of a Group, which consists of five companies linked by common interests. This affiliation enables us to offer specialized expertise in all aspects related to real estate</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About