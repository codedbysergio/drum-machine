import React from 'react'
import { current } from '@reduxjs/toolkit'

export default function SoundbankA() {
    
    return (
        <>
            <span className='soundbank-a active-sound' id='A'>A</span>
            <span className='soundbank-divider inactive-sound'>-</span>
            <span className='soundbank-b inactive-sound' id='B'>B</span>
        </>
    )

}