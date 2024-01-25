import { v4 as uuidv4 } from 'uuid';

namespace UUID_util {
    export function create() {
        return uuidv4()
    }
}

export default UUID_util