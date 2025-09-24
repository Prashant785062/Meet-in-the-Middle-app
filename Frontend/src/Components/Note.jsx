import { IoWarning } from "react-icons/io5";

export default function Note( {NoteText} ) {
    return (
        <div>
            <IoWarning className="text-yellow-600"/>
            <p> <u> Note </u> - {NoteText} </p>
        </div>
    )
}
