import Link from "next/link";

const ContactLink = ({ href, title }) => {
    if(href, title){
        return (
            <Link href={href} target="_blank" rel="noopener noreferrer" 
            className="border-2 rounded-full border-black bg-gradient-radial from-purple-600 to-pink-500 duration-500 ease-in-out hover:scale-110">
              <span className="text-white text-2xl sm:text-xl p-3">{title}</span>
            </Link>
          );
    }
};

export default ContactLink;