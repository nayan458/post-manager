import { IsString } from "class-validator";

export class CreatePostDto{

    @IsString()
    author_id: string;

    @IsString()
    title: string;

    @IsString()
    description: string;
}