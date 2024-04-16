import Link from "next/link"

export default function NavBar() {
    return (
        <>
            <div className="navbar">
                <div className="logo-div">
                    <Link href="/">
                        <img className="logo" src="/images/logo.png" />
                    </Link>
                </div>
                <div className="nav-items">
                    <p>Shop</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
            </div>
        </>
    )
}