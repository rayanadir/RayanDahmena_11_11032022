import './Tag.css'

const Tag = (tag) => {
    return(
        <div className="tag">
            <p className='tagName'>
                {tag.name}
            </p>
        </div>
    )
}

export default Tag