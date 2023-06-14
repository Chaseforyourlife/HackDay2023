import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import svgrPlugin from 'vite-plugin-svgr'
import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';
export default defineConfig(
{
    "build": {
      "outDir": "build"
    },
    "server": {
      "proxy": {
        "/api": {
          "target": "http://127.0.0.1:5000//api",
          "changeOrigin": true,
          "rewrite": "(path) => path.replace(/^\\/api/, '')"
        }
      }
    },
    "plugins": [
      {
        "name": "react"
      },
      {
        "name": "vite-plugin-eslint"
      },
      {
        "name": "@vitejs/plugin-react-refresh"
      },
      {
        "name": "vite-plugin-svgr",
        "options": {
          "svgrOptions": {
            "icon": true
          }
        }
      }
    ]
  }
)