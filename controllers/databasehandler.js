import { promises as fs } from 'fs';
import path from 'path';


// path to users.json
export const users = path.resolve('../1020CP/data/users.json');

// path to entries.json -- Not sure why I have to add my folder name to the file path but it doesn't work otherwise?
export const entries = path.resolve('../1020CP/data/entries.json');


// returns read file content to store in a variable

export const readMasterList = async (path) => {
    let content = await fs.readFile(path)
    return JSON.parse(content)
}

export const addNewItemToFile = async (path, item) => {
    await fs.writeFile(path, item)
    return JSON.parse(item)
}


