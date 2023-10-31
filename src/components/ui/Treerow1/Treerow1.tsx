import Image from "next/image";
import s from "./Treerow1.module.css"

type Props = {}

const Treerow1 = (props: Props) => {
  return (
    // <div className={s.wrapper}>
         <Image
                className={s.tree}
                src="/treerow1.svg"
                alt="row of trees"
                width={755}
                height={147}
                loading="eager"
            />
    //  </div>
  )
}

export default Treerow1