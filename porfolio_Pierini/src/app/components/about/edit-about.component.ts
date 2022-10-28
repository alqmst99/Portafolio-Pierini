import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/model/person.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {

  per : Person;
  constructor(private perService: PersonService, private activatedRouter: ActivatedRoute , private router: Router, public imageServ :ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['1'];
   
    this.perService.detail(1).subscribe(data => { 
      this.per=data;
    },err =>{
      alert("error in the modification");
      this.router.navigate(['/home']);
    } )
  }
onEdit():void{
  const id = this.activatedRouter.snapshot.params['1'];
  this.per.imgP = this.imageServ.url;
this.perService.update(1, this.per).subscribe(data => {
  this.router.navigate(['/home']);
}, err => {
  alert("error in the edition");
  this.router.navigate(['/home']);
})
}
uploadImg($event : any){
const id =this.activatedRouter.snapshot.params['1'];
const name = "perfil_"+ id;
  this.imageServ.uploadImg($event, name);
}

}
