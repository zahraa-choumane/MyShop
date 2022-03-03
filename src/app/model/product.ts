import { Byte } from "@angular/compiler/src/util";

export default class Product
{
    constructor(public id:string,public title:string,description:string,price:string,image:Byte){};
}