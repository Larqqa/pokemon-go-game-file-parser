import * as util from 'util';
import * as fs from 'fs';
import fetch from 'node-fetch';

export function logAll(data: unknown): void {
  const args = {
    showHidden: false,
    depth: null,
    colors: true
  };

  console.log( util.inspect( data, args ) );
}

export async function fetchData<T>(url: string): Promise<T> {
  try {
    const request = await fetch(url);
    const data = await request.json();
    return data;
  } catch (e) {
    throw new Error(e);
  }
}

export class Map {
  object: { [key: string]: any; };

  constructor() {
    this.object = {};
  }

  public get(key: string | number): any{
    const k = key.toString();
    return this.object[k];
  }

  public has(key: string | number): boolean {
    const k = key.toString();
    return Object.keys(this.object).includes(k);
  }

  public set(key: string | number, data: any): void {
    const k = key.toString();
    this.object[k] = data;
  }
}

export function makeFile(location: string, data: any, message = ''): void {
  fs.writeFile(
    location,
    JSON.stringify(data),
    'utf8', (e: any) => {
      if (e) console.error(e);
      console.log(message);
    }
  );
}