import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType('data')
export class UserDto {
  @Field({ nullable: false })
  @MinLength(10, { message: 'O valor deve estar entre 10 e 80 caracteres' })
  @MaxLength(80, { message: 'O valor deve estar entre 10 e 80 caracteres' })
  name: string;

  @Field({ nullable: false })
  @IsNotEmpty({ message: 'O campo e-mail não pode ser vazio' })
  email: string;

  @Field({ nullable: false })
  @MinLength(6, { message: 'O valor deve estar entre 6 e 15 caracteres' })
  @MaxLength(15, { message: 'O valor deve estar entre 6 e 15 caracteres' })
  @IsNotEmpty({ message: 'O campo password não pode ser vazio' })
  password: string;

  @Field(() => [String], { defaultValue: ['USER'] })
  roles?: string[];

  @Field({ nullable: false })
  @IsNotEmpty({ message: 'O campo birthday não pode ser vazio' })
  birthday: string;

  @Field({ nullable: false })
  @IsNotEmpty({ message: 'O campo cpf não pode ser vazio' })
  @MinLength(11, { message: 'O campo cpf deve ter no mínimo 11 caracteres' })
  @MaxLength(15, { message: 'O campo cpf deve ter no máximo 15 caracteres' })
  cpf: string;

  @Field({ nullable: false })
  @IsNotEmpty({ message: 'O campo phone não pode ser vazio' })
  phone: string;
}
