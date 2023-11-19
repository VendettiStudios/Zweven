import React from 'react'
import s from './About.module.css';

type Props = {}

const About = (props: Props) => {
    return (
        <div className={s.about}>
            <div>
                <h1>EXPLORE THE GREAT OUTDOORS WITH ZWEVEN</h1>
                <p>Discover the legacy of quality and innovation since 1970. Zweven equips you for your next adventure, whether you're hiking the tallest peaks or simply escaping for a weekend getaway. Our curated selection includes top-of-the-line camping, backpacking, hiking, climbing, and much more to help you embrace the wilderness.</p>
            </div>
            <div>
                <button>About</button>
                <button>Blog</button>
            </div>
        </div>

    )
}

export default About