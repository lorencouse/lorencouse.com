import Image from 'next/image';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import Quiz from '@/components/blog/Quiz';
import { Pre } from '@/components/content/Pre';
import SplitImage, { Split } from '@/components/content/SplitImage';
import CustomImg from '@/components/images/CustomImg';
import CustomLink from '@/components/links/CustomLink';
import TechIcons from '@/components/TechIcons';

import GitRepoLink from './projects/GitRepoLink';
import TimeLineBlock from '../blog/TimeLineBlock';

const MDXComponents = {
  a: CustomLink,
  Image,
  pre: Pre,
  CustomImg,
  LiteYouTubeEmbed,
  SplitImage,
  Split,
  TechIcons,
  Quiz,
  TimeLineBlock,
  GitRepoLink,
};

export default MDXComponents;
