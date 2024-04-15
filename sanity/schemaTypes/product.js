export const product = {
    name: "products",
    title: "Products",
    type: "document",
    fields: [
        {
            title: "Vase Name",
            name: "vaseName",
            type: "string"
        },
        {
            title: "Main Image",
            name: "mainImage",
            type: "image"
        },
        {
            title: "Images",
            name: "images",
            type: "array",
            of: [
                {
                    title: "Images",
                    name: "images",
                    type: "image"
                }
            ]
        },
        {
            title: "Price",
            name: "price",
            type: "string"
        },
        {
            title: "Description",
            name: "description",
            type: "text"
        }
    ]
}
