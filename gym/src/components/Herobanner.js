import React from 'react'
import { Box,Stack,Typography,Button } from "@mui/material"
import HerobannerImage from '../assets/images/banner.png'

const Herobanner = () => {
  return (
    <Box sx={
        {
        mt: {
            lg: '212px',
            xs:'70px'
           },
    
        ml: {
            sm:'50px'
        }
        
        }
    } position="relative" p="20px">
        <Typography 
        color="#FF2625"
        fontWeight="600"
        fontSize="26px"
        >
            Fitness Club
        </Typography>

        <Typography 
        fontWeight="680"
        sx={
            {
                fontSize: {
                    lg: '44px',
                    xs: '40px'
                }
            }
        }
        mb={'23px'}
        mt={'30px'}
       >
            Sweat, Smile <br/> and Repeat
        </Typography>

        <Typography fontSize="22px" lineHeight="35px" mb={4}>
            Check out the most effective exercises
        </Typography>


        <Button variant='contained' color='error' href='#exercises'
            sx={
                {
                    backgroundColor:'#FF2526',
                    padding:'15px',
                }
            }
        >
            Explore Exercises
        </Button>
        
        <Typography
            fontWeight={700}
            color="#ff2625"
            fontSize={'200px'}
            letterSpacing={'4px'}
            sx={
                {
                    opacity:0.1,
                    display:{
                        lg:'block',
                        xs:'none'
                    }
                }
            }
        >
            Exercises
        </Typography>
        <img src={HerobannerImage} alt='banner' className='hero-banner-img'/>

    </Box>
  )
}

export default Herobanner