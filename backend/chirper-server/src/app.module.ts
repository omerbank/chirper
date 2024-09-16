import { Module } from '@nestjs/common';
import { DrizzleModule } from 'db/drizzle.module';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DrizzleModule,
    PostsModule,
  ],
})
export class AppModule {}
