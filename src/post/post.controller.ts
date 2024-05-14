import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/CreatePost.Dto';
import { UpdatePostDto } from './dto/UpdatePost.Dto';
import { PostLikeService } from 'src/post-like/post-like.service';

@Controller('post')
export class PostController {

    constructor(
        private postService: PostService,
        private postLikeService: PostLikeService
    ){}
    // get all posts
    @Get()
    getAllPosts(){
        return this.postService.getAllPosts();
    }

    @Post('/create')
    async createPost(
        @Body() createPostdto: CreatePostDto,
    ){
        const newpost = await this.postService.createPost(createPostdto);
        
        const post_id = newpost._id.toString();
        const author_id = newpost.author_id;

        return this.postLikeService.newLikePost(post_id, author_id)
    }

    @Get(':id')
    getPostbyId(@Param('id') id: string){
        return this.postService.getPostById(id);
    }

    @Get('/my-post/:id')
    getPostByAuthor(@Param('id') id: string){
        return this.postService.getPostByAuthor(id);
    }

    @Patch('/:pid')
    updatePost(@Param('pid') id: string, @Body() updatePostDto: UpdatePostDto){
        return this.postService.updatePostByPostId(id, updatePostDto);
    }

    @Delete('/:pid')
    deletePost(@Param('pid') id: string){
        return this.postService.deletePostById(id);
    }
}
