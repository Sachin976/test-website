import { blogDataProps } from './types';
import DummyImageSecond from '../../../assets/image/dummy1.png';
import DummyImage from '../../../assets/image/dummy.png';
import DummyImageFourth from '../../../assets/image/dummy3.png';
import DummyImageThird from '../../../assets/image/dummy2.png';

export const BlogCardData: blogDataProps[] = [
  {
    id: '1',
    images: DummyImageSecond,
    title: 'What is a Self Regulated PET?',
    date: 'December 9, 2022 ',
    author: 'Admin',
    link:'https://dev.p2epro.site/2022/12/09/what-is-a-self-regulated-pet/',
    description:
      "Abstract Privacy Enhancing Technologies (PETs) have been around for a long time in regulatory compliance, terms, and conditions, etc. Since the inception of advanced technologies...",
  },
  {
    id: '2',
    images: DummyImage,
    title: 'How can PETs strengthen the security of blockchains?',
    date: 'Jan, 2022',
    author: 'Admin',
    link:"https://dev.p2epro.site/2022/12/09/how-can-pets-strengthen-the-security-of-blockchains/",
    description:
      "What is Blockchain Technology? Blockchain is a self-regulated peer-to-peer (P2P) network with a distributed append-only database that verifies and stores records. It enables immutability, transparency,...",
  },
  {
    id: '3',
    images: DummyImageFourth,
    title: `Why is “Blockchain” not “Crypto”? Revisited`,
    date: 'Jan, 2022',
    author: 'Admin',
    link:"https://dev.p2epro.site/2022/12/06/eminem-stronger-than-i-was/",
    description:
      "What is Blockchain? Blockchain can be described as: A Decentralized Storage Technology inspired by Distributed Ledger Technology (DLT) A Peer-to-Peer (P2P) network of nodes or network participants A...",
  },
  {
    id: '4',
    images: DummyImageThird,
    title: 'Significance of Adequate Crypto Regulations',
    date: 'Jan, 2022',
    author: 'Admin',
    link:"https://dev.p2epro.site/2022/12/06/dj-dark-chill-vibes/",
    description:
      "Why do we require Crypto Regulations? Cryptocurrencies are a high-risk digital asset class with potential economic and social vulnerabilities raising the urgent requirement for regulations. These...",
  },
];
