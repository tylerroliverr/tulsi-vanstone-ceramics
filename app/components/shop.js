import Link from "next/link"

export default function Shop() {

    return (
        <>
            <div className="shop-container">
                <div className="shop-item">
                    <div className="img-container">
                        <img className="shop-item-img" src="/images/black_vase.jpg" />
                    </div>
                    <div>
                        <p>test</p>
                        <Link href={`/`}>
                            <p>buy</p>
                        </Link>
                    </div>
                </div>
                <div className="shop-item empty">
                </div>
            </div>
        </>
    )
}