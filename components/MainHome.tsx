import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
      <main className="px-8 sm:px-12 md:px-24 flex flex-col justify-center items-center lg:items-center pt-32 pb-16 lg:pb-24 gap-y-6 lg:flex-row gap-x-4 lg:gap-x-12"> 
        <div className="flex flex-col gap-4 lg:gap-y-32 xl:gap-y-[14rem]">
          <div>
            <h1 className="text-2xl font-bold mb-2 lg:mb-4 xl:text-5xl">Welcome to <br />DecentraRead!</h1>
            <p className="xl:text-xl">Buy, explore, and enjoy books directly from authors—powered by Web3!</p>
          </div>
          <Link href="/books">
            <button className="text-xl font-medium italic mt-3">Explore Books <span className="ml-3 ">&rarr;</span></button>
          </Link>
        </div>

        <div className='lg:grow lg:shrink lg:basis-[60rem]' >
          <Image
            src="/images/Book.png"
            alt="DecentraRead"
            width={400}
            height={370}
            className='lg:h-[529.85px]'
            />
        </div>      
        <div className="flex flex-col gap-4 text-center lg:text-start lg:gap-y-32 xl:gap-y-80">
          <h1 className="text-2xl font-bold mb-2 xl:text-3xl">Your Gateway to Decentralized Reading</h1>
          <p className="xl:text-xl">A Web3-based digital library platform connecting readers and authors directly without intermediaries.</p>
        </div>
      </main>
  );
}
