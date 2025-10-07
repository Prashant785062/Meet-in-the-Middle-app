import { Link } from "react-router-dom";
import NotesIcon from "@mui/icons-material/Notes";
import Alert from "@mui/material/Alert";

export default function ProductsDropdown() {
  return (
  <div className="bg-white shadow-2xl z-50 w-[450px] rounded-lg border border-gray-300 p-2">
    <div className="grid grid-cols-2 gap-2 p-1">

      <Link
        to="/notes"
        className="flex flex-col items-start p-3 rounded-lg no-underline transition duration-200 bg-purple-100 border border-purple-700"
      >
        <NotesIcon className="text-purple-700 text-[30px] mb-1" />
        <h3 className="font-bold text-gray-900 text-[16px]">Quick Notes</h3>
        <p className="text-gray-500 text-sm">
          Coordinate and store short-term meeting notes.
        </p>
      </Link>

      <div className="col-span-2 mt-1 border border-blue-300 bg-blue-50 text-blue-800 p-2 rounded-md">
        <Alert severity="info" icon={false} className="bg-blue-50 p-0 m-0">
                  More products will be added after WebRTC and Socket integration. Stay tuned for further updates!
        </Alert>
      </div>

    </div>
  </div>
);
} 