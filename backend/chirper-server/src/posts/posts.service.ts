import { Injectable } from '@nestjs/common';
import { Post } from 'src/types/post.type';
import { find } from 'lodash/fp';
import { AddPostDto } from 'src/dto/app-post.dto';
import moment from 'moment';

@Injectable()
export class PostsService {
  private readonly posts: Post[] = [];

  getAllPosts() {
    return this.posts;
  }

  getPostById(id: string) {
    return find(['id', id], this.posts);
  }

  addPost(addPostDto: AddPostDto) {
    const newPost = {
      ...addPostDto,
      id: crypto.randomUUID(),
      createdAt: moment().toISOString(),
      deletedAt: null,
    };

    this.posts.push(newPost);
  }
}
