import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Template_from';

  constructor() {
  }
  ngOnInit(): void {
  }

  userdata={
    username:'',
    password:'',
  };
  onSubmit(){
    localStorage.setItem('userdata',JSON.stringify(this.userdata));
    console.log(this.userdata);
  }
}
