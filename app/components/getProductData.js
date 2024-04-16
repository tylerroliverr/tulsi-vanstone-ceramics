import { client } from "../lib/sanity";

async function getData() {
    const query = `
    *[_type == "products"] {
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
    }`;

    const data = await client.fetch(query);
    return data;
}

export default async function getProductsData() {
    const data = await getData();
    return data;
}