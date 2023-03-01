import React, { useState } from 'react'

export default function Test() {
    const [bgCheckbox, setbgCheckbox] = useState(false)
    const [bg, setbg] = useState("#000")
    const [border, setborder] = useState({
        checked: false,
        width: "2px",
        style: "solid",
        color: "black"
    })
    let str = `
    {
        ${bgCheckbox ? `background-color: ${bg}` : ""}
        ${border.checked ? `border:${border.width}px ${border.style} ${border.color};` : ""}
    }
    `

    return <><div className='bg-black '>
        <div className="container ">
            <div className="row mt-5 mb-5 p-5">
                <div className="col-sm-3">
                    <div class="card">
                        <div class="card-body">


                            <input
                                type="checkbox" id='backcolor'
                                onChange={e => {
                                    setbgCheckbox(!bgCheckbox)
                                    setbg("#000")
                                }} />
                            <label htmlFor="backcolor">Back Color</label>
                        </div>
                        <hr />
                        <div className="card-body">

                            <div>

                                <input type="checkbox" onChange={e => setborder({ ...border, checked: !border.checked })} />
                                <label htmlFor="">Border</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 border border-white p-5 text-white">

                    {
                        bgCheckbox && <> <label htmlFor="form-label">Back Color</label>
                            <input className='form-control' type="color" onChange={e => setbg(e.target.value)} />
                            <hr />
                        </>
                    }
                    {
                        border.checked && <div>
                            <div>
                                <label className='form-label' htmlFor="bw">Width</label><div>

                                    <input className='w-100 bg-white form-range' type="range" min={0} max={50} id="bw" step={2} onChange={e => setborder({ ...border, width: e.target.value })} />

                                    <div className='d-flex justify-content-center'>{
                                        ` 0px ${border.width} 50px`}
                                    </div>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="border-style">choose style</label>
                                <div>

                                    <select className='form-control' id='border-style' onChange={e => setborder({ ...border, style: e.target.value })}>
                                        <option value="solid">Solid</option>
                                        <option value="dotted">Dotted</option>
                                        <option value="dashed">Dashed</option>
                                    </select>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="border-color">Choose Color</label>
                                <input type="color" id='border-color' className='form-control mt-2'
                                    onChange={e => setborder({ ...border, color: e.target.value })}
                                />
                            </div>
                        </div>
                    }
                </div>
                <div className="col-sm-3">
                    <div className="box" style={{
                        backgroundColor: bgCheckbox ? bg : "transparent",
                        border: border.checked ? `${border.width}px ${border.style} ${border.color}` : ""
                    }}>

                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="bg-dark text-white p-3 border border-white rounded">
                        <div className='d-flex justify-content-between'>

                            <p>Copy css</p>

                            <button className='btn btn-outline-primary'
                                onClick={e => navigator.clipboard.writeText(str)}> <i class="bi bi-clipboard"></i></button>
                        </div>
                        <pre>

                            {str}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
        {/* border */}
        {/* <input type="checkbox" onChange={e => setborder({ ...border, checked: !border.checked })} /> */}
        {/* <label htmlFor="">Border</label> */}
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
        {/* <div className="box" style={{
            backgroundColor: bgCheckbox ? bg : "transparent",
            border: border.checked ? `${border.width}px ${border.style} ${border.color}` : ""
        }}></div> */}
    </>
}
