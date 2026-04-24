import { error } from '../error/errorhandling.js'
import { Product } from '../models/product_models.js'


export const create_product = async (req, res) => {
    try {
        const {
            name, brand, category, origin, age, abv,
            price, stock, description, tasting_notes, image
        } = req.body

        if (!name || !brand || !price) {
            return res.status(400).json({
                success: false,
                message: 'name, brand, and price are required fields.',
            })
        }

        const existing = await Product.findOne({ name, brand })
        if (existing) {
            return res.status(409).json({
                success: false,
                message: `Product "${name}" by ${brand} already exists.`,
            })
        }

        const newProduct = new Product({
            name, brand, category, origin, age, abv,
            price, stock: stock ?? 0, description, tasting_notes, image
        })

        const saved = await newProduct.save()

        return res.status(201).json({
            success: true,
            message: 'Product created successfully.',
            data: saved,
        })
    } catch (err) {
        return error(err, res)
    }
}


export const delete_product = async (req, res) => {
    try {
        const { id } = req.params

        const product = await Product.findById(id)
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found.',
            })
        }

        await Product.findByIdAndDelete(id)

        return res.status(200).json({
            success: true,
            message: `Product "${product.name}" deleted successfully.`,
        })
    } catch (err) {
        return error(err, res)
    }
}

export const updated_product = async (req, res) => {
    try {
        const { id } = req.params
        const updates = req.body

        delete updates._id

        const product = await Product.findById(id)
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found.',
            })
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { $set: updates },
            { new: true, runValidators: true }
        )

        return res.status(200).json({
            success: true,
            message: 'Product updated successfully.',
            data: updatedProduct,
        })
    } catch (err) {
        return error(err, res)
    }
}


export const getall_product = async (req, res) => {
    try {
        const {
            page = 1, limit = 12, sort = 'createdAt', order = 'desc',
            category, origin, brand, min_price, max_price, search
        } = req.query

        const filter = {}
        if (category) filter.category = category
        if (origin) filter.origin = origin
        if (brand) filter.brand = { $regex: brand, $options: 'i' }
        
        if (min_price || max_price) {
            filter.price = {}
            if (min_price) filter.price.$gte = Number(min_price)
            if (max_price) filter.price.$lte = Number(max_price)
        }
        
        if (search) {
            filter.$or = [
                { name: { $regex: search, $options: 'i' } },
                { brand: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
            ]
        }

      
        const skip = (Number(page) - 1) * Number(limit)
        const sortOrder = order === 'asc' ? 1 : -1

        const [products, total] = await Promise.all([
            Product.find(filter)
                .sort({ [sort]: sortOrder })
                .skip(skip)
                .limit(Number(limit)),
            Product.countDocuments(filter),
        ])

        return res.status(200).json({
            success: true,
            message: 'Products fetched successfully.',
            total,
            page: Number(page),
            totalPages: Math.ceil(total / Number(limit)),
            data: products,
        })
    } catch (err) {
        return error(err, res)
    }
}


export const view_product = async (req, res) => {
    try {
        const { id } = req.params

        // Find product by ID
        const product = await Product.findById(id)
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found.',
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Product fetched successfully.',
            data: product,
        })
    } catch (err) {
        return error(err, res)
    }
}