import {  
    Component,  
    Inject,  
    OnInit
} from '@angular/core';  
import {  
    Http,  
    Headers  
} from '@angular/http';  
import {  
    UserService  
} from '../../services/userservices'  
import {  
    Router,  
    ActivatedRoute  
} from '@angular/router';  
import { DatePipe } from '@angular/common';
@Component({  
    selector: 'user',  
    templateUrl: './user.component.html'  
})  
export class UserComponent implements OnInit {  
    public userlist: UserList[];  
    errorMessage:any;
    constructor(public http: Http, private _userService: UserService) {  }  

    ngOnInit() {
        this.getUsers();  
    }
    getUsers() {  
        this._userService.getUsers().subscribe(data => {
        this.userlist = data;
        console.log(this.userlist);
        }, 
        error=> {
            console.log(error);
        })
    }  
    lockUser(UserId: string) {  
        var ans = confirm("Do you want to lock user with Id: " + UserId);  
        if (ans) {  
            this._userService.lockUser(UserId).subscribe((data) => {  
                this.getUsers();  
            }, error => console.error(error))  
        }  
    }  
    unlockUser(UserId: string) {  
        var ans = confirm("Do you want to unlock user with Id: " + UserId);  
        if (ans) {  
            this._userService.unlockUser(UserId).subscribe(()=>{  
                this.getUsers();  
            }, error => this.errorMessage = error)  
        }  
    }  
    deleteUser(UserId: string) {  
        var ans = confirm("Do you want to delete user with Id: " + UserId);  
        if (ans) {  
            this._userService.deleteUser(UserId).subscribe((data) => {  
               this.getUsers();
            }, error => this.errorMessage = error)  
        }  
    } 
}  
interface UserList {  
    UserId: string;  
    ConcurrencyStamp: string;  
    Email: string;  
    Firstname: string;  
    LastName: string;  
    LockoutEnd:DatePipe;
    SecurityStamp:string;
    UserName:string;
}  