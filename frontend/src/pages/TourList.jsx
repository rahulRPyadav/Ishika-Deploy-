import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Utensils, Camera, Car, ArrowRight, 
  Sparkles, Phone, MessageCircle, MapPin, Compass, ArrowLeft
} from 'lucide-react';
import axios from 'axios';
import { API_BASE_URL } from '../config/api';

const TourList = () => {
  const [tours, setTours] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  // TOP 5 DESTINATION CARDS
  const cityDestinations = [
    {
      id: 'Jaipur',
      name: 'Jaipur (Pink City)',
      tagline: 'Palaces, Grand Forts & Royal Heritage',
      places: 'Hawa Mahal, Jal Mahal, Nahargarh, Amer Fort, City Palace, Chokhi Dhani',
      img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=900',
      totalTours: 'Sightseeing Tours'
    },
    {
      id: 'Sikar',
      name: 'Sikar & Shekhawati',
      tagline: 'Spiritual Shyam Darshan & Ancient Havelis',
      places: 'Khatu Shyam Ji, Jeen Mata, Salasar Balaji, Harsh Parvat, Laxmangarh',
      img: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=900',
      totalTours: 'Darshan Tours'
    },
    {
      id: 'Udaipur',
      name: 'Udaipur',
      tagline: 'City of Pristine Lakes & Royal Romance',
      places: 'Lake Pichola, City Palace, Jag Mandir, Sajjangarh Palace, Fateh Sagar',
      img: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=900',
      totalTours: 'Lake Tours'
    },
    {
      id: 'Jodhpur',
      name: 'Jodhpur',
      tagline: 'The Blue City & Royal Bastions',
      places: 'Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace, Mandore',
      img: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?q=80&w=900',
      totalTours: 'Heritage Tours'
    },
    {
      id: 'Pushkar',
      name: 'Pushkar & Ajmer',
      tagline: 'Holy Brahma Temple, Desert Safari & Sacred Dargah',
      places: 'Brahma Temple, Pushkar Lake, Desert Dunes, Ajmer Sharif Dargah',
      img: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=900',
      totalTours: 'Pilgrimage Tours'
    }
  ];

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/tours`)
      .then(res => {
        if (res.data) {
          setTours(res.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching tours:", err);
      });
  }, []);

  const openCityTours = (cityId) => {
    setSelectedCity(cityId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToCities = () => {
    setSelectedCity(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeCityTours = tours.filter(t => (t.city || 'Jaipur').toLowerCase() === (selectedCity || '').toLowerCase());
  const currentCityMeta = cityDestinations.find(c => c.id === selectedCity);

  // --- VIEW 2: SINGLE CITY TOURS LIST ---
  if (selectedCity) {
    return (
      <div className="bg-[#F8FAFC] min-h-screen font-sans pb-16 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#34A99D]/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        <div className="absolute top-96 right-10 w-96 h-96 bg-[#E5CB90]/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
          <button 
            onClick={backToCities}
            className="inline-flex items-center gap-2 text-slate-700 hover:text-[#34A99D] active:scale-95 mb-6 font-extrabold text-xs sm:text-sm bg-white px-4 py-2.5 rounded-2xl border border-slate-200 shadow-xs transition cursor-pointer"
          >
            <ArrowLeft size={16} /> Back to All Destinations
          </button>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#34A99D]/20 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[#34A99D] font-black text-xs uppercase tracking-wider mb-1.5">
                <MapPin size={16} />
                <span>Selected Destination Hub</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {currentCityMeta ? currentCityMeta.name : selectedCity} Tour Packages
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                {currentCityMeta ? currentCityMeta.tagline : ''} • Private AC Cabs & Sightseeing
              </p>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <a 
                href="tel:+917891604638" 
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 bg-[#FFF3C8] text-[#458393] border border-[#E5CB90] px-4 py-3 rounded-2xl text-xs font-black hover:bg-[#E5CB90] transition shadow-xs"
              >
                <Phone size={14} /> Call: +91 7891604638
              </a>
              <a 
                href={`https://wa.me/917891604638?text=${encodeURIComponent(`Hi Ishika Travels, I am inquiring about tour packages in ${selectedCity}`)}`}
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-2xl text-xs font-black transition shadow-sm"
              >
                <MessageCircle size={14} /> WhatsApp Inquiry
              </a>
            </div>
          </div>

          {activeCityTours.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-lg mx-auto">
              <p className="text-slate-600 font-bold text-sm mb-4">No tour packages listed for {selectedCity} yet.</p>
              <a 
                href={`https://wa.me/917891604638?text=${encodeURIComponent(`Hi, I want a custom tour package for ${selectedCity}`)}`}
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 bg-[#34A99D] text-white px-6 py-3 rounded-xl font-black text-xs"
              >
                Request Custom Plan on WhatsApp
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {activeCityTours.map((tour) => (
                <div 
                  key={tour._id} 
                  className="bg-white rounded-3xl overflow-hidden border border-[#34A99D]/20 shadow-sm hover:shadow-2xl hover:border-[#34A99D] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={tour.image} 
                      alt={tour.title} 
                      className="w-full h-full object-cover block group-hover:scale-105 transition duration-500" 
                    />
                    <div className="absolute top-3.5 left-3.5 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-xl">
                      {tour.duration}
                    </div>
                    <div className="absolute top-3.5 right-3.5 bg-[#FFF3C8] text-[#458393] text-[10px] font-black px-2.5 py-1 rounded-lg border border-[#E5CB90]/60 uppercase">
                      {tour.city || selectedCity}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-black text-slate-900 text-base mb-1.5 group-hover:text-[#34A99D] transition-colors leading-snug">
                        {tour.title}
                      </h3>
                      <p className="text-slate-500 text-xs font-medium mb-4 flex items-start gap-1.5">
                        <MapPin size={15} className="text-[#34A99D] shrink-0 mt-0.5" />
                        <span>{tour.location}</span>
                      </p>

                      <div className="grid grid-cols-4 gap-1 py-2.5 border-y border-slate-100 mb-4 text-center">
                        <div className="flex flex-col items-center">
                          <Building2 size={14} className="text-[#34A99D] mb-0.5" />
                          <span className="text-[10px] text-slate-500 font-bold">Stays</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Utensils size={14} className="text-[#34A99D] mb-0.5" />
                          <span className="text-[10px] text-slate-500 font-bold">Meals</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Camera size={14} className="text-[#34A99D] mb-0.5" />
                          <span className="text-[10px] text-slate-500 font-bold">Guide</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Car size={14} className="text-[#34A99D] mb-0.5" />
                          <span className="text-[10px] text-slate-500 font-bold">AC Cab</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-100">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase text-slate-400 block -mb-0.5">Rate Estimate</span>
                        <span className="text-xs font-black text-[#34A99D]">Best Quote on Call</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <a 
                          href={`https://wa.me/917891604638?text=${encodeURIComponent(`Hi Ishika Travels, I want to book/inquire about: ${tour.title} (${selectedCity})`)}`}
                          target="_blank" 
                          rel="noreferrer" 
                          className="p-2.5 bg-green-50 text-green-600 hover:bg-green-600 hover:text-white rounded-xl transition shadow-xs"
                          title="Chat on WhatsApp"
                        >
                          <MessageCircle size={15} />
                        </a>
                        <Link 
                          to={`/tours/${tour.slug || tour._id}`}
                          className="inline-flex items-center gap-1.5 bg-[#458393] hover:bg-[#34A99D] text-white text-xs font-extrabold px-3.5 py-2.5 rounded-xl transition active:scale-95 shadow-xs"
                        >
                          <span>View Details</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // --- VIEW 1: ALL CITIES MAIN CARDS ---
  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans pb-16 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#34A99D]/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-96 right-10 w-96 h-96 bg-[#E5CB90]/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16">
        
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 bg-[#FFF3C8] border border-[#E5CB90]/60 px-4 py-1.5 rounded-full text-[#458393] text-xs font-black tracking-widest uppercase mb-3 shadow-xs">
            <Sparkles size={13} className="text-[#34A99D]" />
            <span>EXPLORE BY REGION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Explore Top <span className="text-[#34A99D]">Tour Destinations</span>
          </h1>

          <p className="text-slate-500 text-xs sm:text-sm font-medium max-w-lg mx-auto leading-relaxed">
            Click on any destination below to view all local sightseeing spots, sacred pilgrimage routes, and custom cab packages.
          </p>
        </div>

        {/* --- Destination Cards --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cityDestinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() => openCityTours(dest.id)}
              className="relative rounded-3xl overflow-hidden cursor-pointer h-96 transition-all duration-300 flex flex-col justify-between p-6 group border border-slate-200 shadow-md hover:shadow-2xl hover:border-[#34A99D] hover:-translate-y-1.5"
            >
              <img
                src={dest.img}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>

              <div className="relative z-10 flex justify-between items-center">
                <span className="bg-black/40 backdrop-blur-md text-[#FFF3C8] text-[11px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider border border-white/20 shadow-xs">
                  {dest.totalTours}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white leading-tight mb-1">
                  {dest.name}
                </h3>

                <p className="text-xs text-[#FFF3C8] font-bold mb-2">
                  {dest.tagline}
                </p>

                <p className="text-[11px] text-slate-200 font-medium mb-5 line-clamp-2">
                  <strong className="text-white">Spots:</strong> {dest.places}
                </p>

                <button
                  onClick={() => openCityTours(dest.id)}
                  className="w-full bg-[#34A99D] group-hover:bg-[#458393] active:scale-95 text-white font-black py-3 rounded-2xl text-xs flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <span>Explore {dest.id} Tours</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- Custom Tour Banner --- */}
        <div className="mt-12 bg-gradient-to-r from-[#458393] to-[#34A99D] rounded-3xl p-6 sm:p-10 text-white shadow-xl overflow-hidden relative">
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-16 w-48 h-48 bg-[#FFF3C8]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl mx-auto text-center space-y-4 relative z-10">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-2xl mb-1 border border-white/10 shadow-sm">
              <Compass className="w-8 h-8 text-[#FFF3C8]" />
            </div>

            <h2 className="text-xl sm:text-3xl font-black tracking-tight">
              Want to travel somewhere else?
            </h2>

            <p className="text-slate-100 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-medium">
              Agar aapki manpasand jagah ya customized route website par listed nahi hai, toh koi baat nahi! Hume direct call ya WhatsApp karke apna customized package plan kar sakte hain.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
              <a
                href="tel:+917891604638"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFF3C8] hover:bg-white text-slate-900 font-black px-6 py-3.5 rounded-2xl text-xs sm:text-sm transition duration-300 shadow-md active:scale-95"
              >
                <Phone size={16} className="text-[#458393]" />
                <span>Call Us: +91 7891604638</span>
              </a>

              <a
                href={`https://wa.me/917891604638?text=${encodeURIComponent("Hi Ishika Tour & Travels, I want to plan a custom tour package for a destination not listed on your website.")}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 font-black px-6 py-3.5 rounded-2xl text-xs sm:text-sm transition duration-300 backdrop-blur-md active:scale-95"
              >
                <MessageCircle size={16} className="text-green-300" />
                <span>WhatsApp Custom Plan</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TourList;