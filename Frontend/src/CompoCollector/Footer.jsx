import Links from "../Components/Links";
import QuickLinks from "../Components/QuickLinks";
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <footer className="w-full bg-blue-950 text-white py-8 overflow-x-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                
                {/* About Section */}
                <div className="ml-1">
                    <p className="mb-4 text-sm pb-1">
                        “Meet in the Middle helps you effortlessly organize meetings by suggesting convenient and accessible locations. 
                        It saves time, improves coordination, and ensures that everyone can easily join without hassle.” ~ Prashant
                    </p>
                    <Links />
                </div>

                <div className="ml-10">
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li><QuickLinks name="Home" to="./" /> </li>
<li><QuickLinks name="About Us" to="/aboutUs" /></li>
<li><QuickLinks name="Products" to="/#" /></li>

<li><QuickLinks name="FAQ" to="/faq" /></li>

                        

                        

                        

                    </ul>
                </div>

                {/* Legal Links */}
                <div>
                    <h3 className="font-semibold mb-2">Legal Links</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li> <QuickLinks name="Privacy Policy" to="/privacypolicy" /></li>
                        <li><QuickLinks name="Terms of Service" to="/termsofservice" /> </li>
                        

                        

                    </ul>
                </div>

                {/* Support & Feedback */}
                <div>
                    <h3 className="font-semibold mb-2">Support & Feedback</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li><QuickLinks name="example@gmail.com" /></li>
                        <li><QuickLinks name="Phone:" /> 91617356923</li>
                        <li><QuickLinks name="Feedback" to="/feedback" /> </li>
                        <li> <QuickLinks name="Support" to="/support" /></li>
                        

                       

                    </ul>
                </div>
            </div>

            <div className="mt-5 border-t border-gray-700 -pt-9 pt-5 text-center text-sm text-gray-300 flex justify-center items-center gap-1">
                <CopyrightIcon fontSize="small" />
                <span>2025 Meet in the Middle</span>
                <span className="mx-1 text-2xl">•</span>
                <span>All rights reserved.</span>
            </div>
        </footer>
    );
}
