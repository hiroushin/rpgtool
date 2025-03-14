import { ChangeDetectionStrategy, Component, OnInit, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { Pathfinder2 } from '../core/pathfinder2.rules';

@Component({
  selector: 'app-npc',
  imports: [
    MatButtonModule,
    MatExpansionModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './npc.component.html',
  styleUrl: './npc.component.css'
})
export class NpcComponent implements OnInit {

  readonly panelOpenState = signal(false);

  list: Array<any> = []

  ngOnInit() {
    Pathfinder2.subject().subscribe(data => {
      this.list = data
    });
    this.list = Pathfinder2.list()
  }

  new() {
    console.log(Pathfinder2.generateNpc())
  }
}
