import React, { useState } from 'react'
import { Box } from '@mui/material'

import Herobanner from '../components/Herobanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'



const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExersices] = useState([])
  return (
    <Box>
      <Herobanner />
      <SearchExercises 
      setExersices={setExersices}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      />
      <Exercises
      setExersices={setExersices}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      />
    </Box>
  )
}

export default Home