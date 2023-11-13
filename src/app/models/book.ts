export interface Book {
    id: number
    title: string
    author: string
    description?: string
    categoryId: number
}
export interface FormBook {
    title: string
    author: string
    description?: string
    categoryId: number
}