import React, { Component } from "react";
import styles from "./layout.module.css";
import MobileLayout from "./mobile-layout.js";
import { Link } from "gatsby";

class Layout extends Component {
    constructor(props) {
        super(props);
        this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
        this.state = {
            width: 995
        }
    }

    componentDidMount() {
        this.setState({
            width: window.innerWidth
        })
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({
            width: window.innerWidth
        })
    }

    render() {

        if (this.state.width > 995) {
            return (
                <div className={styles.container}>
                    <div className={styles.sidebar}>
                        <nav className={styles.navigation}>
                            <h1 className={styles.brand}>FORMOSA CAFE</h1>
                            <p className={styles.subheader}>A family-owned restaurant serving authentic and traditional Chinese dishes.</p>
                            <Link to="/" className={styles.link}>Home</Link>
                            <Link to="/menu"className={styles.link}>Menu</Link>
                            <Link to="/contact/"className={styles.link}>Contact Us</Link>
                        </nav>
                    </div>
                    <main className={styles.content}>
                        {this.props.children}
                    </main>
                </div>
            )
        }
        else {
            return (
                <MobileLayout>
                    {this.props.children}
                </MobileLayout>
            )
        }
    }
}

export default Layout;