import {UilFacebook, UilGithub, UilInstagram} from '@iconscout/react-unicons'
import styles from '../styles/Footer.module.css'
import Logo from 'public/Logo.png'
import Image from 'next/image'
export default function Footer()  {
  return(
    <div className={styles.container}>
      <span>ALL RIGHT RESERVED</span>
      <div className={styles.social}>
<UilFacebook size={45}/>
<UilGithub size={45}/>
<UilInstagram size={45}/>
      </div>
      <div className={styles.logo}>
        <Image src={Logo} height={45} width={45} alt=""/>
        <span>Fudo</span>
       </div>
    </div>
  )
}
