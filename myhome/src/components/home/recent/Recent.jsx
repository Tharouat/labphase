import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Whether you are a first-time buyer, seasoned investor, or simply looking for a change of scenery, our diverse range of listings offers endless possibilities. So, start your search today and find the perfect place to call home.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent