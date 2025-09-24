
export default function PricingCard( {price, time, plans, text} ) {
    return (
        <div>
            <div> <p> <p> {price} </p> {time} </p> </div>
            <p> {plans} </p>
            <p> {text} </p>
        </div>
    )
}