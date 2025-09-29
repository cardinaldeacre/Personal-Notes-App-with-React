import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <section>
            <h2>404 - Halaman tidak ditemukan</h2>
            <p>Laman yang dituju tidak ditemukan</p>
            <Link to='/'>Kembali ke beranda</Link>
        </section>
    )
}

export default NotFoundPage;