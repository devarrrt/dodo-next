// import { Ingredient, Product, ProductItem } from '@prisma/client';

export type ProductWithRelations = Product & { items: ProductItem[]; ingredients: Ingredient[] }
export interface User {
  id: number
  fullName: string
  email: string
  password: string
  role: UserRole
  verified?: Date
  provider?: string
  providerId?: string
  cart?: Cart
  orders: Order[]
  verificationCode?: VerificationCode
  createdAt: Date
  updatedAt: Date
}

export interface Category {
  id: number
  name: string
  products: Product[]
  createdAt: Date
  updatedAt: Date
}

export interface Product {
  id: number
  name: string
  imageUrl: string
  ingredients: Ingredient[]
  items: ProductItem[]
  category: Category
  categoryId: number
  createdAt: Date
  updatedAt: Date
}

export interface ProductItem {
  id: number
  price: number
  size?: number
  pizzaType?: number
  cartItems: CartItem[]
  product: Product
  productId: number
}

export interface Ingredient {
  id: number
  name: string
  price: number
  imageUrl: string
  products: Product[]
  cartItems: CartItem[]
  createdAt: Date
  updatedAt: Date
}

export interface Cart {
  id: number
  user?: User
  userId?: number
  items: CartItem[]
  token: string
  totalAmount: number
  createdAt: Date
  updatedAt: Date
}

export interface CartItem {
  id: number
  cart: Cart
  cartId: number
  productItem: ProductItem
  productItemId: number
  quantity: number
  ingredients: Ingredient[]
  createdAt: Date
  updatedAt: Date
}

export interface Order {
  id: number
  user?: User
  userId?: number
  token: string
  totalAmount: number
  status: OrderStatus
  paymentId?: string
  items: any // JSON type, можно уточнить
  fullName: string
  email: string
  phone: string
  address: string
  comment?: string
  createdAt: Date
  updatedAt: Date
}

export interface VerificationCode {
  id: number
  user: User
  userId: number
  code: string
  createdAt: Date
}

export interface Story {
  id: number
  previewImageUrl: string
  items: StoryItem[]
  createdAt: Date
}

export interface StoryItem {
  id: number
  storyId: number
  story: Story
  sourceUrl: string
  createdAt: Date
}

// Enum types
export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

export enum OrderStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
}
