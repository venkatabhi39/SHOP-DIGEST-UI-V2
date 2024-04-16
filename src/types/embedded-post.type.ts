interface FeaturedMediaSize {
  file: string;
  filesize: number;
  height: number;
  mime_type: string;
  source_url: string;
  width: number;
}

interface WpTermCommonData<Taxonomy> {
  id: number;
  link: string;
  name: string;
  slug: string;
  taxonomy: Taxonomy;
  _links: unknown[];
}

export interface EmbeddedPost {
  author: number;
  categories: number[];
  content: { rendered: string };
  date: string;
  date_gmt: string;
  excerpt: { rendered: string; protected: boolean };
  featured_media: number;
  id: number;
  modified: string;
  modified_gmt: string;
  slug: string;
  title: { rendered: string };
  type: 'post';
  _links: any;
  _embedded: {
    author: {
      id: number;
      name: string;
      url: string;
      description: string;
      avatar_urls: {
        24: string;
        48: string;
        96: string;
      };
      slug: string;
    }[];
    'wp:featuredmedia': {
      alt_text: string;
      author: number;
      caption: { rendered: string };
      date: string;
      id: number;
      media_details: {
        width: number;
        height: number;
        file: string;
        filesize: number;
        sizes: {
          thumbnail: FeaturedMediaSize;
          squarethumbnails: FeaturedMediaSize;
          full: FeaturedMediaSize;
        };
      };
      media_type: string;
      mime_type: string;
      slug: string;
      source_url: string;
      title: { rendered: string };
      type: string;
    }[];
    'wp:term': [WpTermCommonData<'category'>[], WpTermCommonData<'post_tag'>[]];
  };
}
