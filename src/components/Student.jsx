import ChickenCard from './ChickenCard';
import './ChickenCard.css'

function Student ({chickenTab}) {
    console.log(chickenTab);
    const studIsBetter = chickenTab.filter(job => job.position.includes("Student"))


    return (
    <div className="cardContainer">
        {studIsBetter.map((chicken ,index ) => (
            <ChickenCard key={index} chicken={chicken} />
        ))}
    </div> 
    )
}

export default Student