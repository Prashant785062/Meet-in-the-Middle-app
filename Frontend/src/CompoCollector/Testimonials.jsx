import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";

export default function Testimonials() {
  const testimonials = [
    { name: "Ankita Sharma, Founder of Kirodha", text: "This app is amazing! It helped us coordinate meetings without hassle. Finding a common meeting point used to be such a headache, but now it's effortless.", image: p1 },
    { name: "Ritik Verma, Co-founder of Brainspire", text: "I love how simple it is to set up meetings. Everyone gets the same midpoint, and no one feels left out. It has truly improved our team’s productivity.", image: p2 },
    { name: "John doe, CTO of Nexon Labs", text: "Meet in the Middle has completely changed how we collaborate. Earlier, deciding a location wasted hours, but now we can focus on what really matters—our projects.", image: p3 },
    { name: "Elizabeth Olsen, Project Lead at CloudArc", text: "The best tool for remote teamwork! Even when people join from different places, it helps us find balance and keeps meetings fair for everyone.", image: p4 },
    { name: "Harsh Patel, Founder of TaskNova", text: "This app made organizing group work so much easier. It saves us from constant back-and-forth arguments about where to meet. Highly recommended!", image: p5 },
    { name: "Pankaj Nair, Product Manager at Innovex", text: "I never realized how much smoother project management could be until we started using this. It has reduced our delays and improved our coordination.", image: p6 },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-violet-700">What People Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-base sm:text-lg">
          Hear from professionals and teams who rely on Meet in the Middle to simplify their collaboration and save time.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2 flex flex-col items-center text-center"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-28 h-28 sm:w-36 sm:h-36 object-cover mb-4 rounded-full"
            />
            <p className="text-gray-700 italic mb-4 text-sm sm:text-base">“{t.text}”</p>
            <h3 className="text-violet-700 font-semibold text-center text-sm sm:text-base">{t.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
