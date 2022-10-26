import { deleteAsync } from 'del'
import { path } from '../config/config.js'
export const clear = () => {
    return deleteAsync(path.root)
}
