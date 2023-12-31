import Image from 'next/image';
import s from './Hero.module.css';
import { Bebas_Neue, Roboto, Lato } from 'next/font/google';
const bebas_neue = Bebas_Neue({ weight: ['400'], subsets: ['latin'] })
const roboto = Roboto({style:['normal'], weight: ['300'], subsets: ['latin'] });
const lato = Lato({style:['normal'], weight: ['400'], subsets: ['latin'] });
type Props = {}
const Hero = (props: Props) => {
    return (
        <div>
            <div className={s.wrapper}>
            <Image
            className={s.Image}
                src="/Hero.jpeg" 
                alt="Hero Image" 
                width={1921} 
                height={990}
                loading="eager"
            />
            <div className={s.hero}>
                <h1 className={bebas_neue.className}>Soar To New Heights With Zweven</h1>
                <h2 className={roboto.className}>Unleash Your Wanderlust: Explore, Equip, Elevate Your Backpacking Adventures.</h2>
                <button className={`${s.button} ${lato.className}`}>Start Your Journey
                <Image
                className={s.icon}
                src="/right-arrow.png"
                alt="Right Arrow Icon"
                width={20}
                height={20}
                loading="eager"
                />
                </button>
            </div>
            </div>
        </div>
    )
}

export default Hero;
