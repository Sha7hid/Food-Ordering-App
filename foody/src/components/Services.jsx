import styles from '../styles/Services.module.css'
import Image from 'next/image'
import s1 from 'public/s1.png'
import s2 from 'public/s2.png'
import s3 from 'public/s3.png'
export default function Services()  {
  return(
    <>
    <div className={styles.heading}>
        <span>WHAT WE SERVE</span>
        <span>Your Favourite Food</span>
        <span>Delivery Partner</span>
    </div>

    {/* features */}
    <div className={styles.services}>
        <div className={styles.feature}>

            <div className={styles.ImageWrapper}>
                <Image src={s1} alt="" objectFit="cover" layout='intrinsic'/>
            </div>

            <span>Easy to Order</span>
            <span>You only need a few steps in food ordering</span>
        </div>

        <div className={styles.feature}> <div className={styles.ImageWrapper}>
                <Image src={s2} alt="" objectFit="cover" layout='intrinsic'/>
            </div>

            <span>Easy to Order</span>
            <span>Delivery that is always on time even faster</span></div>
        <div className={styles.feature}> <div className={styles.ImageWrapper}>
                <Image src={s3} alt="" objectFit="cover" layout='intrinsic'/>
            </div>

            <span>Easy to Order</span>
            <span>Not only fast for us, quality is also number one</span></div>
    </div>
    </>
  )
}
