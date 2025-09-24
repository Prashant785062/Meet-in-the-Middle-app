import FaqImage from "../Components/FaqImage";
import FaqContent from "../Components/FaqContent";

export default function FAQ() {
  return (
    <div className="flex flex-row">
    <FaqImage className="w-1/2"/>
    <FaqContent className="w-1/2"/>
    </div>
  )
}