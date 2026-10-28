import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.megamu.guildtracker',
  appName: 'MegaMU Guild Tracker',
  webDir: './', // Como tus archivos HTML/JS están en la raíz
  bundledWebRuntime: false
};

export default config;
