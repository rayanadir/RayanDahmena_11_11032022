import '../thumb/Thumb.css'

const Thumb = (data) =>{
    return (
        <div className="thumb">
            <img src={data.cover} alt="logo" className="thumbImg"/>
            <p className="thumbTitle"> {data.name} </p>
        </div>
    )
}

export default Thumb