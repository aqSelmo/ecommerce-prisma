import { prisma } from '@database/index';
import { NotFoundError } from 'src/exceptions/notFound.exception';
import { CreateHash } from 'src/utils/createHash.util';

interface Request {
  name: string;
  email: string;
  password: string;
  roles?: string[];
  cpf: string;
  phone: string;
  birthday: string;
}

export class UserService {
  private createHashService: CreateHash;

  constructor() {
    this.createHashService = new CreateHash();
  }

  async find() {
    const users = await prisma.user.findMany();

    return users;
  }

  async show(id: number) {
    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundError(`Usuário id: ${id} não encontrado`);
    }

    return user;
  }

  async create(userData: Request) {
    const user = await prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: this.createHashService.execute(userData.password),
        roles: userData.roles,
        birthday: userData.birthday,
        cpf: userData.cpf,
        phone: userData.phone,
      },
    });

    return user;
  }

  async update(id: number, userData: Request) {
    const user = await prisma.user.update({
      data: {
        name: userData.name,
        email: userData.email,
        password: this.createHashService.execute(userData.password),
        roles: userData.roles,
        birthday: userData.birthday,
        cpf: userData.cpf,
        phone: userData.phone,
      },
      where: {
        id,
      },
    });

    return user;
  }

  async delete(id: number) {
    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundError(`Usuário id: ${id} não encontrado`);
    }

    await prisma.user.delete({
      where: {
        id,
      },
    });

    return `Usuário id: ${id} removido com sucesso`;
  }
}
