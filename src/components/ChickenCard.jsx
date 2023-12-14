import './ChickenCard.css'

function ChickenCard ({chicken}) {
    return (
        <div className='card'>
            <img src={chicken.imgSrc} alt={chicken.name} />
            <div className='identification'>
                <h3>{chicken.name}</h3>
                <h4>{chicken.position}</h4>
                <p>{chicken.biography}</p>
            </div>
        </div>
    )
}

export default ChickenCard