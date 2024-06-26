import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Post{

    @Prop()
    author_id: string;

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop({default: 0})
    likes: number;

}

export const PostSchema = SchemaFactory.createForClass(Post);