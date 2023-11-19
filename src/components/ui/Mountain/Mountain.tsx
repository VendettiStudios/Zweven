import Image from "next/image";
import s from './Mountain.module.css';
const Mountain = () => {
    return (
        <div>
            <Image
                className={s.mountain}
                src="/j.svg"
                alt="mountain"
                width={5065}
                height={608.611}
                loading="eager"
            />
        </div>
    );
};

export default Mountain;
