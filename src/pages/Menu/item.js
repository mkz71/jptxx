import React from "react";
import styles from "./menu.module.css";

const Item = ( props ) => {
    const { title, price, smallPrice, description, category } = props.frontmatter;
    return (
    <div className={styles.menuItem}>
        <span className={styles.itemHeader}>
            <h1 className={styles.itemName}>{title}</h1>
            {smallPrice ? <p className={styles.price}>M: {smallPrice}</p> : ""}
            <p className={styles.price}>L: {price}</p>
        </span>
        {description ? <p className={styles.description}>{description}</p> : ""}
    </div>)
}

export default Item;