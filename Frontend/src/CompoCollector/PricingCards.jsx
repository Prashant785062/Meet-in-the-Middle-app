import Button from '../Components/Button'
import PricingCard from '../Components/PricingCard'
import Features from '../Components/Features'

export default function PricingCards() {

    /* const [priceText1, setPriceText1] = useState("$0");
    const [priceText2, setPriceText2] = useState("Standard");
    const [priceText3, setPriceText3] = useState("Free"); */

    const [timeText1, setTimetText1] = useState("/monthly");

    const handleClick = () => {
    setTimetText1("/yearly"); 
    };

    return (
        <>
            {/* buttons */}
            <div>
                <Button onClick={handleClick} children="Monthly" className="rounded-full" />
                <Button onClick={handleClick} children="Yearly" className="rounded-full" />
            </div>

            <div>
                {/* card 1  */}

                <div className="rounded-xl">
                    <PricingCard price="" time={timeText1} plans="Free Plan" text="Basic features to get started quickly and easily" />
                    <Features feature="Real-Time Location Sharing" />
                    <Features feature="Screen Sharing" />
                    <Features feature="Online chat" />
                    <Features feature="Send & Receive Invitations" />
                    <Button children="Choose Plan" className="rounded-full" />
                </div>

                {/* card 2  */}
                <div className="rounded-xl">
                    <PricingCard price="" time={timeText1} plans="Standard Plan" text="More tools and support to grow efficiently" />
                    <Features feature="All Free Plan Features" />
                    <Features feature="Unlimited Invitations:" />
                    <Features feature="Enhanced Location Accuracy" />
                    <Features feature="Meeting recordings" />
                    <Features feature="Secure Login" />
                    <Button children="Choose Plan" className="rounded-full" />
                </div>

                {/* card 3  */}
                <div className="rounded-xl">
                    <PricingCard price="" time={timeText1} plans="Enterprise Plan" text="Advanced features for full control and flexibility" />
                    <Features feature="All Standard Plan Features" />
                    <Features feature="Advanced Analytics & Reports" />
                    <Features feature="Dedicated Support" />
                    <Features feature="Custom Workflows" />
                    <Features feature="Premium Experience" />
                    <Features feature="Unlimited Invitations" />
                    <Features feature="Responsive Design" />
                    <Button children="Choose Plan" className="rounded-full" />
                </div>

            </div>
        </>
    )
}