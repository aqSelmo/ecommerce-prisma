import { GraphQLError } from 'graphql';

export class ValidationError {
  public path: string[];
  public message: string;

  constructor(errors: GraphQLError) {
    this.message = errors.message;
    this.path = errors.extensions.exception.validationErrors;
  }
}
