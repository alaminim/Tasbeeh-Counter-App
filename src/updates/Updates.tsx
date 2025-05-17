import { useState, useEffect } from "react";
import { Bell, Send, Sparkles } from "lucide-react";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 0
  });

  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Handle subscription form submit
 // ...existing code...
// Handle subscription form submit
const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (email.trim() !== "") {
    setIsSubscribed(true);
    setEmail("");
    // Here you would normally send this to a backend API
  }
};
// ...existing code...

  // Update countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              } else {
                // Countdown complete
                clearInterval(timer);
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Pulse animation for avatar
  const [isPulsing, setIsPulsing] = useState(false);
  
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 3000);
    
    return () => clearInterval(pulseInterval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-700 via-yellow-800 to-blue-950 text-white p-4">
      {/* Animated sparkles */}
      <div className="absolute top-10 left-10">
        <Sparkles className="text-yellow-300 animate-pulse" size={24} />
      </div>
      <div className="absolute bottom-20 right-10">
        <Sparkles className="text-yellow-300 animate-pulse" size={24} />
      </div>
      
      {/* Container */}
      <div className="max-w-md w-full bg-black bg-opacity-30 backdrop-blur-lg rounded-xl p-8 flex flex-col items-center shadow-2xl border border-white border-opacity-10">
        {/* Avatar section */}
        <div className={`relative mb-8 ${isPulsing ? 'animate-pulse' : ''}`}>
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-lg">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center relative overflow-hidden">
              {/* Abstract avatar face */}
              <div className="absolute w-16 h-8 bg-white rounded-full top-8 opacity-20"></div>
              <div className="absolute w-3 h-3 bg-white rounded-full top-10 left-10"></div>
              <div className="absolute w-3 h-3 bg-white rounded-full top-10 right-10"></div>
              <div className="absolute w-6 h-2 bg-white rounded-full top-16 opacity-40"></div>
              
              {/* Animated rings */}
              <div className="absolute w-full h-full border-4 border-white border-opacity-10 rounded-full animate-ping"></div>
              <div className="absolute w-36 h-36 border-2 border-purple-300 border-opacity-20 rounded-full animate-pulse"></div>
            </div>
          </div>
          {/* Notification icon */}
          <div className="absolute -right-2 -top-2 bg-pink-500 p-2 rounded-full shadow-lg animate-bounce">
            <Bell size={18} />
          </div>
        </div>
        
        {/* Text content */}
        <h1 className="text-3xl font-bold mb-2 text-center">Coming Soon</h1>
        <p className="text-lg text-pink-200 mb-6 text-center">Our exciting new features will launching soon!</p>
        
        {/* Countdown timer */}
        <div className="grid grid-cols-4 gap-2 w-full mb-8">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white bg-opacity-10 rounded-lg w-full py-2 px-1 text-center backdrop-blur-sm border border-white border-opacity-5">
                <span className="text-2xl font-bold">{String(item.value).padStart(2, '0')}</span>
              </div>
              <span className="text-xs mt-1 text-gray-300">{item.label}</span>
            </div>
          ))}
        </div>
        
        {/* Notification form */}
        {!isSubscribed ? (
          <form onSubmit={handleSubscribe} className="w-full mb-6">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className="flex-grow py-2 px-4 rounded-l-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-purple-600 py-2 px-4 rounded-r-lg hover:opacity-90 transition-opacity flex items-center"
              >
                <Send size={18} className="mr-2" />
                Notify Me
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-green-500 bg-opacity-20 border border-green-300 border-opacity-30 rounded-lg p-3 w-full mb-6 text-center">
            <p>Thank you! We'll notify you when we launch.</p>
          </div>
        )}
        
        {/* Footer */}
        <div className="flex items-center gap-4 pt-2 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
      
      {/* Social links */}
      <div className="mt-8 flex gap-4">
        {["twitter", "instagram", "facebook"].map((social) => (
          <a 
            key={social} 
            href="#" 
            className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all"
          >
            <span className="text-sm uppercase">{social[0]}</span>
          </a>
        ))}
      </div>
    </div>
  );
}