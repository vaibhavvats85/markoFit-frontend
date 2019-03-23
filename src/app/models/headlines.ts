import { Article } from './articles';

export interface Headlines {
    status: string;
    totalResults: number;
    articles: Article[];
}
