import { lyrics } from './lyrics.js';

export const demos = [
  {
    title: '彩虹生日派對',
    subtitle: '送給孩子、家人或朋友，一首明亮好唱的生日歌',
    mood: '明亮、開心、童趣',
    style: '生日派對、兒童流行、輕快合唱',
    audioSrc: '/audio/demo-birthday.mp3',
    coverSrc: '/images/demo-birthday-cover.jpg',
    coverAlt: '彩虹生日派對示範封面',
    lyrics: lyrics.birthday,
  },
  {
    title: '白紗與你',
    subtitle: '把求婚、婚禮與承諾，寫成一首可以播放的歌',
    mood: '深情、承諾、浪漫',
    style: '鋼琴抒情、婚禮流行',
    audioSrc: '/audio/demo-wedding.mp3',
    coverSrc: '/images/demo-wedding-cover.jpg',
    coverAlt: '白紗與你示範封面',
    lyrics: lyrics.wedding,
  },
  {
    title: '十七歲的票根',
    subtitle: '把青春、校園與沒說出口的心事，留成一首回憶歌',
    mood: '懷念、青春、未說出口的愛意',
    style: '華語青春抒情、校園流行',
    audioSrc: '/audio/demo-memory.mp3',
    coverSrc: '/images/demo-memory-cover.jpg',
    coverAlt: '十七歲的票根示範封面',
    lyrics: lyrics.memory,
  },
];
