import { useEffect, useState } from "react"
import React from 'react'
import { Box,Button,Stack,TextField,Typography } from "@mui/material"
import { exerciseOptions,fetchData } from "../utils/fetchData"



const SearchExercises = () => {

const [search,setSearch] = useState('');

const handleSearch = async () => {
    if(search){
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/', exerciseOptions);
        console.log(exercisesData)
        
        const searchedExercises = exercisesData.filter(
            () => exerciseOptions.name.toLowerCase().includes(search)
        )
    }else{
        console.log("Error is ocured")
    }
}

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
                value={search}
                onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
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
                onClick={handleSearch}
            >
                Button
            </Button>
        </Box>
    </Stack>
  )
}

export default SearchExercises