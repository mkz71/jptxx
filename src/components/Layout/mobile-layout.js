import React, { Component } from "react";
import styles from "./mobile-layout.module.css";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faBars);

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
                    <button aria-label="Navigation menu" className={styles.toggle} onClick={this.handleNavToggle}>
                        <FontAwesomeIcon icon="bars" size="2x" />
                    </button>
                    <ul className={this.state.collapsed ? styles.navMenu_collapsed : styles.navMenu}>
                        <Link to="/" className={this.state.collapsed ? styles.link_collapsed : styles.link}>Home</Link>
                        <Link to="/menu" className={this.state.collapsed ? styles.link_collapsed : styles.link}>Menu</Link>
                        <Link to="/contact/" className={this.state.collapsed ? styles.link_collapsed : styles.link}>Contact Us</Link>
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