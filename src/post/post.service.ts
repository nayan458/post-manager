
import { InjectModel } from '@nestjs/mongoose';
import { Post } from 'src/schemas/Posts.schema';
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/CreatePost.Dto';
import { Model } from 'mongoose';
import { User } from 'src/schemas/users.schema';
import { UpdatePostDto } from './dto/UpdatePost.Dto';


@Injectable()
export class PostService {
    constructor(
        @InjectModel(Post.name) private postModel: Model<Post>,
        @InjectModel(User.name) private userModel: Model<User>
    ){}

    // get all posts
    getAllPosts(){
        return this.postModel.find();
    }

    // create post by author
    createPost(createPostDto: CreatePostDto){
        const newPost = new this.postModel(createPostDto);
        return newPost.save();
    }

    // get post by id
    getPostById(post_id: string){
        return this.postModel.findById(post_id)
    }

    // get post written by author
    getPostByAuthor(author_id: string){
        return this.postModel.find({author_id: author_id})
    }

    // update post by post id
    updatePostByPostId(post_id: string, updatePostDto: UpdatePostDto){
        return this.postModel.findByIdAndUpdate(post_id, updatePostDto, {new: true})
    }

    // delete psot by post id
    deletePostById(post_id: string){
        return this.postModel.findByIdAndDelete(post_id)
    }

    // /////////////////////

    async postLike(post_id: string){

        const newpost = await this.postModel.findById(post_id);
        const newlikes: number = newpost.likes + 1;

        return this.postModel.findByIdAndUpdate(post_id, {likes : newlikes}, {new: true});
        
    }

    async disLike(post_id: string){

        const newpost = await this.postModel.findById(post_id);
        const newlikes: number = newpost.likes - 1;

        return this.postModel.findByIdAndUpdate(post_id, {likes : newlikes}, {new: true});
        
    }
}