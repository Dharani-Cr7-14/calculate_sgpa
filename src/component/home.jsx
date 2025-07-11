import kct_logo from '../assets/kct_logo.jpg'

export default function Home(){
    return(
        <>
        <section id='home' className=" bg-secondary font-hero-font md:font-bold  md:text-2xl">
          <div className="  flex   ">
             <div className='justify-evenly'>
                <img className='w-70 h-20 md:w-70 md:h-30 p-3' src={kct_logo} />
            </div>
            <div className="pb-3  md:m-5 md:w-1/4 md:mx-auto justify-center">
                <p>Kumaraguru College Of Technology</p>
                <p className="md:ml-18">SGPA Calculator</p>
                <p className="md:ml-6">Information Technology</p>
            </div>
            <div> 
                <p className='p-5'>Department Of  <br/> <span className='pt-4'>  Infomation Technology</span></p>
            </div>
           

           </div>
        </section>
        </>
    )
}