import * as util from 'util';
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
