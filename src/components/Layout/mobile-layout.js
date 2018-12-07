import React, { Component } from "react";
import styles from "./mobile-layout.module.css";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MobileLayout extends Component {
    constructor(props) {
        super(props);
        this.handleNavToggle = this.handleNavToggle.bind(this);
        this.state = {
            collapsed: true
        }
    }

    handleNavToggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        return (
            <div className={styles.container}>
                <nav className={styles.navigation}>
                    <h1 className={styles.brand}>FORMOSA CAFE</h1>
                    <button className={styles.toggle} onClick={this.handleNavToggle}>
                        <FontAwesomeIcon icon="bars" size="2x" />
                    </button>
                    <ul className={this.state.collapsed ? styles.navMenu_collapsed : styles.navMenu}>
                        <Link to="/" className={styles.link}>Home</Link>
                        <Link to="/Menu/menu" className={styles.link}>Menu</Link>
                        <Link to="/combos/" className={styles.link}>Combos</Link>
                        <Link to="/gallery/" className={styles.link}>Gallery</Link>
                        <Link to="/about/" className={styles.link}>About</Link>
                        <Link to="/contact/" className={styles.link}>Contact Us</Link>
                    </ul>
                </nav>
                <main className={styles.content}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default MobileLayout;