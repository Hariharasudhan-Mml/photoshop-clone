import "./slider.css";


const Slider=({min,max,value, handlechange})=>{

    return(
        <div className="slider">
            <input type="range" min={min} max={max} value={value} onChange={handlechange}/>
        </div>
    )
}


export default Slider;