import { Ingredient } from 'src/app/shared/ingredient.model';

export class Recipe {
    public name: string;
    public description :string;
    public imgPath: string;
    public ingerdients:Ingredient[];
    
    constructor(name: string, description: string, imgPath: string,ingrednet: Ingredient[]){
        this.name = name;
        this.description = description;
        this.imgPath = imgPath;
        this.ingerdients = ingrednet;
    }


}