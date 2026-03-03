import axios from 'axios';

import { ContentMeta, SingleContentMeta } from '@/types/meta';

export async function getContentMeta() {
  try {
    const res = await axios.get<Array<ContentMeta>>('/api/content');
    return res.data;
  } catch {
    return [] as Array<ContentMeta>;
  }
}

export async function getSingleContentMeta({ slug }: { slug: string }) {
  try {
    const res = await axios.get<SingleContentMeta>(`/api/content/${slug}`);
    return res.data;
  } catch {
    return { contentViews: 0, contentLikes: 0, likesByUser: 0 } as SingleContentMeta;
  }
}

export async function incrementViewCount({ slug }: { slug: string }) {
  const res = await axios.post<SingleContentMeta>(`/api/content/${slug}`);
  return res.data;
}

export async function incrementLikeCount({ slug }: { slug: string }) {
  const res = await axios.post<SingleContentMeta>(`/api/like/${slug}`);
  return res.data;
}
