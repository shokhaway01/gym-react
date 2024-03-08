import React from 'react'
import { Stack,Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'

const BodyPart = ({item,setBodyPart,bodyPart}) => {
    // console.log(item)
    console.log(bodyPart)
    return (
        <Stack
            type="button"
            alignItems={'center'}
            justifyContent={'center'}
            className='bodyPart-card'
            sx={
                bodyPart === item ? {
                    borderTop:'4px solid #ff2625',
                    backgroundColor:"#"
                } : {}
            }>
            <img src={Icon} alt='dumbbel' styles={
                {width:'40px',height:'40px'}
            }/>
        </Stack>
    )
}

export default BodyPart