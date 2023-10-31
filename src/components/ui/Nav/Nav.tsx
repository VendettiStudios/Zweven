import Image from 'next/image';
import s from './Nav.module.css';
import { Bebas_Neue, Poppins } from 'next/font/google';
const bebas_neue = Bebas_Neue({ weight: ['400'], subsets: ['latin'] })
const poppins = Poppins({style:['normal'], weight: ['300'], subsets: ['latin'] });

type Props = {};

const Nav = (props: Props) => {
    return (
        <nav className={s.nav}>
           <div className={`${s.logo} ${bebas_neue.className}`}>ZWEVEN  <Image
            className={s.Image}
                src="/Eagle.png" 
                alt="Eagle Image" 
                width={80} 
                height={80}
                loading="eager"
            /></div>
            <div className={`${s.links} ${poppins.className}`}>
                <p>Home</p>
                <p>About</p>
                <p>Shop</p>
                <p>Blog</p>
                <p>Contact</p>
            </div>
        </nav>
    );
};

export default Nav;
