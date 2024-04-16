"use client";
import { client } from "../../lib/sanity";
import { products } from "../../lib/interface";
import React, { useState, useEffect } from "react";
import Link from "next/link";

async function getData(slug: string) {
    const query = `
    *[_type == "products" && slug.current == '${slug}'] {
      images[]{
        "thumbImagePath": asset -> url
      },
      mainImage{
        "mainImagePath": asset -> url
      },
      price,
      description,
      vaseName,
      "currentSlug": slug.current
    }[0]`;

    const data = await client.fetch(query);
    return data;
}

export default function ProductPage({ params }: { params: { slug: string } }) {

    const [image, setImage] = useState([]);
    const [description, setDescription] = useState('');
    const [vaseName, setVaseName] = useState('');
    const [price, setPrice] = useState('');
    const [thumbnails, setThumbnails] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data: products = await getData(params.slug);
                if (data) {
                    setImage(data.mainImage.mainImagePath);
                    setThumbnails(data.images);
                    setPrice(data.price);
                    setDescription(data.description);
                    setVaseName(data.vaseName);
                    console.log(data.images);
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div className="prod-page-container">
                <div className="product-container">
                    <img className="prod-image" src={`${image}`} />
                    <div className="vase-text-container">
                        <p className="vase-title">{vaseName}</p>
                        <p>{price}</p>
                        <Link href="/">
                            <p>buy</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="info-container">
                <div className="thumbnail-container">
                    {thumbnails && thumbnails.length > 0 && thumbnails.map((item, index) => (
                        <div className="thumb-image-container" key={index}>
                            <img className="thumb-image" src={item.thumbImagePath} />
                        </div>
                    ))}
                </div>
                <div className="description-container">
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}