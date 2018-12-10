import React from "react";
import styles from "./menu.module.css";

const Item = ( props ) => {
    // const { title, price, smallPrice, description } = props.frontmatter;
    return (
    <div className={styles.menuItem}>
        <span className={styles.itemHeader}>
            <h1 className={styles.itemName}>{props.frontmatter.title}</h1>
            {props.frontmatter.smallPrice ? <p className={styles.price}>M: {props.frontmatter.smallPrice}</p> : ""}
            <p className={styles.price}>L: {props.frontmatter.price}</p>
        </span>
        {props.frontmatter.description ? <p className={styles.description}>{props.frontmatter.description}</p> : ""}
    </div>)
}

export default Item;