import styles from "./page.module.css";

export default function Preview_product() {
  return (
    <div className={styles.main}>
      <div>IMAGES</div>
      <div>
        <span>Perfume</span>
        <h3>Gabrielle Essence Eau de Parfum</h3>
        <div>
          <p>Description bien longue</p>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
