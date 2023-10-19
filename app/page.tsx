import Image from 'next/image'
import { CeraCompact, CeraPro } from '@/components/fonts'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-2 bg-white">
      <div className='grid grid-cols-3 md:grid-cols-12 p-4 gap-2 w-full max-w-[100rem] bg-yellow-200'>

        <div className='col-span-3 col-start-1 md:col-start-2 py-20'>
          <h1 className={`${CeraCompact.className} font-bold text-green-700 text-4xl md:text-4xl`}>my works</h1>
          <div className="w-8 sm:w-12 h-[5px] sm:h-[7px] col-span-2 col-start-6 my-6 bg-kyle-dark"></div>
        </div>

        <div className='col-span-3 col-start-1 md:col-span-10 md:col-start-2 h-full'>
          <div className='w-full justify-center h-auto mb-36'>
            <div />
          </div>
        </div>

        <div className='col-span-3 col-start-1 md:col-span-12 md:col-start-1 h-full bg-green-700'>
          <div className='w-full justify-center h-auto mb-36'>
            <div />
          </div>
        </div>



      </div>
    </main>
  )
}
