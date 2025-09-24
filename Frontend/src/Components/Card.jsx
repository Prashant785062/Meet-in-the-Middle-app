export default function Card({ image, TextAbout, TextSaid }) {
  return (
    <div className="border border-gray-300 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform bg-white">
      <img src={image} className="h-[150px] w-full object-cover" />
      <div className="p-4">
        <p className="font-bold text-blue-800 mb-2">{TextAbout}</p>
        <p className="text-gray-600 text-sm">{TextSaid}</p>
      </div>
    </div>
  );
}
