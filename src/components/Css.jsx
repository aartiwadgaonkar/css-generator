import React, { useState } from 'react'

export default function Css() {
    const [backcolor, setbackcolor] = useState(false)
    const [bg, setbg] = useState("#000")
    const [boxborder, setboxborder] = useState(false)
    const [bordercolor, setbordercolor] = useState("#000")
    const [borderstyle, setborderstyle] = useState("solid")
    const [bordersize, setbordersize] = useState("2px")
    const [boxheight, setboxheight] = useState("20px")
    const [boxwidth, setboxwidth] = useState("20px")
    // console.log(bg);
    let str = `
    ${backcolor ? `background-color: ${bg}` : ""}
    ${boxborder ? `height: ${boxheight} px` : ""}
    `


    return <>
        {str}<button onClick={e => navigator.clipboard.writeText(str)}>Copy</button>
        <div style={{
            display: "flex",
            justifyContent: "spaceBetween"
        }}>
            <div>
                <input type="checkbox" onChange={e => {
                    setbackcolor(!backcolor)
                    setbg("#000")
                }} />

                <label htmlFor="" >Change Color</label>
                {
                    backcolor && <>
                        <label htmlFor="">Box color</label>
                        <input type="color"
                            onChange={e => setbg(e.target.value)}
                        />
                        <hr />
                        <label htmlFor="">Box Height</label>
                        <input type="range" min={20} max={400} onChange={e => setboxheight(e.target.value)} />
                        <hr />
                        <label htmlFor="">Box width</label>
                        <input type="range" min={20} max={400} onChange={e => setboxwidth(e.target.value)} />
                    </>
                }
                <hr />
                {/* border */}
                <input type="checkbox" onChange={e => {
                    setboxborder(!boxborder)
                }} />
                <label htmlFor="" >Border</label>
                {
                    boxborder && <>
                        <label htmlFor="">Border Color</label>
                        <input type="color"
                            onChange={e => setbordercolor(e.target.value)}
                        />
                        <hr />
                        <label htmlFor="">Border Style</label>
                        <select onChange={e => setborderstyle(e.target.value)}>
                            <option value="solid">solid</option>
                            <option value="dotted">dotted</option>
                            <option value="dashed">dashed</option>
                            <option value="double">double</option>
                        </select>
                        <hr />
                        <label htmlFor="">Border Size</label>
                        <input type="range" min={1} max={10} onChange={e => setbordersize(e.target.value)} />
                    </>
                }


            </div>
            <div className="main">
                <div className="box" style={{
                    backgroundColor: backcolor ? bg : "transparent",
                    height: backcolor ? boxheight + "px" : "none",
                    width: backcolor ? boxwidth + "px" : "none",
                    borderColor: boxborder ? bordercolor : "none",
                    borderStyle: boxborder ? borderstyle : "none",
                    borderWidth: boxborder ? bordersize + "px" : "none",
                }}>
                </div>
            </div>
        </div>
    </>
}

{/* {str} <button className='btn btn-outline-primary'
            onClick={e => navigator.clipboard.writeText(str)}> <i class="bi bi-clipboard"></i></button><hr /> */}
{/* <input
            type="checkbox" id='backcolor'
            onChange={e => {
                setbgCheckbox(!bgCheckbox)
                setbg("#000")
            }} />
        <label htmlFor="backcolor">Choose Back Color</label> */}
{/* {
            bgCheckbox && <input type="color" onChange={e => setbg(e.target.value)} />
        } */}
{/* border */ }
{/* <input type="checkbox" onChange={e => setborder({ ...border, checked: !border.checked })} /> */ }
{/* <label htmlFor="">Border</label> */ }
{/* {
            border.checked && <div>
                <div>
                    <input type="range" min={0} max={50} id="bw" step={2} onChange={e => setborder({ ...border, width: e.target.value })} />
                    <label htmlFor="bw">Width</label>
                </div>
                <div>
                    <select id='border-style' onChange={e => setborder({ ...border, style: e.target.value })}>
                        <option value="solid">Solid</option>
                        <option value="dotted">Dotted</option>
                        <option value="dashed">Dashed</option>
                    </select>
                    <label htmlFor="border-style">choose style</label>
                </div>
                <div>
                    <input type="color" id='border-color'
                        onChange={e => setborder({ ...border, color: e.target.value })}
                    />
                    <label htmlFor="border-color">Choose Color</label>
                </div>
            </div>
        } */}
// <hr />
{/* <div className="box" style={{
            backgroundColor: bgCheckbox ? bg : "transparent",
            border: border.checked ? `${border.width}px ${border.style} ${border.color}` : ""
        }}></div> */}