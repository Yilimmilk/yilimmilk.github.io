import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import { createVuetify } from 'vuetify';
import { aliases } from 'vuetify/iconsets/mdi';

import android from '@/assets/android.svg';
import docker from '@/assets/docker.svg';
import linux from '@/assets/linux.svg';
import mapotofu from '@/assets/mapotofu.svg';
import mysql from '@/assets/mysql.svg';
import postgresql from '@/assets/postgresql.svg';

export default createVuetify({
  theme: {
    defaultTheme: 'light',
  },
  icons: {
    aliases: {
      ...aliases,
      android,
      docker,
      linux,
      mapotofu,
      mysql,
      postgresql,
    },
  },
});
