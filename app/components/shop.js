"use client";
import getProductData from "./getProductData";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Shop() {

    const [shopItem, setShopItem] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getProductData();
                if (data) {
                    setShopItem(data);
                    console.log(data);
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div className="shop-container">
                {shopItem && shopItem.length > 0 && shopItem.map((item, index) => (
                    <div key={index} className="shop-item">
                        <div className="img-container">
                            <Link href={`/shop/${item.currentSlug}`}>
                                <img className="shop-item-img" src={item.mainImage.mainImagePath} alt={item.currentSlug} />
                            </Link>
                        </div>
                        <p>{item.vaseName}</p>
                        <p>{item.price}</p>
                        <Link href={`/shop/${item.currentSlug}`}>
                            <p>★</p>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}