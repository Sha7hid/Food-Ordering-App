import Layout from "@/components/Layout";
import { urlFor } from "lib/client";
import Image from "next/image";
import { useStore } from "zustand";
import styles from '../styles/Cart.module.css'
export default function Cart()  {
    const CartData = useStore((state)=> state.cart)
  return(
    <Layout>
 <div className={styles.container}>
<div className={styles.details}>
<table className={styles.table}>
<thead>
    <th>Pizza</th>
    <th>Name</th>
    <th>Size</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Total</th>
    <th></th>
</thead>
<tbody className={styles.tbody}>
{CartData.pizzas.length > 0 && CartData.pizzas.map((pizza, i)=>{
   const src = urlFor(pizza.image).url()
   return (
   <tr key={i}>
<td>
    <Image loader={() => src}
    className= {styles.imageTd}
    alt=""
    objectFit="cover"
    width={85}
    height={85}/>
</td>
    </tr>)
})}
</tbody>
</table>
</div>
<div className={styles.cart}>

</div>
 </div>
    </Layout>
  )
}
