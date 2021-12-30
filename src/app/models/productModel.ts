import { RatingModel } from './ratingModel';
export interface ProductModel{
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: RatingModel
}