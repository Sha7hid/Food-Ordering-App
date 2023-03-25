import Image from 'next/image'
import styles from '../styles/Hero.module.css'
import Cherry from 'public/Cherry.png'
import HeroImage from 'public/HeroImage.png'
import {UilPhone} from '@iconscout/react-unicons'
import Pizza1 from 'public/p1.jpg'
export default function Hero(){
  return(
    <div className={styles.container}>
{/* left side */}
<div className={styles.left}>

<div className={styles.cherryDiv}>
    <span>More than Faster</span>
    <Image src={Cherry} width={40} height={25} alt=""/>
</div>

<div className={styles.heroText}>
    <span>Be The Fastest</span>
    <span>In Delivering</span>
    <span>
        Your <span style={{color: "var(--themeRed)"}}>Pizza</span> 
    </span>
</div>

<span className={styles.miniText}>
Our Mission is to filling your tummy with delicious food and with fast and free delivery
</span>

<button className={`btn ${styles.btn}`}>
    Get Started
</button>
</div>

{/* right side */}
<div className={styles.right}>
    <div className={styles.imageContainer}>
        <Image src={HeroImage} alt="" layout='intrinsic'/>
    </div>

    <div className={styles.ContactUs}>
        <span>Contact Us</span>
        <div>
            <UilPhone color='white'/>
        </div>
    </div>
    <div className={styles.Pizza}>
        <div>
            <Image src={Pizza1} alt="" 
            objectFit='cover' layout='intrinsic'/>

        </div>
        <div className={styles.details}>
            <span>Italian Pizza</span>
            <span>
                <span style={{color:"var(--themeRed)"}}>$</span>7.49</span>
        </div>
    </div>
</div>
    </div>
  )
}
