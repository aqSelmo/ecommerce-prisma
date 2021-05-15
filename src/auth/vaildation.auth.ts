import { UserService } from '@services/user.service';
import { Roles } from 'src/enums/roles.enum';
import { AuthChecker } from 'type-graphql';

export const customAuthChecker: AuthChecker = async (
  { root, args, context, info },
  roles
) => {
  const authenticationPass: boolean[] = [];
  const usersService = new UserService();

  const user = await usersService.show(args.id);

  if (user) {
    Object.keys(Roles).map((value, index) =>
      roles.includes(value)
        ? authenticationPass.push(user.roles.includes(value))
        : null
    );

    return authenticationPass.includes(true);
  }

  return false;
};
