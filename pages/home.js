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
        {
            text: "BlueSkin",
            img: "company/products/blueskin/BlueSkin-2.jpg",
            href: "/products/blueskin"
        },
        {
            text: "Cape Cod",
            img: "company/products/capecodsiding/banner@2x.png",
            href: "/products/capecod"
        },
        {
            text: "Tyvek",
            img: "company/products/tyvek/Tyvek6.jpeg",
            href: "/products/tyvek"
        },
        {
            text: "TimberTech",
            img: "company/products/timbertech/Inspiration-Gallery-Ashwood-Espresso-Legacy-Composite-Los-Angeles-Beauty-1.jpg",
            href: "/products/timbertech"
        },
        {
            text: "CA Composite Cladding",
            img: "company/products/cacompositecladding/insert_jpg_here.jpg",
            href: "/products/cacompositecladding"
        },
        {
            text: "LP Siding",
            img: "company/products/lpsiding/LP4.jpg",
            href: "/products/lpsiding"
        },
        {
            text: "Ready Pine",
            img: "company/products/readypine/RP1.jpg",
            href: "/products/readypine"
        },
        {
            text: "Clicklad",
            img: "company/products/clicklad/insert_jpg_here.jpg",
            href: "/products/clicklad"
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