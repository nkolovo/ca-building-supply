import Navbar from './Header/Navbar';
import Footer from './Footer/Footer';

export default function Layout({ children }) {
    return (
        <>
            <div className='content-wrap'>
                <Navbar />
                {children}
            </div>
            <Footer />
        </>
    )
}