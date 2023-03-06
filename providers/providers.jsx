"use client";

import { ThemeProvider } from "next-themes";
import { MapProvider } from 'react-map-gl';

export function ThemeProviders({ children }) {
  return (
    <ThemeProvider attribute="class" enableSystem="false" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}

export function MapProviders({ children }) {
  return (
    <MapProvider>
      {children}
    </MapProvider>
  );
}
