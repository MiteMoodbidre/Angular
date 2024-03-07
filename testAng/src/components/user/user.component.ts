import { Component } from "@angular/core";

@Component({
 selector: 'app-user',
 templateUrl:'./user.component.html',
 styleUrl:'./user.components.css'
})

export class UserComponent{

    //propertis
    firstName:string='Venkatesh';
    lastname:string='Kamath';
    age:number=21;

    //method
    constructor(){
        this.sayhello()
    }

    sayhello(){
        console.log(`Hello ${this.firstName}`)
    }
    
}