import { blogDataProps } from './types';
import DummyImageSecond from '../../../assets/image/dummy1.png';
import DummyImage from '../../../assets/image/dummy.png';
import DummyImageFourth from '../../../assets/image/dummy3.png';
import DummyImageThird from '../../../assets/image/dummy2.png';

export const BlogCardData: blogDataProps[] = [
  {
    id: '1',
    images: DummyImageSecond,
    title: 'Title of the post',
    date: 'Jan, 2022',
    author: 'Sepehr Babaei',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
  },
  {
    id: '2',
    images: DummyImage,
    title: 'Title of the post',
    date: 'Jan, 2022',
    author: 'Sepehr Babaei',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
  },
  {
    id: '3',
    images: DummyImageFourth,
    title: 'Title of the post',
    date: 'Jan, 2022',
    author: 'Sepehr Babaei',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
  },
  {
    id: '4',
    images: DummyImageThird,
    title: 'Title of the post',
    date: 'Jan, 2022',
    author: 'Sepehr Babaei',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
  },
];
