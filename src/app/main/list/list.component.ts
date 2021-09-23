import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { List } from './shared/list.model';
import { ListService } from './shared/list.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  username: string = "dhong"
  lists!: List[];
  isLoading = true;
  sub!: Subscription;

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    console.log(this.username)
    this.username="theeradetch"
    console.log(this.username)
    this.sub = this.listService.getAllList().subscribe(
      (lists: List[]) => {
        console.log(this.username)
        this.lists = lists
      },
      (error: any) => {
        console.log(error);
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );
  }


}
