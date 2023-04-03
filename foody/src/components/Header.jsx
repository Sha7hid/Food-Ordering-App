import Image from 'next/image'
import styles from '../styles/Header.module.css'
import Logo from 'public/Logo.png'
import {UilShoppingBag} from '@iconscout/react-unicons'
 import   useStore  from '../../store/store';
export default function Header() {
  // state in terminal
  const state = useStore((state)=> state)
  console.log(state)
  const items = useStore((state)=> state.cart.pizzas.length)
  return(
    <div className={styles.header}>
       {/* logo side */}
       <div className={styles.logo}>
        <Image src={Logo} height={45} width={45} alt=""/>
        <span>Fudo</span>
       </div>
       {/* menu side */}
       <ul className={styles.menu}>
<li>Home</li>
<li>Menu</li>
<li>Contact</li>
       </ul>
       {/* right side */}
       <div className={styles.rightSide}>
        <div className={styles.cart}>
          <UilShoppingBag size={35} color="2E2E2E"/>
          <div className={styles.badge}>
            {items}
          </div>
        </div>
       </div>
    </div>
  )
};
