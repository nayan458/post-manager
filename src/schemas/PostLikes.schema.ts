import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class PostLike {
    @Prop()
    author_id: string;

    @Prop()
    post_id: string;

    @Prop({type: [String],unique: true})
    user_ids: string[];

    @Prop({ default: 0 })
    like_count: number;
}

export const PostLikeSchema = SchemaFactory.createForClass(PostLike);
