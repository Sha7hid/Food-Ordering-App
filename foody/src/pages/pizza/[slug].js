import Layout from "@/components/Layout";
import { client, urlFor } from "lib/client";
import Image from "next/image";
import styles from '../../styles/Pizza.module.css'
export default function Pizza({pizza})  {
    const src = urlFor(pizza.image).url()
  return(
    <Layout>
      <div className={styles.container}>
<div className={styles.ImageWrapper}>
<Image src={src} alt=""
loader={() => src}
layout='fill'
unoptimized
objectFit="cover"
/>
</div>
      </div>

      {/* right side */}
      
    </Layout>
  )
}

export async function getStaticPaths(){
    const paths = await client.fetch(
        `*[_type=="pizza" && defined(slug.current)][].slug.current`
    );
    return {
        paths: paths.map((slug) => ({params: {slug}})),
        fallback: 'blocking',
    }
}

export async function getStaticProps(context){
    const {slug = ""} = context.params;
    const pizza = await client.fetch(
        `*[_type=="pizza" && slug.current == '${slug}'][0]`
    );
    return {
        props:{
            pizza,
        },
    }
}