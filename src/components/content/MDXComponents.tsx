import Image from 'next/image';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import Quiz from '@/components/blog/Quiz';
import GithubCard from '@/components/content/card/GithubCard';
import { Pre } from '@/components/content/Pre';
import SplitImage, { Split } from '@/components/content/SplitImage';
import TweetCard from '@/components/content/TweetCard';
import CustomImg from '@/components/images/CustomImg';
import CustomLink from '@/components/links/CustomLink';
import TechIcons from '@/components/TechIcons';

import TimeLineBlock from '../blog/TimeLineBlock';

const MDXComponents = {
  a: CustomLink,
  Image,
  pre: Pre,
  // code: CustomCode,
  CustomImg,
  LiteYouTubeEmbed,
  SplitImage,
  Split,
  TechIcons,
  TweetCard,
  GithubCard,
  Quiz,
  TimeLineBlock,
};

export default MDXComponents;
