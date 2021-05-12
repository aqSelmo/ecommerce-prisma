import 'reflect-metadata';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class User {
  @Field(type => ID)
  id: number;

  @Field(type => String, { nullable: false })
  name: string;

  @Field(type => String, { nullable: false })
  email: string;

  @Field(type => String, { nullable: false })
  password: string;

  @Field(type => [String])
  roles?: string[];

  @Field(type => String, { nullable: false })
  birthday: string;

  @Field(type => String, { nullable: false })
  cpf: string;

  @Field(type => String, { nullable: false })
  phone: string;

  @Field(type => Date)
  createdAt?: Date;

  @Field(type => Date)
  updatedAt?: Date;
}
