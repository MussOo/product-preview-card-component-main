import Image from "next/image";
import styles from "./page.module.css";
import Preview_product from "./components/product_preview_card/page";

export default function Home() {
  return (
    <div className={styles.main}>
      <Preview_product></Preview_product>
    </div>
  );
}
