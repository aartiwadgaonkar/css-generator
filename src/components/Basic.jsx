import React, { useState } from 'react'
import "./Basic.css"
import { motion } from "framer-motion"
export default function Basic() {
    const [scale, setscale] = useState(1)
    const [borderRadius, setborderRadius] = useState(0)
    const [rotate, setrotate] = useState(180)
    const [color, setcolor] = useState("red")
    return <>
        <h1>Welcome to Framer Motion</h1>
        <label htmlFor="">Scale</label>
        <input type="range" min={0} max={5} value={scale} onChange={e => setscale(e.target.value)} />
        <hr />
        <label htmlFor=""> Border Radius</label>
        <input
            type="range"
            min={0}
            max={50}
            value={borderRadius}
            onChange={e => setborderRadius(e.target.value)} />

        <hr />
        <label htmlFor="">Rotate</label>
        <input
            type="range"
            min={-180}
            max={180}
            value={rotate}
            onChange={e => setrotate(e.target.value)}
        />
        <hr />
        <label htmlFor="">Change Color</label>
        <input type="color" onChange={e => setcolor(e.target.value)} />

        <div className='main'>

            <motion.div
                animate={{ scale: scale, rotate: rotate + "deg" }}
                whileHover={{ backgroundColor: color, }}
                transition={{ duration: 1 }}
                className='box'
                style={{ borderRadius: borderRadius + "%", borderColor: color, backgroundColor: color }}
            >

            </motion.div>
        </div>

    </>
}