import memojiImage from '@/assets/images/memoji-computer.png';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import Image from 'next/image';

export const HeroSection = () => {
  return (
  <div className='py-32 '>
    <div className="container">

     <div className='flex items-center flex-col'>
     <Image src={memojiImage} alt="Person with laptop" className='size-[100px]'/>

     <div className='bg-gray-950 border border-gray-800 py-1.5 px-4 inline-flex items-center gap-4 rounded-lg'>
        <div className='bg-green-500 size-2.5 rounded-full'></div>
        <div className='text-sm font-medium'>Available for new projects</div>
     </div>
     </div>

     <h1 className='font-serif text-3xl text-center mt-8 tracking-wide'>Building Exceptional User Experiences</h1>
     <p className='mt-4 text-center text-white/60' style={{ letterSpacing: '0.00325em' }}>
  I specialize in transforming designs into functional, high-performing web applications. Lets discuss your next project.
</p>



     {/* <h1>Transforming Designs into Exceptional User Experiences</h1>
     <p>
      Whether you have a design in hand or just an idea, I can help you turn it into a functional, high-performing web application. Let's chat about your next project.
     </p> */}

     <div className='flex flex-col items-center mt-8 gap-4'>
        <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDown className='size-4'/>
        </button>
        <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
            <span>👋</span>
            <span className='font-semibold'>Let's Connect</span>
        </button>
     </div>
    </div>
  </div>
)};
