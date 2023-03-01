import React, { useState } from 'react'
import { motion } from 'framer-motion'
import "./Basic.css"
export default function Box() {
    const [rotateValue, setrotateValue] = useState(0)
    const [up, setup] = useState(0)
    const [left, setleft] = useState(0)
    // const rotateAnimate = {
    //     start: { rotate: rotateValue },

    // }
    const direction = {
        start: { y: up, x: left }

    }
    const hideNshow = {
        hide: { opacity: 0.5, rotate: 45 },
        show: { opacity: 1, rotate: 0, scale: [1, 2, 1] }

    }
    return (<>
        {/* <button type="button" onClick={e => setrotateValue(pre => pre + 25)} class="btn btn-primary">rotate</button> */}
        <button type="button" onClick={e => setup(pre => pre - 25)} class="btn btn-primary">Up</button>
        <button type="button" onClick={e => setleft(pre => pre + 25)} class="btn btn-primary">Right</button>
        <button type="button" onClick={e => setleft(pre => pre - 25)} class="btn btn-primary">Left</button>
        <button type="button" onClick={e => setup(pre => pre + 25)} class="btn btn-primary">Bottom</button>
        <div className="vh-100 d-flex justify-content-center align-items-center">
            {/* <motion.div className='box' animate={{ scale: 2, rotate: 180, borderRadius: "50%" }} transition={{ duration: 2 }}> */}
            {/* <motion.div className='box'

            animate={{ scale: [1, 2, 2, 1, 1], rotate: [0, 180, 0, 180, 0], borderRadius: ["0%", "50%", "0%", "50%", "0%"] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}>

        </motion.div> */}
            {/* <motion.div className='box' whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }}>

        </motion.div> */}
            {/* <motion.div class="card" initial={{ opacity: 0 }}
            animate={{ y: '-10px', opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>

            <div class="card-header">header</div>
            <div class="card-body">body</div>
            <div class="card-footer">footer</div>
        </motion.div> */}
            {/* <motion.div class="card text-dark" variants={hideNshow} initial="hide" whileHover={"show"}>
            <div class="card-header">header</div>
            <div class="card-body">body</div>
            <div class="card-footer">footer</div>
        </motion.div> */}
            {/* <motion.button className='btn btn-primary' variants={hideNshow} initial="hide" whileHover={"show"}>hello</motion.button>
        <motion.button className='btn btn-danger' variants={hideNshow} initial="hide" whileHover={"show"}>hello1</motion.button> */}
            {/* <motion.div className='box' variants={rotateAnimate} animate="start"></motion.div> */}
            <motion.div className='box' variants={direction} animate="start"></motion.div>
        </div>
    </>
    )
}
