import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from 'src/schemas/Posts.schema';
import { User, UserSchema } from 'src/schemas/users.schema';
import { PostLike, PostLikeSchema } from 'src/schemas/PostLikes.schema';
import { PostLikeService } from 'src/post-like/post-like.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Post.name,
        schema: PostSchema
      },
      {
        name: User.name,
        schema: UserSchema
      },
      {
        name: PostLike.name,
        schema: PostLikeSchema
      }
    ])
  ],
  controllers: [PostController],
  providers: [PostService,PostLikeService]
})
export class PostModule {}
