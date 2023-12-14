import ChickenCard from './ChickenCard';
import './ChickenCard.css'

function Teacher ({chickenTab}) {
    console.log(chickenTab);
    const teachIsBetter = chickenTab.filter(job => job.position.includes("Teacher"))
    console.log(teachIsBetter);


    return (
    <div className="cardContainer">
        {teachIsBetter.map((chicken ,index ) => (
            <ChickenCard key={index} chicken={chicken} />
        ))}
    </div> 
    )
}

export default Teacher