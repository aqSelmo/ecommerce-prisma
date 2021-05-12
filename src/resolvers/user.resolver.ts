import { User } from '@models/user.model';
import { UserService } from '@services/user.service';
import { UserDto } from 'src/dto/user.dto';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';

@Resolver(of => User)
export class UserResolver {
  private usersService: UserService;

  constructor() {
    this.usersService = new UserService();
  }

  @Query(returns => [User])
  async findUsers() {
    return this.usersService.find();
  }

  @Query(returns => [User])
  async showUser(
    @Arg('id', { validate: true, nullable: false }) userId: number
  ) {
    return this.usersService.show(userId);
  }

  @Mutation(returns => User)
  async addUser(@Arg('data', { validate: true }) userData: UserDto) {
    return this.usersService.create(userData);
  }

  @Mutation(returns => User)
  async updateUser(
    @Arg('id', { validate: true }) userId: number,
    @Arg('data', { validate: true }) userData: UserDto
  ) {
    return this.usersService.update(userId, userData);
  }

  @Mutation(returns => String)
  async deleteUser(
    @Arg('id', { validate: true, nullable: false }) userId: number
  ) {
    return this.usersService.delete(userId);
  }
}
