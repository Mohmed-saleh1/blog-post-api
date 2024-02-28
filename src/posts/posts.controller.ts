import { Controller, Param, Get } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Posts } from './posts.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get()
  findAll(): Posts[] {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `This action returns one post for id ${id}`;
  }
}
