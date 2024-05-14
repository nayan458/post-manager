import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostLike } from 'src/schemas/PostLikes.schema';

@Injectable()
export class PostLikeService {
    constructor(
        @InjectModel(PostLike.name) private postLikeModel: Model<PostLike>
    ){}

    getAllPostLikes(){
        return this.postLikeModel.find();
    }

    newLikePost(post_id: string,author_id: string){
        const newPostLiked = new this.postLikeModel({
            post_id, author_id
        });
        return newPostLiked.save();
    }

    async like(pid: string, uid: string) {
        const post = await this.postLikeModel.findOne({post_id: pid});
        const likes = post.like_count + 1;
        post.user_ids.push(pid);
        
        return this.postLikeModel.findByIdAndUpdate(post._id, {
            like_count: likes,
            user_ids: post.user_ids
        }, {new: true});
    }

    async dislike(pid: string, user_id: string) {
        const post = await this.postLikeModel.findOne({ post_id: pid });
    
        const likes = post.like_count - 1;

        const index = post.user_ids.indexOf(user_id);
        post.user_ids.splice(index, 1);
    
        return this.postLikeModel.findByIdAndUpdate(post._id, {
            like_count: likes,
            user_ids: post.user_ids
        }, { new: true });
    }
    
    async delete(pid: string){
        const postLike_id = await this.postLikeModel.findOne({post_id: pid})
        return this.postLikeModel.findByIdAndDelete(postLike_id._id)
    }
}
