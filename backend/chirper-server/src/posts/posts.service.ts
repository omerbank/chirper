import { Injectable } from '@nestjs/common';
import { DrizzleService } from 'db/drizzle.service';
import { post } from '../../db/schema';
import { eq } from 'drizzle-orm';
import { AddPostDto } from 'src/dto/app-post.dto';

@Injectable()
export class PostsService {
  constructor(private drizzleService: DrizzleService) {}

  getAllPosts() {
    return this.drizzleService.db.query.post.findMany({
      with: {
        user: true,
      },
    });
  }

  getPostById(id: string) {
    return this.drizzleService.db.query.post.findFirst({
      where: eq(post.id, id),
      with: {
        user: true,
      },
    });
  }

  async addPost(addPostDto: AddPostDto) {
    await this.drizzleService.db.insert(post).values(addPostDto);
  }
}
