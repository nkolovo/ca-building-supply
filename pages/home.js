import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Products.module.css';

export default function Home() {
    return (
        <div className={styles.main}>
            <span className={styles.products_header}>Products</span>
            <div className={styles.Products}>
                <div className='row justify-content-around' style={{ alignContent: 'center' }}>
                    <div className='col-3'>
                        <Link href="/products/new_tech_wood">
                            <Image src="/vercel.svg" width={150} height={150}></Image>
                        </Link>
                        <span className={styles.product_name}>New Tech Wood</span>
                    </div>
                    <div className='col-3'>
                        <Link href="/products/new_tech_wood">
                            <Image src="/vercel.svg" width={150} height={150}></Image>
                        </Link>
                        <span className={styles.product_name}>New Tech Wood</span>
                    </div>
                    <div className='col-3'>
                        <Link href="/products/new_tech_wood">
                            <Image src="/vercel.svg" width={150} height={150}></Image>
                        </Link>
                        <span className={styles.product_name}>New Tech Wood</span>
                    </div>
                    <div className='w-100'></div>
                    <div className='col-3'>
                        <Link href="/products/new_tech_wood">
                            <Image src="/vercel.svg" width={150} height={150}></Image>
                        </Link>
                        <span className={styles.product_name}>New Tech Wood</span>
                    </div>
                    <div className='col-3'>
                        <Link href="/products/new_tech_wood">
                            <Image src="/vercel.svg" width={150} height={150}></Image>
                        </Link>
                        <span className={styles.product_name}>New Tech Wood</span>
                    </div>
                    <div className='col-3'>
                        <Link href="/products/new_tech_wood">
                            <Image src="/vercel.svg" width={150} height={150}></Image>
                        </Link>
                        <span className={styles.product_name}>New Tech Wood</span>
                    </div>
                </div>
            </div>
        </div >
    )
}