import Button from "@mui/material/Button";

export default function Icon({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        className="rounded-full bg-blue-100 p- 
                   hover:bg-blue-200 hover:text-amber-300 
                   border border-black"
      >
        <Icon className="text-blue-600 group-hover:text-amber-300" />
      </Button>
      <span className="text-sm text-gray-700">{label}</span>
    </div>
  );
}
