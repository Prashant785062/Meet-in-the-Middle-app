import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Links() {
    return (
        <span className="flex flex-row gap-2">
            <a href="#" target="_blank"> <FacebookIcon className="hover:scale-110 size-7 hover:text-blue-600"/> </a>
            <a href="#" target="_blank"> <XIcon className="hover:scale-110 size-7 hover:text-black"/> </a>
            <a href="#" target="_blank"> <InstagramIcon className="hover:scale-110 size-7 hover:text-pink-500"/> </a>
            <a href="#" target="_blank"> <YouTubeIcon className="hover:scale-110 size-7.5 hover:text-red-500"/> </a>
            <a href="#" target="_blank"> <LinkedInIcon className="hover:scale-110 size-7 hover:text-blue-600"/> </a>       
        </span>
    )
}