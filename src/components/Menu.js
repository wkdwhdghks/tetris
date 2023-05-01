import styles from "./Menu.module.css";

function Menu({ onClick }) {
  return (
    <div className={styles.menu}>
      <button className={styles.button} onClick={onClick}>
        Play Tetris
      </button>
    </div>
  );
}

export default Menu;
