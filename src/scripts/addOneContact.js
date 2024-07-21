import { PATH_DB } from '../contacts/contacts.js';

import fs from 'fs/promises';

import path from 'node:path';

import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    let contacts = [];
    try {
      const data = await fs.readFile(PATH_DB, 'utf-8');
      contacts = JSON.parse(data);
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }
    const newcontact = createFakeContact();
    contacts.push(newcontact);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`New contact has been added and saved to ${PATH_DB}`);
  } catch (error) {
    console.error(`Failed to add contact: ${error.message}`);
  }
};

addOneContact();
