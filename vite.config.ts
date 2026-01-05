import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-react-compiler',
            {
              sources: (_filename: string) => {
                return true;
              },
            },
          ],
        ],
      },
    }),
  ],
});
