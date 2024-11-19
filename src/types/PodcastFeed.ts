import { PodcastEntry } from '@/types/PodcastEntry';

export interface PodcastFeed {
  feed: {
    author: Author;
    entry: PodcastEntry[];
    updated: Label;
    rights: Label;
    title: Label;
    icon: Label;
    link: Link[];
    id: Label;
  };
}

interface Label {
  label: string;
}

interface Author {
  name: Label;
  uri: Label;
}

interface Link {
  attributes: {
    rel: string;
    type?: string;
    href: string;
  };
}
