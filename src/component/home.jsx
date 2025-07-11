import kct_logo from '../assets/kct_logo.jpg'

export default function Home(){
    return(
        <>
        <section id='home' className="bg-secondary font-hero-font font-bold text-lg md:text-2xl">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-4 md:gap-0 p-4 md:p-0">
            <div className='flex justify-center md:justify-evenly w-full md:w-auto'>
                <img className='w-40 h-16 md:w-70 md:h-30 p-3 object-contain' src={kct_logo} alt="KCT Logo" />
            </div>
            <div className="text-center md:text-left pb-3 md:m-5 md:w-1/4 md:mx-auto flex flex-col justify-center">
                <p>Kumaraguru College Of Technology</p>
                <p className="md:ml-18">SGPA Calculator</p>
                <p className="md:ml-6">Information Technology</p>
            </div>
            <div className="text-center md:text-left"> 
                <p className='p-2 md:p-5'>Department Of<br/><span className='block pt-2'>Information Technology</span></p>
            </div>
          </div>
        </section>
        </>
    )
}