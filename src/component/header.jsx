import { useState } from 'react';

export default function Header(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return(
        <>
         <section className="bg-indigo-400 font-hero-font relative" >
           <div className="flex justify-between items-center px-4 py-2">
              <div className=""> 
                <p className="ml-3 p-1">IT</p>
              </div>
               
               {/* Desktop Menu */}
               <div className="hidden md:flex p-1">
                <a href="#home" className="p-2 hover:text-white transition-colors">Home</a>
                <a href="#details" className="p-2 hover:text-white transition-colors">Details</a>
                <a href="#calculate" className="p-2 hover:text-white transition-colors">Calculate</a>
                <a href="#contact" className="p-2 hover:text-white transition-colors">Contact</a>
               </div>

               {/* Mobile Menu Button */}
               <div className="md:hidden">
                <button 
                    onClick={toggleMobileMenu}
                    className="p-2 focus:outline-none"
                    aria-label="Toggle mobile menu"
                >
                    <div className="w-6 h-6 flex flex-col justify-center items-center">
                        <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                        <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
                    </div>
                </button>
               </div>
           </div>

           {/* Mobile Menu */}
           <div className={`md:hidden absolute top-full left-0 right-0 bg-indigo-400 shadow-lg transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
               <div className="flex flex-col py-2">
                <a href="#home" onClick={closeMobileMenu} className="p-3 hover:bg-indigo-500 transition-colors">Home</a>
                <a href="#details" onClick={closeMobileMenu} className="p-3 hover:bg-indigo-500 transition-colors">Details</a>
                <a href="#calculate" onClick={closeMobileMenu} className="p-3 hover:bg-indigo-500 transition-colors">Calculate</a>
                <a href="#contact" onClick={closeMobileMenu} className="p-3 hover:bg-indigo-500 transition-colors">Contact</a>
               </div>
           </div>

         </section>
        </>
    )
}