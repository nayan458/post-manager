import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User{
    @Prop()
    username: string;

    @Prop()
    fname: string;

    @Prop()
    lname: string;

    @Prop()
    password: string;

    @Prop()
    email: string;

}


export const UserSchema = SchemaFactory.createForClass(User);