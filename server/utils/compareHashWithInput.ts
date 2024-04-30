import * as bcrypt from 'bcrypt';

export function compareHashWithInput(hash: string, input: string): boolean {
  return bcrypt.compareSync(input, hash);
}
