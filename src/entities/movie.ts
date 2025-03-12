export interface MovieProps {
  background_image_original: string;
  background_image: string;
  date_uploaded_unix: number;
  date_uploaded: string;
  description_full: string;
  genres: string[];
  id: number;
  imdb_code: string;
  language: string;
  large_cover_image: string;
  medium_cover_image: string;
  mpa_rating: string;
  rating: number;
  runtime: number;
  slug: string;
  small_cover_image: string;
  state: string;
  summary: string;
  synopsis: string;
  title_english: string;
  title_long: string;
  title: string;
  torrents: string[];
  url: string;
  year: number;
  yt_trailer_code: string;
}
