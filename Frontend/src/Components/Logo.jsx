import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';

export default function Logo() {
  return (
    <>
      <div className="flex items-center gap-1">
        <LanguageSharpIcon className="text-blue-600 text-3xl" />
        <span className="text-2xl font-bold tracking-wide text-blue-600">
          Meet
        </span>
      </div>
    </>
  );
}
