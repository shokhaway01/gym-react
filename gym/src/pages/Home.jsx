import React, { useState } from 'react'
import { Box } from '@mui/material'

import Herobanner from '../components/Herobanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'



const Home = () => {
  return (
    <Box>
      <Herobanner />
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}

export default Home