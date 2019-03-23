import { Source } from './source';

export interface Article {
    source: Source;
    author: string;
    title: string;
    desciption: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
