import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { PostLikeModule } from './post-like/post-like.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.LOCAL_DB),
    UserModule,
    PostModule,
    PostLikeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
