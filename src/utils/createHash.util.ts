import * as crypto from 'crypto';

export class CreateHash {
  execute(phrase: string): string {
    return crypto.createHash('sha256').update(phrase).digest('hex');
  }
}
