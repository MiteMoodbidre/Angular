import { Component } from "@angular/core";
import {User} from "../../Models/User";

@Component({
 selector: 'app-user',
 templateUrl:'./user.component.html',
 styleUrl:'./user.components.css'
})

export class UserComponent{

    //propertis
    user:User

    constructor(){
        this.user={
            firstname:"Pranav",
            lastname:"Joshi",
            age:21
        }
    }
}

    
   
    //method
   
    