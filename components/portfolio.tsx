import { dataPortfolio } from '@/data';
import Title from './shared/title';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
const Porfolio = () => {
    return ( 
        <div className="p-4 max-w-4xl nd:py-24 mx-auto" id="portfolio">
            <Title title='Portfolio' subtitle='Trabajos recientes 💻' />
            <br />
            <div className='grid md:grid-cols-3 gap-14 mt-4 '>
                {dataPortfolio.map((data) => (
                    <div key={data.id}>
                        <h3 className='text-xl mb-4'>{data.title}</h3>
                        <Image src={data.image} alt='Image' width={300} height={300} className='rounded-2xl w-full' />

                        <div className='mt-5 flex gap-5'>
                            <Link className={buttonVariants({ variant: "outline"})} target='_blank' href={data.urlGithub}>
                            Github
                            </Link>
                            <Link className={buttonVariants({})} target='_blank' href={data.urlDemo}>
                            Live demo
                            </Link>
                        </div> 
                    
                    </div>
                ))}
            </div>
        </div>        
    );
}
 
export default Porfolio;