import styles from "./page.module.css";
import cart from "./icon-cart.svg";
export default function Preview_product() {
  return (
    <div className={styles.main}>
      <div className={styles.container_image}></div>
      <div className={styles.container_info}>
        <span className={styles.category}>PERFUME</span>
        <h3 className={styles.title_product}>
          Gabrielle <br /> Essence Eau <br /> de Parfum
        </h3>
        <div className={styles.container_description}>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL
          </p>
        </div>
        <div className={styles.container_prices}>
          <span className={styles.current_price}>$149.99</span>
          <span className={styles.old_price}>$169.99</span>
        </div>
        <button>
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/pastel-glyph/64/FFFFFF/fast-cart.png"
            alt="fast-cart"
          />
          <p>Add to Cart</p>
        </button>
      </div>
    </div>
  );
}
