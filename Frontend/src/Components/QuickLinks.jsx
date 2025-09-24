import { Link } from "react-router-dom";

export default function QuickLinks({ name, to }) {
  return (
    <Link to={to} className="self-start no-underline hover:underline">
      {name}
    </Link>
  );
}
