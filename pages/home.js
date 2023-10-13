import NavProduct from '@/src/components/NavProduct';

import styles from '../styles/Products.module.css';

export default function Home() {
    const PRODUCT_LIST = [
        {
            text: "Fast Plank",
            img: "company/products/fastplank/FastPlank-Art.jpeg",
            href: "/products/fastplank"
        },
        {
            text: "James Hardie",
            img: "company/products/jameshardie/JamesHardie-Art.jpg",
            href: "/products/jameshardie"
        },
        {
            text: "Maibec",
            img: "company/products/maibec/Maibec-Art.jpg",
            href: "/products/maibec"
        },
        {
            text: "NewTechWood",
            img: "company/products/newtechwood/NewTechWood-Art.jpg",
            href: "/products/newtechwood"
        },
        {
            text: "Longboard",
            img: "company/products/longboard/longboard-cover.webp",
            href: "/products/longboard"
        },
        {
            text: "Fraser Wood",
            img: "company/products/fraserwood/fraserwood-cover.jpg",
            href: "/products/fraserwood"
        },
        {
            text: "Azek",
            img: "company/products/azek/azek-cover.jpg",
            href: "/products/azek/"
        },
        {
            text: "Trex",
            img: "company/products/trex/trex-cover.jpeg",
            href: "/products/trex"
        },
    ]
    return (
        <div className="Home">
            <h2 className="title">Products</h2>
            <div>
                <div className={styles.product_list}>
                    {PRODUCT_LIST.sort((a, b) => a.text > b.text ? 1 : -1).map((product) => {
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