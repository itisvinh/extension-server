import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PubliclyModule } from './publicly/publicly.module';

@Module({
  imports: [
    AuthModule, 
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/extension'),
    PubliclyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
