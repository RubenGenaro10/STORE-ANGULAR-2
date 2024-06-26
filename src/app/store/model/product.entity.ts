export class Product {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  rating:{
    rate:number;
    count:number;
  };

constructor(id: number, title: string, description: string,
            category: string, image: string,
            rating: {rate: number, count: number}) {
  this.id = id;
  this.title = title;
  this.description = description;
  this.category = category;
  this.image = image;
  this.rating = rating;
}
}
