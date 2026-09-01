import React, { useState, useEffect } from 'react';
import { 
  Star, ChevronLeft, ChevronRight, Sparkles, 
  ShieldCheck, ThumbsUp, MapPin, User
} from 'lucide-react';

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Ghanshyam Sharma",
      designation: "Mansarovar, Jaipur",
      review: "Booked Ertiga cab for family trip to Khatu Shyam Ji & Jeen Mata. Chauffeur arrived right on time, vehicle was spotless, and driving was safe throughout the highway.",
      rating: 5
    },
    {
      name: "Pooja Shekhawat",
      designation: "Vaishali Nagar, Jaipur",
      review: "Clean AC Dzire taxi for 2-day Jaipur sightseeing. Driver guided us well at Amer Fort, Jal Mahal and City Palace without any rushing. Highly recommended!",
      rating: 5
    },
    {
      name: "Mahaveer Prasad Jain",
      designation: "Fatehpur Road, Sikar",
      review: "We regularly hire cabs from Ishika Travels for Salasar Balaji and Jaipur trips. Most reasonable tariff, transparent billing and verified humble drivers.",
      rating: 5
    },
    {
      name: "Dr. Arvind Menaria",
      designation: "Hiran Magri, Udaipur",
      review: "Booked Innova Crysta for Udaipur to Nathdwara and Kumbhalgarh tour. Comfortable seating, chilling AC and honest pricing with zero hidden charges.",
      rating: 5
    },
    {
      name: "Suresh Rathore",
      designation: "Ratanada, Jodhpur",
      review: "Took outstation cab from Jodhpur to Ramdevra temple. Punctual pickup at 5:00 AM and zero toll/parking confusion at the trip end. Superb service.",
      rating: 5
    },
    {
      name: "Sunita Choudhary",
      designation: "Talwandi, Kota",
      review: "Travelled Kota to Jaipur Airport with my daughter for an early morning flight. Felt completely safe and secure. Chauffeur was polite and respectful.",
      rating: 5
    },
    {
      name: "Vikram Singh Bhati",
      designation: "Sadul Ganj, Bikaner",
      review: "Overnight trip from Bikaner to Khatu Shyam Ji darshan. The driver was alert, vigilant on highway and car AC and suspension were excellent.",
      rating: 5
    },
    {
      name: "Anjali Mathur",
      designation: "Civil Lines, Ajmer",
      review: "Best taxi package for Pushkar desert safari and Brahma temple. Fast booking confirmation on WhatsApp within 5 minutes. Very smooth experience!",
      rating: 5
    },
    {
      name: "Mukesh Khandelwal",
      designation: "Khatipura, Jaipur",
      review: "Took a Tempo Traveller for 12 family members to Ranthambore Safari. Clean pushback seats, good music system and courteous professional driver.",
      rating: 5
    },
    {
      name: "Deepak Saini",
      designation: "Neem Ka Thana, Sikar",
      review: "Very reasonable tariff compared to local taxi stands. Driver stopped at good hygienic dhabas for tea breaks. Vehicle condition was super fresh.",
      rating: 5
    },
    {
      name: "Kavita Agarwal",
      designation: "Shastri Nagar, Bhilwara",
      review: "Hired Sedan for Udaipur lake tour & shopping. Driver was polite and assisted senior citizens with temple stairs. Wonderful hospitality!",
      rating: 5
    },
    {
      name: "Rajendra Meena",
      designation: "Malviya Nagar, Jaipur",
      review: "Transparent bill with proper receipt for official corporate travel. No unexpected night driver fees or extra parking charges.",
      rating: 5
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerView = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, reviews.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-6 sm:py-12 bg-[#F8FAFC] relative overflow-hidden font-sans select-none">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-5 w-48 sm:w-80 h-48 sm:h-80 bg-[#34A99D]/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-5 w-48 sm:w-72 h-48 sm:h-72 bg-[#E5CB90]/15 rounded-full blur-[70px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-xl mx-auto mb-4 sm:mb-7">
          <div className="inline-flex items-center space-x-1.5 bg-[#FFF3C8] border border-[#E5CB90]/60 px-3 py-0.5 rounded-full text-[#458393] text-[10px] sm:text-xs font-black tracking-widest uppercase mb-1.5 shadow-2xs">
            <Sparkles size={11} className="text-[#34A99D]" />
            <span>CLIENT EXPERIENCES</span>
          </div>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Loved By <span className="text-[#34A99D]">Rajasthan's</span> Travelers
          </h2>

          <p className="text-slate-500 text-xs sm:text-sm font-medium mt-1 max-w-md mx-auto">
            Real feedback from devotees, tourists, and families exploring Rajasthan.
          </p>
        </div>

        {/* COMPACT TRUST HIGHLIGHTS BAR (Single Row on Mobile) */}
        <div className="bg-white p-2.5 sm:p-4 rounded-2xl sm:rounded-3xl border border-[#34A99D]/20 shadow-2xs mb-5 sm:mb-8 max-w-3xl mx-auto grid grid-cols-3 divide-x divide-slate-100 items-center">
          
          <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-1 sm:gap-2.5 px-1 sm:px-3">
            <div className="bg-[#FFF3C8] text-[#a88a42] p-1.5 sm:p-2 rounded-xl shrink-0">
              <Star size={14} fill="currentColor" stroke="none" />
            </div>
            <div>
              <p className="text-[11px] sm:text-sm font-black text-slate-900 leading-tight">4.9 / 5.0</p>
              <p className="text-[9px] sm:text-[11px] text-slate-400 font-medium hidden sm:block">1,500+ Reviews</p>
              <p className="text-[8px] text-slate-400 font-semibold sm:hidden">Rating</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-1 sm:gap-2.5 px-1 sm:px-3">
            <div className="bg-[#34A99D]/10 text-[#34A99D] p-1.5 sm:p-2 rounded-xl shrink-0">
              <ThumbsUp size={14} />
            </div>
            <div>
              <p className="text-[11px] sm:text-sm font-black text-slate-900 leading-tight">100% Cabs</p>
              <p className="text-[9px] sm:text-[11px] text-slate-400 font-medium hidden sm:block">Clean & Verified</p>
              <p className="text-[8px] text-slate-400 font-semibold sm:hidden">Verified</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-1 sm:gap-2.5 px-1 sm:px-3">
            <div className="bg-[#458393]/10 text-[#458393] p-1.5 sm:p-2 rounded-xl shrink-0">
              <ShieldCheck size={14} />
            </div>
            <div>
              <p className="text-[11px] sm:text-sm font-black text-slate-900 leading-tight">Fixed Rates</p>
              <p className="text-[9px] sm:text-[11px] text-slate-400 font-medium hidden sm:block">No Hidden Cost</p>
              <p className="text-[8px] text-slate-400 font-semibold sm:hidden">Best Price</p>
            </div>
          </div>

        </div>

        {/* STANDARD CAROUSEL */}
        <div className="relative px-0 sm:px-10 mb-6">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="hidden sm:flex absolute -left-2 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-[#34A99D] text-slate-700 hover:text-white p-2.5 rounded-full shadow-md border border-slate-200/80 hover:border-[#34A99D] transition-all duration-300 cursor-pointer active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-slate-700"
            aria-label="Previous Review"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-[#34A99D] text-slate-700 hover:text-white p-2.5 rounded-full shadow-md border border-slate-200/80 hover:border-[#34A99D] transition-all duration-300 cursor-pointer active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-slate-700"
            aria-label="Next Review"
          >
            <ChevronRight size={18} />
          </button>

          {/* Viewport */}
          <div className="overflow-hidden py-1 px-0.5">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {reviews.map((rev, index) => (
                <div 
                  key={index}
                  className={`px-1.5 sm:px-3 shrink-0 ${isMobile ? 'w-full' : 'w-1/3'}`}
                >
                  {/* CARD DESIGN */}
                  <div className="relative bg-white rounded-3xl pt-2.5 pb-4 px-4 sm:px-5 shadow-xs border border-slate-200/80 hover:shadow-lg hover:border-[#34A99D]/40 transition-all duration-300 flex flex-col justify-between min-h-[235px] sm:min-h-[250px]">
                    
                    {/* Top Ribbon & Clean User Avatar */}
                    <div className="flex items-start justify-between -mx-4 sm:-mx-5 -mt-2.5 mb-2.5">
                      
                      {/* Left Ribbon */}
                      <div className="bg-gradient-to-r from-[#458393] to-[#34A99D] text-white py-1.5 pl-4 pr-5 rounded-br-2xl rounded-tl-2xl shadow-2xs max-w-[72%]">
                        <h4 className="font-black text-xs sm:text-sm leading-tight truncate">
                          {rev.name}
                        </h4>
                        <p className="text-[10px] text-[#FFF3C8] font-semibold truncate flex items-center gap-1 mt-0.5">
                          <MapPin size={9} className="shrink-0 text-[#E5CB90]" />
                          <span className="truncate">{rev.designation}</span>
                        </p>
                      </div>

                      {/* Right Default Universal Avatar */}
                      <div className="pr-3 pt-1">
                        <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-br from-[#FFF3C8] to-[#E5CB90]/40 ring-2 ring-[#34A99D]/20 shadow-2xs flex items-center justify-center text-[#458393] border border-white">
                          <User size={18} className="sm:w-5 sm:h-5" strokeWidth={2.2} />
                        </div>
                      </div>

                    </div>

                    {/* Review Body with Accent Bar */}
                    <div className="flex gap-2.5 items-start pl-0.5">
                      <div className="w-1 self-stretch bg-[#34A99D] rounded-full shrink-0"></div>

                      <div className="flex-1">
                        {/* 5-Star Ratings */}
                        <div className="flex items-center space-x-0.5 mb-1.5 text-[#a88a42]">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={12} 
                              fill={i < rev.rating ? "currentColor" : "none"} 
                              stroke={i < rev.rating ? "none" : "#CBD5E1"} 
                            />
                          ))}
                        </div>

                        {/* Review Content */}
                        <p className="text-slate-600 text-xs font-medium leading-relaxed italic line-clamp-4">
                          "{rev.review}"
                        </p>
                      </div>

                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile-Only Arrow Navigation */}
          <div className="flex sm:hidden justify-center items-center gap-3 mt-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="bg-white text-slate-700 p-2 rounded-full shadow-xs border border-slate-200 active:scale-90 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous Review"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="bg-white text-slate-700 p-2 rounded-full shadow-xs border border-slate-200 active:scale-90 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next Review"
            >
              <ChevronRight size={16} />
            </button>
          </div>

        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex justify-center items-center gap-1.5 mb-6 sm:mb-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx 
                  ? 'w-5 bg-[#34A99D]' 
                  : 'w-1.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* BOTTOM BRAND TAGLINE */}
        <div className="text-center relative z-10">
          <div className="inline-block relative">
            <span className="font-serif italic text-[#34A99D] font-bold text-xs sm:text-base tracking-wide">
              Trusted by 1,500+ families across Rajasthan. ♡
            </span>
            <svg className="w-full h-1.5 sm:h-2 text-[#E5CB90] absolute -bottom-1 left-0" viewBox="0 0 300 12" fill="none">
              <path d="M2 8 C 80 2, 220 12, 298 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;