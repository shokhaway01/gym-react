import { useEffect, useState } from "react"
import React from 'react'
import { Box,Button,Stack,TextField,Typography } from "@mui/material"


// 
const SearchExercises = () => {
  return (
    <Stack
        alignItems={'center'}
        mt={'37px'}
        justifyContent={'center'}
        p={'20px'}
    >
        <Typography
            textAlign={'center'}
            fontWeight={'700'}
            sx={{fontSize:{lg:'44px',xs:'30px'}}}
            mb={'50px'}
>
            Awesome Exercises You <br/>Should Know
        </Typography>
        <Box position={'relative'} mb={'72px'}>
            <TextField
                sx={
                {
                    input:{
                        fontWeight:'700',
                        border:'none',
                        borderRadius:'5px'
                    },

                    width:{
                        lg:"800px",
                        xs:"350px"
                    },
                    backgroundColor:"#fff",
                    borderRadius:'40px'
                }
                }
                height='76px'
                value={''}
                onChange={(e)=>{}}
                placeholder="search exercises"
                type="text"
            />
            <Button className="search-btn"
                sx={
                    {
                        backgroundColor:"#ff2625",
                        color:'#fff',
                        textTransform:'none',
                        width:{
                            lg:'175px',
                            xs:'880px'
                        },
                        fontSize:{
                            lg:'20px',
                            xs:'14px'
                        },
                        height:'56px',
                        position:"absolute",
                        right:'0'
                    }
                }
            >
                Button
            </Button>
        </Box>
    </Stack>
  )
}

export default SearchExercises