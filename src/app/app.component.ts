import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
rs:string;
 constructor(private http: HttpClient){
  }

    ngOnInit(): void {

  }

search(value: any){
      console.log(value);
      console.log("function called");
      this.http.get('http://free.currencyconverterapi.com/api/v5/convert?q='+value+'&compact=y').subscribe(data => {
      var sd=data[value]["val"];
      this.rs = (sd).toString();
      console.log(sd);
    });


  }



  openDialog() {
    console.log("function called");

  }
}


