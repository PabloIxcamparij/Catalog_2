export type productType = {
    id: number;
    name: string;
    purpose: string;
    category: string;
    material: string;
    dimensions: string;
    description: string;
    recommendations: string;
    profilePicture: string;
}

export type productPictureType = {
    id: number;
    idProduct: number;
    urlPicture: string;
}