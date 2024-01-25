import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import BcryptUtil from 'src/lib/bcrypt/util';
import UUID_util from 'src/lib/uuid/util';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(username: string, password: string): Promise<User> {
    const hashed = await BcryptUtil.createHash(password)
    const createdUser = new this.userModel({
        userId: UUID_util.create(),
        username,
        password: hashed
    });
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findByUsername(username: string): Promise<User> {
    return this.userModel.findOne({ username }).exec()
  }
}
