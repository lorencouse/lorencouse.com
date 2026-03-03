import axios from 'axios';

import { SpotifyData } from '@/types/spotify';

export async function getSpotifyNowPlaying() {
  try {
    const res = await axios.get<SpotifyData>('/api/spotify');
    return res.data;
  } catch {
    return { isPlaying: false } as SpotifyData;
  }
}
