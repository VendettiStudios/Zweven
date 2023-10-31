import Image from 'next/image';
import s from './Hero.module.css';
import { Bebas_Neue, Roboto } from 'next/font/google';
const bebas_neue = Bebas_Neue({ weight: ['400'], subsets: ['latin'] })
const roboto = Roboto({style:['normal'], weight: ['300'], subsets: ['latin'] });

type Props = {}
const Hero = (props: Props) => {
    return (
        <div>
            <Image
            className={s.Image}
                src="/Hero.jpeg" 
                alt="Hero Image" 
                width={1200} 
                height={800}
                loading="eager"
            />
            <div className={s.hero}>
                <h1 className={bebas_neue.className}>Soar To New Heights With Zweven</h1>
                <h2 className={roboto.className}>Unleash Your Wanderlust: Explore, Equip, Elevate Your Backpacking Adventures.</h2>
                <button className={s.button}>Start Your Journey</button>
            </div>
        </div>
    )
}

export default Hero;
