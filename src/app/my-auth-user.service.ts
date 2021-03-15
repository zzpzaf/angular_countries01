import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyAuthUserService {

  private u_email:string = "";
  private u_passw:string = "";
  private u_token: string = "";

  private lstorageItem:string = 'ACCESS_TOKEN';
  private known_u_email:string ='myemail@gmail.com';
  private known_u_passw:string ='passw';
  private known_u_token:string = this.known_u_email + '_access_token';
  
  constructor(private router: Router) { }

  public setUser(uemail:string, upassw:string): void {
    this.u_email = uemail;
    this.u_passw = upassw;
    if(this.u_email === this.known_u_email && this.u_passw === this.known_u_passw) {
      localStorage.setItem(this.lstorageItem,this.known_u_token);
    }
  }

  public isUserAthorized():boolean {

    let retval: boolean = true;

    // if(this.u_email !== 'myemail@gmail.com' && this.u_passw !== 'passw') { 
    //   alert('Wrong credentials! You are not allowed to view this page!');
    //   retval = false
    // }

    this.u_token = localStorage.getItem(this.lstorageItem)!;

    if (this.u_token !== this.known_u_token) {
      alert('Wrong credentials! You are not allowed to view this page! ' + this.u_token);
      retval = false
    }

    return retval;

  }


  public logout(){
    localStorage.removeItem(this.lstorageItem);
    this.router.navigateByUrl('/login');
  }


}




