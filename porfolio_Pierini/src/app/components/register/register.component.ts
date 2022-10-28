import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  nameUser:string;
 email:string;
 password:string;


  constructor(private AuthServ: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const usuario = new Usuario(this.name, this.nameUser,this.email,this.password);
    this.AuthServ.create(usuario).subscribe(data => {
      alert("the experiense is save");
      this.router.navigate(['/home']);
    }, err => {
      alert("save fail");
      this.router.navigate(['/home']);
    })
    
  }
}
