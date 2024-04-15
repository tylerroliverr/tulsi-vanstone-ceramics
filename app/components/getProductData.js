import { client } from "../lib/sanity";

async function ProductData() {
    const query = `
    *[_type == "products"] {
        images[] {
          "thumbImagePath": asset -> url
        },
        mainImage {
          "mainImagePath": asset -> url
        },
        price,
        description
      }`;

    const data = await client.fetch(query);
    return data;
}

export default async function getMemoriesData() {
    const data = await getData();
    return data;
}