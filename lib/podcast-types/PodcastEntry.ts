import { PodcastImage } from './PodcastImage';

export interface PodcastEntry {
  id: Id;
  category: Category;
  link: Link;
  rights: Label;
  summary: Label;
  title: Label;
  'im:name': Label;
  'im:image': PodcastImage[];
  'im:price': Price;
  'im:contentType': ContentType;
  'im:artist': Artist;
  'im:releaseDate': ReleaseDate;
}

interface Label {
  label: string;
}

interface Price {
  label: string;
  attributes: {
    amount: string;
    currency: string;
  };
}

interface ContentType {
  attributes: {
    term: string;
    label: string;
  };
}

interface Link {
  attributes: {
    rel: string;
    type: string;
    href: string;
  };
}

interface Id {
  label: string;
  attributes: {
    'im:id': string;
  };
}

interface Artist {
  label: string;
  attributes?: {
    href: string;
  };
}

interface Category {
  attributes: {
    'im:id': string;
    term: string;
    scheme: string;
    label: string;
  };
}

interface ReleaseDate {
  label: string;
  attributes: Label;
}
