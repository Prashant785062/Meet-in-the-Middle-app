import FaqIm from "../assets/faq.png";
import FaqContent from "../Components/FaqContent";

export default function FAQ() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 p-4 sm:p-6 md:p-10">
      <img
        src={FaqIm}
        alt="FAQ"
        className="w-full max-w-md sm:max-w-lg md:max-w-2xl h-auto object-contain"
      />
      <div className="w-full md:w-1/2">
        <FaqContent />
      </div>
    </div>
  );
}
