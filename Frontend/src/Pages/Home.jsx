import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import Button from '../Components/Button'
/* import Testimonials from "./Testimonials";
 */import Card from '../Components/Card'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import p5 from '../assets/p5.jpg'
import p6 from '../assets/p6.jpg'
import p7 from '../assets/p7.jpg'
import p8 from '../assets/p8.jpg'
import p9 from '../assets/p9.jpg'
import p10 from '../assets/p10.jpg'
import p11 from '../assets/p11.jpg'
import p12 from '../assets/p12.jpg'

export default function Home() {
  return (
    <>
    
    <div className="min-h-screen bg-teal-50 p-6">
      <h3 className="font-bold text-2xl text-center mb-8">See what others think... 😊</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="p-4" image={p1} TextAbout="Ankush Sharma, Founder of Kirodha" TextSaid="This app is amazing! It helped us coordinate meetings from different locations effortlessly. Our team productivity has gone up, and managing tasks has become so much smoother." />
        <Card className="p-4" image={p2} TextAbout="Ritika Verma, Co-founder of Brainspire" TextSaid="I love how simple it is to set up meetings with teammates. The app keeps everyone connected and helps us finish projects faster while staying motivated." />
        <Card className="p-4" image={p3} TextAbout="Vivek Yadav, CTO of Nexon Labs" TextSaid="Meet in the Middle has completely changed how we collaborate. It’s user-friendly and keeps the team spirit alive, no matter where we are working from." />
        <Card className="p-4" image={p4} TextAbout="Megha Singh, Project Lead at CloudArc" TextSaid="The best tool for remote teamwork! It helps us plan meetings without hassle and keeps track of discussions, boosting our efficiency." />

        <Card className=" -mt-6 z-0 hover:z-10" image={p5} TextAbout="Harsh Patel, Founder of TaskNova" TextSaid="This app made organizing group work so much easier. Now we can meet, plan, and execute tasks quickly, without unnecessary back-and-forth." />
        <Card className=" -mt-6 z-0 hover:z-10" image={p6} TextAbout="Priya Nair, Product Manager at Innovex" TextSaid="I never realized how much smoother project management could be until I started using this app. Meetings are quicker, and team coordina" />
        <Card className=" -mt-6 z-0 hover:z-10" image={p7} TextAbout="Rohan Gupta, CEO of SynergySoft" TextSaid="Meet in the Middle keeps us connected even when we are miles apart. It’s intuitive and helps us collaborate effectively, reducing delays." />
        <Card className=" -mt-6 z-0 hover:z-10" image={p8} TextAbout="Neha Joshi, Lead Developer at DevSpark" TextSaid="This app has simplified team communication. It helps us align our goals, schedule meetings easily, and stay productive throughout the project lifecycle." />

        <Card className="p-4" image={p9} TextAbout="Karan Malhotra, Operations Head at GridWorks" TextSaid="With this app, setting up meetings has become effortless. It encourages teamwork and helps us stay focused on completing tasks faster." />
        <Card className="p-4" image={p10} TextAbout="Simran Kaur, Entrepreneur at QuickStart" TextSaid="The app is a game-changer! Scheduling meetings is quick, and it really helps maintain team enthusiasm and productivity even in busy schedules." />
        <Card className="p-4" image={p11} TextAbout="Aditya Rao, Co-founder of BrightEdge" TextSaid="Using Meet in the Middle has streamlined how we collaborate. It’s easy to navigate and keeps our team on track for faster delivery." />
        <Card image={p12} TextAbout="Sonal Chauhan, Head of Marketing at NextGen Hub" TextSaid="Remote meetings feel personal and efficient, helping us stay aligned." />
        {/* Sticky button at the bottom corner */}
        <Link to='/testimonials'>
          <Button className="bg-blue-600 text-white hover:bg-white hover:text-blue-600 border-white border-2 hover:border-black flex items-center gap-2 px-6 py-3 rounded-full transition-colors">
            Go to Testimonials Page <FaArrowRight />
          </Button>
        </Link>
        </div>
        </div>
        <Link to='/subscription'>
          <Button className="bg-blue-600 text-white hover:bg-white hover:text-blue-600 border-white border-2 hover:border-black flex items-center gap-2 px-6 py-3 rounded-full transition-colors">
            Go to Subscription Page <FaArrowRight />
          </Button>
        </Link>

      
      </>
  )
}
