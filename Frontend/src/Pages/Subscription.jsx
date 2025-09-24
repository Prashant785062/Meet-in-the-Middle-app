import Note from "../Components/Note"
import PricingCards from "../Components/PricingCard"

export default function Subscription() {
    return (
        <>
         <div>
                <p> Plans & Pricing </p>
                <p> From handling simple tasks to managing complex workflows, our plans are thoughtfully designed to 
                    help you optimize your processes, save valuable time, and grow your projects with ease and efficiency. </p>
            </div>
         
        <PricingCards />
            

        <Note NoteText="This pricing page is currently a learning demonstration. 
                        The plans and features listed are illustrative and may not reflect live services. 
                        I am actively updating and refining this section as I continue developing my project. 
                        Full functionality and detailed offerings will be implemented in future versions."/>

                        </>
    )
}