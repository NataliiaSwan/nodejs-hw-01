import { PATH_DB } from '../contacts/contacts.js';

import fs from 'fs/promises';

import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    let contacts = [];
    try {
      const data = await fs.readFile(PATH_DB, 'utf-8');
      contacts = JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        contacts = [];
      }
    }

    for (let i = 0; i < number; i += 1) {
      contacts.push(createFakeContact());
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(
      `${number} new contacts have been generated and saved to ${PATH_DB}`,
    );
  } catch (error) {
    console.error(`Failed to generate contacts: ${error.message}`);
  }
};
generateContacts(5);
