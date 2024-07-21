import { PATH_DB } from '../contacts/contacts.js';

import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const contacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`All contacts have been removed from ${PATH_DB}`);
  } catch (error) {
    console.log(`Failed to remove contacts: ${error.message}`);
  }
};
removeAllContacts();
