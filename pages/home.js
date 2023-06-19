import NavProduct from '@/src/components/NavProduct';

import styles from '../styles/Products.module.css';

export default function Home() {
    const PRODUCT_LIST = [
        {
            //text: "Fast Plank",
            img: "company/products/fastplank/fastplank-logo.jpg",
            href: "/products/fastplank"
        },
        {
            //text: "James Hardie",
            img: "company/products/jameshardie/jh-mainlogo-2x.png",
            href: "/products/jameshardie"
        },
        {
            //text: "Maibec",
            img: "company/products/maibec/maibec-logo.jpg",
            href: "/products/maibec"
        },
        {
            //text: "NewTechWood",
            img: "company/products/newtechwood/newtechwood-logo.jpg",
            href: "/products/newtechwood"
        },
    ]
    return (
        <div className={styles.home}>
            <h2 className="title">Products</h2>
            <div>
                <div className={styles.product_list}>
                    {PRODUCT_LIST.map((product) => {
                        return (
                            <div className={styles.product}>
                                <NavProduct {...product} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}