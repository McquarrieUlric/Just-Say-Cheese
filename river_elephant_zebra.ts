// 1
class CheeseShop {
    
    // 2
    private selection: Cheese[] = [];
    
    // 3
    constructor() {
    }
    
    // 4
    public addCheese(cheese: Cheese): void {
        this.selection.push(cheese);
    }
    
    // 5
    public getCheeses(): Cheese[] {
        return this.selection;
    }
    
    // 6
    public getCheeseByName(name: string): Cheese | undefined {
        return this.selection.find(cheese => cheese.name === name);
    }
    
    // 7
    public getCheeseByType(type: string): Cheese[] {
        return this.selection.filter(cheese => cheese.type === type);
    }
    
    // 8
    public removeCheeseByName(name: string): void {
        this.selection = this.selection.filter(cheese => cheese.name !== name);
    }
    
    // 9
    public getCheesesByPriceRange(low: number, high: number): Cheese[] {
        return this.selection.filter(cheese => cheese.price >= low && cheese.price <= high);
    }
    
    // 10
    public getCheesesByOriginCountry(country: string): Cheese[] {
        return this.selection.filter(cheese => cheese.originCountry === country);
    }
    
    // 11
    public getCheesesByFlavor(flavor: string): Cheese[] {
        return this.selection.filter(cheese => cheese.flavor === flavor);
    }
    
    // 12
    public getCheesesByTexture(texture: string): Cheese[] {
        return this.selection.filter(cheese => cheese.texture === texture);
    }
    
    // 13
    public getCheesesByTypeAndTexture(type: string, texture: string): Cheese[] {
        return this.selection.filter(cheese => cheese.type === type && cheese.texture === texture);
    }
    
    // 14
    public getCheesesByTypeAndFlavor(type: string, flavor: string): Cheese[] {
        return this.selection.filter(cheese => cheese.type === type && cheese.flavor === flavor);
    }
    
    // 15
    public getCheesesByTypeAndPriceRange(type: string, low: number, high: number): Cheese[] {
        return this.selection.filter(cheese => cheese.type === type && cheese.price >= low && cheese.price <= high);
    }
    
    // 16
    public getCheesesByTypeAndOriginCountry(type: string, country: string): Cheese[] {
        return this.selection.filter(cheese => cheese.type === type && cheese.originCountry === country);
    }
    
    // 17
    public getCheesesByTextureAndFlavor(texture: string, flavor: string): Cheese[] {
        return this.selection.filter(cheese => cheese.texture === texture && cheese.flavor === flavor);
    }
    
    // 18
    public getCheesesByTextureAndPriceRange(texture: string, low: number, high: number): Cheese[] {
        return this.selection.filter(cheese => cheese.texture === texture && cheese.price >= low && cheese.price <= high);
    }
    
    // 19
    public getCheesesByTextureAndOriginCountry(texture: string, country: string): Cheese[] {
        return this.selection.filter(cheese => cheese.texture === texture && cheese.originCountry === country);
    }
    
    // 20
    public getCheesesByFlavorAndPriceRange(flavor: string, low: number, high: number): Cheese[] {
        return this.selection.filter(cheese => cheese.flavor === flavor && cheese.price >= low && cheese.price <= high);
    }
    
    // 21
    public getCheesesByFlavorAndOriginCountry(flavor: string, country: string): Cheese[] {
        return this.selection.filter(cheese => cheese.flavor === flavor && cheese.originCountry === country);
    }
    
    // 22
    public getCheesesByPriceRangeAndOriginCountry(low: number, high: number, country: string): Cheese[] {
        return this.selection.filter(cheese => cheese.price >= low && cheese.price <= high && cheese.originCountry === country);
    }
    
    // 23
    public getCheesesByTypeAndTextureAndFlavor(type: string, texture: string, flavor: string): Cheese[] {
        return this.selection.filter(cheese => cheese.type === type && cheese.texture === texture && cheese.flavor === flavor);
    }
    
    // 24
    public getCheesesByTypeAndTextureAndPriceRange(type: string, texture: string, low: number, high: number): Cheese[] {
        return this.selection.filter(cheese => cheese.type === type && cheese.texture === texture && cheese.price >= low && cheese.price <= high);
    }
    
    // 25
    public getCheesesByTypeAndTextureAndOriginCountry(type: string, texture: string, country: string): Cheese[] {
        return this.selection.filter(cheese => cheese.type === type && cheese.texture === texture && cheese.originCountry === country);
    }
    
    // 26
    public getCheesesByTypeAndFlavorAndPriceRange(type: string, flavor: string, low: number, high: number): Cheese[] {
        return this.selection.filter(cheese => cheese.type === type && cheese.flavor === flavor && cheese.price >= low && cheese.price <= high);
    }
    
    // 27
    public getCheesesByTypeAndFlavorAndOriginCountry(type: string, flavor: string, country: string): Cheese[] {
        return this.selection.filter(cheese => cheese.type === type && cheese.flavor === flavor && cheese.originCountry === country);
    }
    
    // 28
    public getCheesesByTextureAndFlavorAndPriceRange(texture: string, flavor: string, low: number, high: number): Cheese[] {
        return this.selection.filter(cheese => cheese.texture === texture && cheese.flavor === flavor && cheese.price >= low && cheese.price <= high);
    }
    
    // 29
    public getCheesesByTextureAndFlavorAndOriginCountry(texture: string, flavor: string, country: string): Cheese[] {
        return this.selection.filter(cheese => cheese.texture === texture && cheese.flavor === flavor && cheese.originCountry === country);
    }
    
    // 30
    public getCheesesByTextureAndPriceRangeAndOriginCountry(texture: string, low: number, high: number, country: string): Cheese[] {
        return this.selection.filter(cheese => cheese.texture === texture && cheese.price >= low && cheese.price <= high && cheese.originCountry === country);
    }
    
    // 31
    public getCheesesByFlavorAndPriceRangeAndOriginCountry(flavor: string, low: number, high: number, country: string): Cheese[] {
        return this.selection.filter(cheese => cheese.flavor === flavor && cheese.price >= low && cheese.price <= high && cheese.originCountry === country);
    }
    
    // 32
    public getCheesesByTypeAndTextureAndFlavorAndPriceRange(type: string, texture: string, flavor: string, low: number, high: number): Cheese[] {
        return this.selection.filter(cheese => cheese.type === type && cheese.texture === texture && cheese.flavor === flavor && cheese.price >= low && cheese.price <= high);
    }
    
    // 33
    public getCheesesByTypeAndTextureAndFlavorAndOriginCountry(type: string, texture: string, flavor: string, country: string): Cheese[] {
        return this.selection.filter(cheese => cheese.type === type && cheese.texture === texture && cheese.flavor === flavor && cheese.originCountry === country);
    }
    
    // 34
    public getCheesesByTypeAndTextureAndPriceRangeAndOriginCountry(type: string, texture: string, low: number, high: number, country: string): Cheese[] {
        return this.selection.filter(cheese => cheese.type === type && cheese.texture === texture && cheese.price >= low && cheese.price <= high && cheese.originCountry === country);
    }
    
    // 35
    public getCheesesByTypeAndFlavorAndPriceRangeAndOriginCountry(type: string, flavor: string, low: number, high: number, country: string): Cheese[] {
        return this.selection.filter(cheese => cheese.type === type && cheese.flavor === flavor && cheese.price >= low && cheese.price <= high && cheese.originCountry === country);
    }
    
    // 36
    public getCheesesByTextureAndFlavorAndPriceRangeAndOriginCountry(texture: string, flavor: string, low: number, high: number, country: string): Cheese[] {
        return this.selection.filter(cheese => cheese.texture === texture && cheese.flavor === flavor && cheese.price >= low && cheese.price <= high && cheese.originCountry === country);
    }
    
    // 37
    public getCheesesByTypeAndTextureAndFlavorAndPriceRangeAndOriginCountry(type: string, texture: string, flavor: string, low: number, high: number, country: string): Cheese[] {
        return this.selection.filter(cheese => cheese.type === type && cheese.texture === texture && cheese.flavor === flavor && cheese.price >= low && cheese.price <= high && cheese.originCountry === country);
    }
    
    // 38
    getAllCheeses(): Cheese[] {
        return this.selection;
    }
}

// 39
interface Cheese {
    name: string;
    type: string;
    flavor: string;
    texture: string;
    originCountry: string;
    price: number;
}