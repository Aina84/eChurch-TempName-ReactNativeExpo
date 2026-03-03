// This file is required for Expo/React Native SQLite migrations - https://orm.drizzle.team/quick-sqlite/expo

import journal from './meta/_journal.json';
import m0000 from './0000_keen_kid_colt.sql';
import m0002 from './0002_public_sabra.sql';
import m0003 from './0003_whole_nova.sql';

  export default {
    journal,
    migrations: {
      m0000,
m0002,
m0003
    }
  }
  