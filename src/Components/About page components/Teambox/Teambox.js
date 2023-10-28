import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Teambox({ Name, src, position }) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 m-4 w-64">
            <div className="rounded-full overflow-hidden mx-auto">
                <img src={src} alt={Name} className="w-full h-full object-cover" />
            </div>
            <div className='text-left mt-4 border-b-1 py-3'>
                <h2 className='text-xl font-bold hover:text-slate-500 cursor-pointer'>{Name}</h2>
                <span className="text-gray-500">{position}</span>
                <p className="mt-2 text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse viverra mauris eget tortor imperdiet vehicula. 
                    Proin egestas diam ac mauris molestie hendrerit. Quisque nec nisi.
                </p>
            </div>
            <div className='py-2 flex justify-center space-x-2'>
                <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon />
                </a>
                <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon />
                </a>
                <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon />
                </a>
                <a href="https://www.linkedin.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
            </div>
        </div>
    );
}
