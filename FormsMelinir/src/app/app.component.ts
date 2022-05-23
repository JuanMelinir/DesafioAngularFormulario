import { Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormsMelinir';
  @ViewChild('myTestComponent') myTestComponent:FormularioComponent;;
  probarTestComponent(){
    console.log();
  }
}
