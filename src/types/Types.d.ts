export interface HistoryData {
  id: number;
  name: string;
  date: string;
  description: string;
  image: string;
  slug: string;
}

export interface EventData {
  id: number;
  title: string;
  slug: string;
}

export interface ArticleData {
  id: number;
  about_id: number;
  event_id: number;
}
