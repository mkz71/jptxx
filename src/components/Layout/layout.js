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
                            <h1 className={styles.brand}>JP THAI EXPRESS</h1>
                            <p className={styles.subheader}>A family-owned restaurant serving authentic and traditional Thai dishes.</p>
                            <Link to="/" className={styles.link}>Home</Link>
                            <Link to="../menu" className={styles.link}>Menu</Link>
                            <Link to="../catering" className={styles.link}>Catering</Link>
                            <Link to="/giftcard" className={styles.link}>Gift Cards</Link>
                            <Link to="/online" className={styles.link}>Order Online</Link>
                            <Link to="/contact/" className={styles.link}>Hours & Location</Link>
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