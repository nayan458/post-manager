import { Module } from '@nestjs/common';
import { PostLikeController } from './post-like.controller';
import { PostLikeService } from './post-like.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostLike, PostLikeSchema } from 'src/schemas/PostLikes.schema';
import { PostService } from 'src/post/post.service';
import { Post, PostSchema } from 'src/schemas/Posts.schema';
import { User, UserSchema } from 'src/schemas/users.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name: PostLike.name,
      schema: PostLikeSchema
    },
    {
      name: Post.name,
      schema: PostSchema
    },
    {
      name: User.name,
      schema: UserSchema
    }
  ])
  ],
  controllers: [PostLikeController],
  providers: [PostLikeService, PostService]
})
export class PostLikeModule {}
