import Layout from "@/components/Layout";
import { client, urlFor } from "lib/client";
import Image from "next/image";
import styles from "../../styles/Pizza.module.css";
import LeftArrow from "public/arrowLeft.png";
import RightArrow from "public/arrowRight.png";
import { useState } from "react";
import useStore from "store/store";
// to show added to cart animation
import toast, { Toaster } from "react-hot-toast";

export default function Pizza({ pizza }) {
  const src = urlFor(pizza.image).url();
  const [Size, setSize] = useState(1);
  const [Quantity, setQuantity] = useState(1);

  // handle Quantity
  const handleQuan = (type) => {
    type === "inc"
      ? setQuantity((prev) => prev + 1)
      : Quantity === 1
      ? null
      : setQuantity((prev) => prev - 1);
  };
  // add to cart function
  const addPizza = useStore((state) => state.addPizza);
  const addToCart = () => {
    addPizza({
      ...pizza,
      price: pizza.price[Size],
      quantity: Quantity,
      size: Size,
    });
    toast.success("Added to Cart");
  };
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.ImageWrapper}>
          <Image
            src={src}
            alt=""
            loader={() => src}
            layout="fill"
            unoptimized
            objectFit="cover"
          />
        </div>
        {/* right side */}
        <div className={styles.right}>
          <span>{pizza.name}</span>
          <span>{pizza.details}</span>

          <span>
            <span style={{ color: "var(--themeRed)" }}>$</span>{" "}
            {pizza.price[Size]}
          </span>
          <div className={styles.size}>
            <span>Size</span>
            <div className={styles.sizeVariants}>
              <div
                onClick={() => setSize(0)}
                className={Size === 0 ? styles.selected : ""}
              >
                Small
              </div>
              <div
                onClick={() => setSize(1)}
                className={Size === 1 ? styles.selected : ""}
              >
                Medium
              </div>
              <div
                onClick={() => setSize(2)}
                className={Size === 2 ? styles.selected : ""}
              >
                Large
              </div>
            </div>
          </div>

          {/* Quantity counter */}
          <div className={styles.quantity}>
            <span>Quantity</span>
            <div className={styles.counter}>
              <Image
                src={LeftArrow}
                height={20}
                width={20}
                objectFit="contain"
                alt=""
                onClick={() => handleQuan("dec")}
              />

              <span>{Quantity}</span>

              <Image
                src={RightArrow}
                height={20}
                width={20}
                objectFit="contain"
                alt=""
                onClick={() => handleQuan("inc")}
              />
            </div>
          </div>

          {/* button */}
          <div className={`btn ${styles.btn}`} onClick={addToCart}>
            Add To Cart
          </div>
        </div>
        <Toaster />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="pizza" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const pizza = await client.fetch(
    `*[_type=="pizza" && slug.current == '${slug}'][0]`
  );
  return {
    props: {
      pizza,
    },
  };
}
