// import { Comment } from "@angular/compiler";
import { Comment } from './Comment';


export class Dish {
    id: string| undefined;
    name: string| undefined;
    image: string| undefined;
    category: string| undefined;
    featured: boolean| undefined;
    label: string| undefined;
    price: string | undefined;
    description!: string;
    comments!: Comment[];

}