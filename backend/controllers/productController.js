import { sql } from "../config/db.js";

export const getAllProducts = async(req,res) => {
    try {
        const products = await sql`
            SELECT * FROM products
            ORDER BY created_at DESC
        `;

        console.log('fetched products', products);
        res.status(200).json({ success: true, data: products});
    } catch (error) {
        console.log('Error in getProducts function', error);
        res.status(500).json({success: false, message: 'Internal Server Error'});
    }
};
export const createProduct = async (req,res) => {};

export const getProduct = async (req,res) => {};
export const updateProduct = async (req,res) => {};
export const deleteProduct = async (req,res) => {};
