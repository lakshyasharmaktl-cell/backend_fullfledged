import mongoose from 'mongoose'
import { uploadProfileImg, multipleImgUrl } from '../images/upload.js'

const variantSchema = new mongoose.Schema({
  sku: { type: String,required: true,unique: true,trim: true},
  size: {
    type: String,
    enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'One Size', 'Not Applicable'],
    default: 'Not Applicable'
  },
  color: {type: String, trim: true },
  colorCode: {type: String, trim: true },
  price: {type: Number, required: true, min: 0},
  compareAtPrice: { type: Number, 
  min: 0 },
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  weight: {
    type: Number, // Weight in grams
    min: 0
  },
  images: {
    type: [String], // Array of image URLs for this specific variant
    default: []
  },
  isActive: {
    type: Boolean,
    default: true
  },
  metadata: {
    type: Map,
    of: String // Additional variant-specific attributes
  }
}, { timestamps: true });

// Review Schema
const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  title: {
    type: String,
    trim: true,
    maxlength: 100
  },
  comment: {
    type: String,
    required: true,
    maxlength: 2000
  },
  images: {
    type: [String], // User uploaded images for review
    default: []
  },
  verifiedPurchase: {
    type: Boolean,
    default: false
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  replies: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    comment: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  isApproved: {
    type: Boolean,
    default: false
  },
  helpful: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

// Product Schema
const productSchema = new mongoose.Schema({
  // Basic Information
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    maxlength: 200,
    index: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
    maxlength: 5000
  },
  shortDescription: {
    type: String,
    maxlength: 300
  },
  
  // Media
  mainImage: {
    type: String,
    required: true
  },
  images: {
    type: [String],
    default: [],
    validate: {
      validator: function(v) {
        return v.length <= 20; // Max 20 images per product
      },
      message: 'Maximum 20 images allowed'
    }
  },
  videoUrl: {
    type: String,
    trim: true
  },
  
  // Pricing
  basePrice: {
    type: Number,
    required: true,
    min: 0
  },
  compareAtPrice: {
    type: Number,
    min: 0
  },
  costPerItem: {
    type: Number, // Your cost for analytics
    min: 0
  },
  
  // Inventory
  trackQuantity: {
    type: Boolean,
    default: true
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  lowStockThreshold: {
    type: Number,
    default: 10
  },
  sku: {
    type: String,
    unique: true,
    sparse: true,
    trim: true
  },
  barcode: {
    type: String,
    trim: true
  },
  
  // Variants
  hasVariants: {
    type: Boolean,
    default: false
  },
  variants: [variantSchema],
  
  // Categories & Tags
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  tags: [{
    type: String,
    trim: true
  }],
  collections: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Collection'
  }],
  
  // SEO
  seoTitle: {
    type: String,
    maxlength: 70
  },
  seoDescription: {
    type: String,
    maxlength: 160
  },
  seoKeywords: [{
    type: String
  }],
  
  // Shipping & Delivery
  weight: {
    type: Number, // in grams
    min: 0
  },
  dimensions: {
    length: { type: Number, min: 0 },
    width: { type: Number, min: 0 },
    height: { type: Number, min: 0 }
  },
  requiresShipping: {
    type: Boolean,
    default: true
  },
  freeShipping: {
    type: Boolean,
    default: false
  },
  shippingProfile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ShippingProfile'
  },
  
  // Ratings & Reviews
  averageRating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  totalReviews: {
    type: Number,
    default: 0
  },
  ratingDistribution: {
    1: { type: Number, default: 0 },
    2: { type: Number, default: 0 },
    3: { type: Number, default: 0 },
    4: { type: Number, default: 0 },
    5: { type: Number, default: 0 }
  },
  
  // Sales & Marketing
  isFeatured: {
    type: Boolean,
    default: false
  },
  isBestSeller: {
    type: Boolean,
    default: false
  },
  isNewArrival: {
    type: Boolean,
    default: false
  },
  onSale: {
    type: Boolean,
    default: false
  },
  saleStartDate: Date,
  saleEndDate: Date,
  
  // Status
  status: {
    type: String,
    enum: ['draft', 'active', 'archived', 'out_of_stock'],
    default: 'draft'
  },
  visibility: {
    type: String,
    enum: ['visible', 'hidden', 'password_protected'],
    default: 'visible'
  },
  password: {
    type: String, // For password-protected products
    trim: true,
    select: false
  },
  
  // Meta
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor'
  },
  brand: {
    type: String,
    trim: true
  },
  warranty: {
    type: String,
    maxlength: 500
  },
  returnPolicy: {
    type: String,
    maxlength: 500
  },
  
  // Additional Info
  specifications: {
    type: Map,
    of: mongoose.Schema.Types.Mixed
  },
  customFields: [{
    fieldName: String,
    fieldValue: String,
    fieldType: {
      type: String,
      enum: ['text', 'number', 'date', 'boolean'],
      default: 'text'
    }
  }],
  
  // Analytics
  viewCount: {
    type: Number,
    default: 0
  },
  purchaseCount: {
    type: Number,
    default: 0
  },
  wishlistCount: {
    type: Number,
    default: 0
  },
  shareCount: {
    type: Number,
    default: 0
  },
  
  // Timestamps
  publishedAt: Date,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better query performance
productSchema.index({ name: 'text', description: 'text', tags: 'text' });
productSchema.index({ price: 1, createdAt: -1 });
productSchema.index({ category: 1, status: 1 });
productSchema.index({ 'variants.sku': 1 });
productSchema.index({ slug: 1 });
productSchema.index({ status: 1, visibility: 1 });

// Virtuals
productSchema.virtual('discountPercentage').get(function() {
  if (this.compareAtPrice && this.compareAtPrice > this.basePrice) {
    return Math.round(((this.compareAtPrice - this.basePrice) / this.compareAtPrice) * 100);
  }
  return 0;
});

productSchema.virtual('isInStock').get(function() {
  if (this.hasVariants) {
    return this.variants.some(variant => variant.stock > 0);
  }
  return this.quantity > 0;
});

productSchema.virtual('lowStock').get(function() {
  if (!this.trackQuantity) return false;
  if (this.hasVariants) {
    return this.variants.some(variant => variant.stock <= this.lowStockThreshold);
  }
  return this.quantity <= this.lowStockThreshold;
});

// Methods
productSchema.methods.updateRating = async function() {
  const Review = mongoose.model('Review');
  const result = await Review.aggregate([
    { $match: { product: this._id, isApproved: true } },
    { $group: {
      _id: null,
      averageRating: { $avg: '$rating' },
      totalReviews: { $sum: 1 },
      ratingDistribution: {
        $push: '$rating'
      }
    }}
  ]);
  
  if (result.length > 0) {
    this.averageRating = result[0].averageRating;
    this.totalReviews = result[0].totalReviews;
    
    // Calculate rating distribution
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    result[0].ratingDistribution.forEach(rating => {
      distribution[rating]++;
    });
    this.ratingDistribution = distribution;
    
    await this.save();
  }
};

productSchema.methods.reduceStock = async function(quantity, variantId = null) {
  if (this.hasVariants && variantId) {
    const variant = this.variants.id(variantId);
    if (variant && variant.stock >= quantity) {
      variant.stock -= quantity;
      await this.save();
      return true;
    }
  } else if (!this.hasVariants && this.quantity >= quantity) {
    this.quantity -= quantity;
    await this.save();
    return true;
  }
  return false;
};

// Pre-save middleware
productSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  
  // Auto-generate slug if not provided
  if (!this.slug && this.name) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  
  // Set onSale flag based on sale dates
  if (this.saleStartDate && this.saleEndDate) {
    const now = new Date();
    this.onSale = now >= this.saleStartDate && now <= this.saleEndDate;
  }
  
  // Update hasVariants flag
  this.hasVariants = this.variants && this.variants.length > 0;
  
  next();
});

// Post-save middleware for image upload handling
productSchema.post('save', async function(doc) {
  
  if (doc.mainImage && doc.mainImage.startsWith('data:image')) {
    try {
      const uploadedUrl = await uploadProfileImg(doc.mainImage, `products/${doc._id}/main`);
      doc.mainImage = uploadedUrl;
      await doc.save();
    } catch (error) {
      console.error('Error uploading main image:', error);
    }
  }
  

  if (doc.images && doc.images.length > 0) {
    const imageUrls = [];
    for (const image of doc.images) {
      if (image.startsWith('data:image')) {
        try {
          const uploadedUrl = await multipleImgUrl(image, `products/${doc._id}/gallery`);
          imageUrls.push(uploadedUrl);
        } catch (error) {
          console.error('Error uploading gallery image:', error);
        }
      } else {
        imageUrls.push(image);
      }
    }
    if (imageUrls.length > 0) {
      doc.images = imageUrls;
      await doc.save();
    }
  }
});

// Export models
const Product = mongoose.model('Product', productSchema);
const Review = mongoose.model('Review', reviewSchema);
const Variant = mongoose.model('Variant', variantSchema);

export { Product, Review, Variant };
export default Product;