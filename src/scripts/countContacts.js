import { PATH_DB } from '../contacts/contacts.js';

import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const constants = JSON.parse(data);
    return constants.length;
  } catch (error) {
    console.error(`Failed to count contacts: ${error.message}`);
    return 0;
  }
};

console.log(await countContacts());
