import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostLikeService } from './post-like.service';
import { PostService } from 'src/post/post.service';

@Controller('post-like')
export class PostLikeController {

    constructor(
        private postLikeService: PostLikeService,
        private postService: PostService
    ){}
    
    @Get()
    allLikePOst(){
        return this.postLikeService.getAllPostLikes();
    }

    @Post('/like/:pid')
    async LikePost(@Param('pid') pid: string, @Body() body: {user_id: string} ){
        this.postService.postLike(pid)
        return this.postLikeService.like(pid,body.user_id)
    }

    @Post('/unlike/:pid')
    UnikePost(@Param('pid') pid: string, @Body() body: {user_id: string} ){
        this.postService.disLike(pid)
        return this.postLikeService.dislike(pid,body.user_id)
    }
}
