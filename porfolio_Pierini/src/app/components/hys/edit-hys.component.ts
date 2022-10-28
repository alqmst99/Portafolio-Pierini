import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hys } from 'src/app/model/hys.model';
import { HysService } from 'src/app/service/hys.service';

@Component({
  selector: 'app-edit-hys',
  templateUrl: './edit-hys.component.html',
  styleUrls: ['./edit-hys.component.css']
})
export class EditHysComponent implements OnInit {

  skill : Hys;
  constructor(private hysService: HysService, private activatedRouter: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hysService.detail(id).subscribe(data => { 
      this.skill = data;
    }, err =>{
      alert("error in the modifaication");
      this.router.navigate(['/home']);
    } )
  }
onEdit():void{
  const id = this.activatedRouter.snapshot.params['id'];
this.hysService.update(id, this.skill).subscribe( data => {
  this.router.navigate(['/home']);
}, err => {
  alert("error on update");
  this.router.navigate(['/home']);
})
}
}
