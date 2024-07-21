import { PATH_DB } from '../contacts/contacts.js';

import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error(`Failed to read contacts: ${error.message}`);
    return [];
  }
};

console.log(await getAllContacts());
