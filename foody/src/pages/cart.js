import Layout from "@/components/Layout";
import { urlFor } from "lib/client";
import Image from "next/image";
import styles from '../styles/Cart.module.css'
import useStore from "store/store";
export default function Cart()  {
    const CartData = useStore((state)=> state.cart)
  return(
    <Layout>
 <div className={styles.container}>
  {/* details */}
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
    src={src}
    className= {styles.imageTd}
    alt=""
    objectFit="cover"
    width={85}
    height={85}/>
</td>
<td>
  {pizza.name}
</td>
<td>
  {
    pizza.size === 0 ?
    "Small" :
    pizza.size === 1 ?
    "Medium" :
    "Large"
  }
</td>
<td>
  {pizza.price}
</td>
<td>
  {pizza.quantity}
</td>
<td>
  {pizza.price * pizza.quantity}
</td>
<td
style={{color: "var(--themeRed)", cursor:"pointer"}}>
  x
</td>
    </tr>)
})}
</tbody>
</table>
</div>
{/* summary */}
<div className={styles.cart}>

</div>
 </div>
    </Layout>
  )
}
