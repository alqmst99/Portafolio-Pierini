import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education.model';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {

  nameE: string='';
  dateI: string='';
  dateF: string='';
  descEd: string='';

  constructor(private eduService: EducationService, private router:Router) { }

  ngOnInit(): void {
  }
onCreate(): void{
  const edu = new Education(this.nameE, this.dateI, this.dateF, this.descEd);
  this.eduService.save(edu).subscribe(data => {alert("the experiense is save");
  this.router.navigate(['/home']);
}, err =>{
  alert("save fail");
  this.router.navigate(['/home']);
} )
}
}
