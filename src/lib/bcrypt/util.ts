import * as bcrypt from 'bcrypt';

export namespace BcryptUtil {
    export async function createHash(original: string) {
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(original, saltOrRounds);
        return hash
    }

    export function compareOriginal(original: string, hashed: string) {
        return bcrypt.compareSync(original, hashed)
    }
}

export default BcryptUtil