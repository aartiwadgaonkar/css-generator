import React, { useState } from 'react'

export default function Border() {
    const [bgcheckbox, setbgcheckbox] = useState(false)
    const [bg, setbg] = useState("#000")
    const [border, setborder] = useState()
    const [bordercolor, setbordercolor] = useState()
    const [borderwidth, setborderwidth] = useState()
    const [bordercheckbox, setbordercheckbox] = useState(false)
    let str = `${bgcheckbox ? `background-color:${bg}` : ""}`
    let borderdata = `${bordercheckbox ? `border:${border} bordercolor:${bordercolor} border-width:${borderwidth} ` : ""}`
    return (<>
        {str}
        {borderdata}
        <button onClick={e => navigator.clipboard.writeText(str)}>copy</button>
        <button onClick={e => navigator.clipboard.writeText(borderdata)}>copydata</button>
        <input type="checkbox" onChange={e => {
            setbgcheckbox(!bgcheckbox)
            setbg("#000")
        }} />
        <label htmlFor=""> background color</label>
        <input type="checkbox" onChange={e => {
            setbordercheckbox(!bordercheckbox)
            setborder("solid")
        }} />
        <label htmlFor="">border</label>
        {

            bordercheckbox &&
            <div>
                <input type="color" onChange={e => setbordercolor(e.target.value)} />
                <select class="form-select" onChange={e => setborder(e.target.value)}>
                    <option selected>borders</option>
                    <option value="dotted">Dotted</option>
                    <option value="dashed">dashed</option>
                    <option value="solid">solid</option>
                </select>
                <input type="range" min={1} max={5} value={borderwidth} onChange={e => setborderwidth(e.target.value)} />
            </div>
        }
        {

            bgcheckbox && <input type="color" onChange={e => setbg(e.target.value)}
            />
        }

        <div className="main">
            <div className="box" style={{
                backgroundColor: bgcheckbox ? bg : "transtparent", border: border, borderColor: bordercolor,
                borderWidth: borderwidth + "px"
            }} ></div>
        </div>
    </>
    )
}
