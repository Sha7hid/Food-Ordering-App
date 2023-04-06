import Layout from "@/components/Layout";
import { client } from "lib/client";
import styles from '../../styles/Order.module.css'
export const getServerSideProps = async({params})=> {
    const query = `*[_type == 'order' && _id == '${params.id}']`
const order =  await client.fetch(query);

return {
    props:{
        order : order[0]
    }
}
}
export default function Orders({order}) {
    return (
      <Layout>
        <div className={styles.container}>
<span className={styles.heading}> 
Order in Process
</span>
        </div>
      </Layout>  
    );
}