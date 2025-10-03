import Img1 from "../assets/Img1.png";
import Img2 from "../assets/Img2.png";

export default function Features() {
  return (
    <section className="py-16 bg-gray-50" id="features-section">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-violet-700 mb-2">
          Features
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the powerful yet simple tools that make collaboration
          seamless. Our features are designed to save you time, keep everyone
          aligned, and make meetings more meaningful.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center mb-16">
        {/* Left: Image */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <img
            src={Img2}
            alt="Feature 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Smart Meeting Coordination
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Organize and schedule meetings effortlessly with our smart
            coordination tools. The app automatically suggests convenient
            meeting points for all participants, helping you avoid endless
            back-and-forth discussions. Invitations can be created and managed
            with just a few clicks, ensuring every participant stays informed
            and updated. Save time, reduce confusion, and focus on what truly
            matters — building meaningful connections and achieving goals.
          </p>
        </div> 
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Content */}
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Real-Time Collaboration
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Share notes, plan agendas, and track discussions all in one place.
            Our app provides a clean and organized space for every team member
            to contribute, making meetings more productive and engaging. With
            features designed for quick updates and collaborative input,
            everyone stays aligned before, during, and after your meetings.
            Whether it’s brainstorming ideas or summarizing key decisions, the
            platform ensures no detail is missed and your team always stays on
            the same page.
          </p>
        </div>
        {/* Right: Image */}
        <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-md">
          <img
            src={Img1}
            alt="Feature 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
