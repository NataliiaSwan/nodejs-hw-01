import { PATH_DB } from '../contacts/contacts.js';

import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    let contacts = JSON.parse(data);
    if (contacts.length > 0) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
      console.log(`Last contact has been removed from ${PATH_DB}`);
    } else {
      console.log(`No contacts to remove in ${PATH_DB}`);
    }
  } catch (error) {
    console.error(`Failed to remove last contact: ${error.message}`);
  }
};

removeLastContact();
