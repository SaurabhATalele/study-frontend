import React from "react";
import styles from "./Sidebar.module.css";
import icon from "./jr.png";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <img src={icon} alt="logo" className={styles.logo} />
        <span class="material-symbols-outlined">menu</span>
        <span class="material-symbols-outlined">notifications</span>
        <span class="material-symbols-outlined">swap_driving_apps_wheel</span>
        <span class="material-symbols-outlined">task</span>
        <span class="material-symbols-outlined">visibility</span>
        <span class="material-symbols-outlined">group</span>
        <span class="material-symbols-outlined">bar_chart</span>
      </div>

      <div className={styles.bottom}>
        <img src="https://static.vecteezy.com/system/resources/previews/009/397/892/non_2x/woman-face-expression-clipart-design-illustration-free-png.png" alt="person" className={styles.person} />
      </div>
    </div>
  );
};

export default Sidebar;
