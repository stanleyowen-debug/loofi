import React, { useState, useEffect } from 'react'
import { IconButton } from '@material-ui/core'
import { ChevronLeft, ChevronRight } from '../lib/icons.component'

const Navbar = ({ properties, handleChange }: any) => {
    const [property, setProperty] = useState({
        disablePrevious: true,
        disableForward: true
    })

    useEffect(() => {
        setProperty({
            disablePrevious: properties.previousTab ? false : true,
            disableForward: properties.nextTab ? false : true
        })
    }, [properties])

    const goBackward = () => handleChange({ id: 'activeTab', value: properties.previousTab, goBackward: true })
    const goForward = () => handleChange({ id: 'activeTab', value: properties.nextTab, goForward: true })

    return (
        <div className="navbar">
            <div className="mrl-10"><IconButton onClick={goBackward} disabled={property.disablePrevious} title="Go Back"><ChevronLeft /></IconButton></div>
            <div className="mrl-10"><IconButton onClick={goForward} disabled={property.disableForward} title="Go Forward"><ChevronRight /></IconButton></div>
        </div>
    )
}

export default Navbar