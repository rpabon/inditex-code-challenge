import { PodcastFeed } from 'podcast-types';

const podcastFeed: PodcastFeed = {
  feed: {
    author: { name: { label: 'Apple' } },
    entry: [
      {
        'im:name': { label: 'Podcast 1' },
        'im:image': [
          {
            label: 'https://example.com/image1.jpg',
            attributes: { height: '55' },
          },
          {
            label: 'https://example.com/image1.jpg',
            attributes: { height: '60' },
          },
          {
            label: 'https://example.com/image1.jpg',
            attributes: { height: '170' },
          },
        ],
        summary: { label: 'Summary of Podcast 1' },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' },
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2024 Podcast 1' },
        title: { label: 'Podcast 1 - Creator 1' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://example.com/podcast1',
          },
        },
        id: {
          label: 'https://example.com/podcast1',
          attributes: { 'im:id': '1001' },
        },
        'im:artist': { label: 'Creator 1' },
        category: {
          attributes: {
            'im:id': '1310',
            term: 'Music',
            scheme: 'https://example.com/genre/music',
            label: 'Music',
          },
        },
        'im:releaseDate': {
          label: '2024-01-01T00:00:00-07:00',
          attributes: { label: 'January 1, 2024' },
        },
      },
      {
        'im:name': { label: 'Podcast 2' },
        'im:image': [
          {
            label: 'https://example.com/image2.jpg',
            attributes: { height: '55' },
          },
          {
            label: 'https://example.com/image2.jpg',
            attributes: { height: '60' },
          },
          {
            label: 'https://example.com/image2.jpg',
            attributes: { height: '170' },
          },
        ],
        summary: { label: 'Summary of Podcast 2' },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' },
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2024 Podcast 2' },
        title: { label: 'Podcast 2 - Creator 2' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://example.com/podcast2',
          },
        },
        id: {
          label: 'https://example.com/podcast2',
          attributes: { 'im:id': '1002' },
        },
        'im:artist': { label: 'Creator 2' },
        category: {
          attributes: {
            'im:id': '1304',
            term: 'Comedy',
            scheme: 'https://example.com/genre/comedy',
            label: 'Comedy',
          },
        },
        'im:releaseDate': {
          label: '2024-01-02T00:00:00-07:00',
          attributes: { label: 'January 2, 2024' },
        },
      },
      {
        'im:name': { label: 'Podcast 3' },
        'im:image': [
          {
            label: 'https://example.com/image3.jpg',
            attributes: { height: '55' },
          },
          {
            label: 'https://example.com/image3.jpg',
            attributes: { height: '60' },
          },
          {
            label: 'https://example.com/image3.jpg',
            attributes: { height: '170' },
          },
        ],
        summary: { label: 'Summary of Podcast 3' },
        'im:price': {
          label: 'Get',
          attributes: { amount: '0', currency: 'USD' },
        },
        'im:contentType': { attributes: { term: 'Podcast', label: 'Podcast' } },
        rights: { label: '© 2024 Podcast 3' },
        title: { label: 'Podcast 3 - Creator 3' },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://example.com/podcast3',
          },
        },
        id: {
          label: 'https://example.com/podcast3',
          attributes: { 'im:id': '1003' },
        },
        'im:artist': { label: 'Creator 3' },
        category: {
          attributes: {
            'im:id': '1318',
            term: 'Technology',
            scheme: 'https://example.com/genre/technology',
            label: 'Technology',
          },
        },
        'im:releaseDate': {
          label: '2024-01-03T00:00:00-07:00',
          attributes: { label: 'January 3, 2024' },
        },
      },
    ],
    updated: { label: '2024-01-03T00:00:00-07:00' },
    rights: { label: '© 2024 Apple Inc.' },
    title: { label: 'iTunes Store: Top Podcasts' },
    icon: { label: 'https://example.com/apple-podcasts-icon.png' },
    link: [
      {
        attributes: {
          rel: 'alternate',
          type: 'text/html',
          href: 'https://podcasts.apple.com/WebObjects/MZStore.woa/wa/viewTop?genreId=26&popId=3',
        },
      },
    ],
    id: { label: 'https://podcasts.apple.com/us/genre/podcasts/id26' },
  },
};

export default podcastFeed;
