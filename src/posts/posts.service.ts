import { Injectable } from '@nestjs/common';
import { Posts } from './posts.interface';

@Injectable()
export class PostsService {
  private readonly posts: Posts[] = [];

  create(post: Posts) {
    this.posts.push(post);
  }
  findAll(): Posts[] {
    return this.posts;
  }
}
