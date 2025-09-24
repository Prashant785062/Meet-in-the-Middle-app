import { FaCheckCircle } from "react-icons/fa";

export default function Features({feature}) {
    return (
        <li> <FaCheckCircle/> {feature }</li>
    )
}