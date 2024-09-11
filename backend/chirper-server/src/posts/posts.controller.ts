import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { AddPostDto } from 'src/dto/app-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  getAllPosts() {
    return this.postsService.getAllPosts();
  }

  @Get(':id')
  getPostById(@Param('id', ParseUUIDPipe) id: string) {
    const post = this.postsService.getPostById(id);
    if (!post) throw new NotFoundException();

    return post;
  }

  @Post()
  addPost(@Body() addPostDto: AddPostDto) {
    return this.postsService.addPost(addPostDto);
  }
}
