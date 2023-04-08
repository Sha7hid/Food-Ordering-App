import Layout from "@/components/Layout";
import { client } from "lib/client";
import styles from "../../styles/Order.module.css";
import Cooking from 'public/cooking.png'
import Onway from 'public/onway.png'
import {UilBill, UilBox} from '@iconscout/react-unicons'
import Image from "next/image";
export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == 'order' && _id == '${params.id}']`;
  const order = await client.fetch(query);

  return {
    props: {
      order: order[0],
    },
  };
};
export default function Orders({ order }) {
  return (
    <Layout>
      <div className={styles.container}>
        <span className={styles.heading}>Order in Process</span>
        <div className={styles.details}>
          <div>
            <span>Order ID</span>
            <span>{order._id}</span>
          </div>
          <div>
            <span>Customer Name</span>
            <span>{order.name}</span>
          </div>
          <div>
            <span>Phone</span>
            <span>{order.phone}</span>
          </div>
          <div>
            <span>Method</span>
            <span>
             {
                order.method === 0 ? 'Cash on Delivery': 'Online Payment(Paid)'
             }
            </span>
          </div>
          <div>
            <span>Total</span>
            <span>$ {order.total}</span>
          </div>
        </div>

        <div className={styles.statusContainer}>
<div className={styles.status}>
<UilBill width={50} height={50}/>
<span>Payment</span>
{order.method === 0 ?
<span className={styles.pending}> On Delivery</span> :
<span className={styles.completed}> Completed</span>
}
</div>
<div className={styles.status}>
<Image src={Cooking} alt="" width={50} height={50}/>
<span>Cooking</span>

{order.status === 1 && (
    <div className={styles.spinner}>
<Image src={Spinner} alt=""/>
    </div>
)}
</div>
<div className={styles.status}>
<Image src={Onway} alt="" width={50} height={50}/>
<span>On Way</span>
</div>
<div className={styles.status}>
<UilBox width={50} height={50}/>
<span>Delivered</span>
</div>
        </div>
      </div>
    </Layout>
  );
}
