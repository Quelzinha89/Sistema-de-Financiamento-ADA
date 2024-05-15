import { Component } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider'
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
@Component({
  selector: 'app-simulacao',
  standalone: true,
  imports: [MatProgressBar,MatSliderModule,MatButtonModule,MatTooltipModule],
  templateUrl: './simulacao.component.html',
  styleUrl: './simulacao.component.scss'
})
export class SimulacaoComponent {

}
