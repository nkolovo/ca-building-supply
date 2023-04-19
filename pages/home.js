import NavProduct from '@/src/components/layout/NavProduct';

import styles from '../styles/Products.module.css';

export default function Home() {
    const PRODUCT_LIST = [
        {
            text: "New Tech Wood",
            href: "/products/new-tech-wood"
        },
        {
            text: "New Tech Wood",
            href: "/products/new-tech-wood"
        },
        {
            text: "New Tech Wood",
            href: "/products/new-tech-wood"
        },
        {
            text: "New Tech Wood",
            href: "/products/new-tech-wood"
        },
        {
            text: "New Tech Wood",
            href: "/products/new-tech-wood"
        },
        {
            text: "New Tech Wood",
            href: "/products/new-tech-wood"
        },
        {
            text: "New Tech Wood",
            href: "/products/new-tech-wood"
        },
    ]
    return (
        <div className={styles.home}>
            <span className={styles.products_header}>Products</span>
            <div>
                <div className={styles.product_list}>
                    {PRODUCT_LIST.map((product) => {
                        return (
                            <div className={styles.product} 
                                key={product.text}>
                                <NavProduct {...product} />
                            </div>
                        );
                    })}
                </div>
            </div >
        </div>
    )
}