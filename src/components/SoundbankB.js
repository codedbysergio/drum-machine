import React from 'react'
import { current } from '@reduxjs/toolkit'

export default function SoundbankB() {
    
    return (
        <>
            <span className='soundbank-a inactive-sound' id='A'>A</span>
            <span className='soundbank-divider inactive-sound'>-</span>
            <span className='soundbank-b active-sound' id='B'>B</span>
        </>
    )

}