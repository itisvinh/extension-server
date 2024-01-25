import * as bcrypt from 'bcrypt';

export namespace BcryptUtil {
    export async function createHash(original: string) {
        const saltOrRounds = 10;
        const password = 'random_password';
        const hash = await bcrypt.hash(password, saltOrRounds);
        return hash
    }

    export function compareOriginal(original: string, hashed: string) {
        return bcrypt.compareSync(original, hashed)
    }
}

export default BcryptUtil