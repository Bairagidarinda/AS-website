import React from 'react';
import { Home, Menu, X, Youtube, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';
import abhishek from './assets/abhishek.jpg';

import budhayan from './assets/budhayan.jpg';
import dhruv from './assets/dhruv.jpg';

import samyak from './assets/samyak.jpg';
import rdx from './assets/rdx.jpg';
import lakshya from './assets/lakshya.jpg';


// All Members Data
const allMembers = [
  {
    name: "Dhruv Saxena",
    image: dhruv,
    instagram: "https://instagram.com/dhruvsaxena",
    linkedin: "https://linkedin.com/in/dhruvsaxena",
  },
  {
    name: "Abhishek Panwar",
    image: abhishek,
    instagram: "https://instagram.com/abhishekpanwar",
    linkedin: "https://linkedin.com/in/abhishekpanwar",
  },
  {
    name: "Ashish",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60",
    instagram: "https://instagram.com/ashish",
    linkedin: "https://linkedin.com/in/ashish",
  },
  {
    name: "Rudraksh Srimalli",
    image: rdx,
    instagram: "https://instagram.com/rudrakshsrimalli",
    linkedin: "https://linkedin.com/in/rudrakshsrimalli",
  },
  {
    name: "Lakshya Yadav",
    image: lakshya,
    instagram: "https://instagram.com/lakshyayadav",
    linkedin: "https://linkedin.com/in/lakshyayadav",
  },
  {
    name: "Utkarsh Kumar",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
    instagram: "https://instagram.com/utkarshkumar",
    linkedin: "https://linkedin.com/in/utkarshkumar",
  },
  {
    name: "Budhayan",
    image: budhayan,
    instagram: "https://instagram.com/budhayan",
    linkedin: "https://linkedin.com/in/budhayan",
  },
  {
    name: "Vihan",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60",
    instagram: "https://instagram.com/vihan",
    linkedin: "https://linkedin.com/in/vihan",
  },
  {
    name: "Ansuman Sahu",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
    instagram: "https://instagram.com/ansumansahu",
    linkedin: "https://linkedin.com/in/ansumansahu",
  },
  {
    name: "Samyak Jain",
    image: samyak,
    instagram: "https://instagram.com/samyakjain",
    linkedin: "https://linkedin.com/in/samyakjain",
  },
  {
    name: "Priyanshu",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60",
    instagram: "https://instagram.com/priyanshu",
    linkedin: "https://linkedin.com/in/priyanshu",
  },
];

// YouTube Channels
const youtubeChannels = [
  {
    name: "AS Asla Tech",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Technical content and tutorials"
  },
  {
    name: "AS Asla Vlogs",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Daily life and events at AS Asla"
  }
];

// Clubs Data
const clubs = [
  {
    name: "MDG Space",
    description: "Mobile Development Group - Sab karte hain par dhang se kuch nahi",
    icon: "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "DSG",
    description: "Data Science Group - Phodu club",
    icon: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Cinema Club",
    description: "Want theatre vibes? Come to convocation hall, we have something for you.",
    icon: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "CDC",
    description: "Career Development Cell - Kuch nhi hota idhar",
    icon: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "STC",
    description: "Student Technical Council - HEAVY POLIBAAZI",
    icon: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "RMS",
    description: "IIT ROORKEE Motorsports - par ek designer aur ek ex-member",
    icon: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
  },

];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Home className={`h-6 w-6 mr-2 ${scrolled ? 'text-blue-600' : 'text-white'}`} />
              <span className={`font-bold text-xl ${scrolled ? 'text-blue-600' : 'text-white'}`}>AS Asla</span>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden ${scrolled ? 'text-blue-600' : 'text-white'}`}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {['Home', 'Members', 'YouTube', 'Clubs'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative group ${scrolled ? 'text-gray-800' : 'text-white'}`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={`md:hidden pb-4 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              <a href="#intro" className="block py-2 hover:text-blue-400">Home</a>
              <a href="#members" className="block py-2 hover:text-blue-400">Members</a>
              <a href="#youtube" className="block py-2 hover:text-blue-400">YouTube</a>
              <a href="#clubs" className="block py-2 hover:text-blue-400">Clubs</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Background */}
      <section id="intro" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform hover:scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-white text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">Welcome to AS Asla</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-2xl mx-auto animate-slide-up">
            A vibrant community of talented individuals working together to create a home away from home
          </p>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-20 px-4 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Members</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {allMembers.map((member, index) => (
              <div key={index} className="text-center group transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 overflow-hidden rounded-full ring-4 ring-blue-100 group-hover:ring-blue-400 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{member.name}</h3>
                <div className="flex justify-center space-x-4">
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" 
                     className="text-pink-600 hover:text-pink-700 transform hover:scale-110 transition-transform duration-300">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:text-blue-700 transform hover:scale-110 transition-transform duration-300">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Channels Section */}
      <section id="youtube" className="py-16 px-4 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">Our YouTube Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {youtubeChannels.map((channel, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl border border-gray-100">
                <div className="flex items-center mb-4">
                  <Youtube className="h-8 w-8 text-red-600 mr-3 animate-pulse" />
                  <h3 className="text-xl font-semibold">{channel.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 hover:text-red-700 group"
                >
                  Visit Channel
                  <Youtube className="h-4 w-4 ml-2 transform group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section id="clubs" className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Our Clubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl border border-gray-100">
                <div className="relative">
                  <img
                    src={club.icon}
                    alt={club.name}
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{club.name}</h3>
                  <p className="text-gray-600">{club.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 AS Asla Hostel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;