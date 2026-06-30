import axios from "axios"

const productapiinstance = axios.create({
    baseURL: "/api/products",
    withCredentials: true,
})

// Fetch ImageKit signed auth params from backend
export async function getImagekitAuth() {
    const response = await productapiinstance.get("/imagekit-auth")
    return response.data
}

// Create product — send JSON with imageUrls already uploaded to ImageKit
export async function createproduct(data) {
    const response = await productapiinstance.post("/", data, {
        headers: { "Content-Type": "application/json" }
    })
    return response.data
}

export async function getsellerproduct() {
    const response = await productapiinstance.get("/seller")
    return response.data
}

export async function getallproducts() {
    const response = await productapiinstance.get("/")
    return response.data
}

export async function getproductbyid(productId) {
    const response = await productapiinstance.get(`/${productId}`)
    return response.data
}