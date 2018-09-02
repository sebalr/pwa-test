import { Component, OnInit } from '@angular/core';
import { ApiBackendService } from '../../../service-backend/api-backend.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-module-two',
  templateUrl: './module-two.component.html',
  styleUrls: ['./module-two.component.scss']
})
export class ModuleTwoComponent implements OnInit {

  public posts: Array<Post>
  public page: number;

  constructor(private serviceBackend: ApiBackendService) {
    this.page=1;
    this.posts = new Array();
   }

  ngOnInit() {
    this.getPosts();
  }

  private async getPosts() {
    this.posts = await this.serviceBackend.getAllPost();
  }

}
