import React from 'react'
import Body from '../Components/HomePage/Body/Body'
import SimpleSlider from '../Components/HomePage/Logos/Logos'
import RightContainer2 from '../Components/HomePage/RightContainer2'
import TopSearch from '../Components/HomePage/TopSearch'

const HomePage = () => {
  return (
    <div>
      <TopSearch/>
      <RightContainer2/>
      <SimpleSlider/>
      <Body/>
    </div>
  )
}

export default HomePage