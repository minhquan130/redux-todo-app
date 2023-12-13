import { v4 as uuidv4 } from 'uuid';

export function insertTodo(value) {
    return {
        id: uuidv4(),
        value,
        status: false
    }
}
