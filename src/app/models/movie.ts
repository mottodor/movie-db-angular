export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue: number;
  runtime: number | null;
  status: string;
  genres: Genre[];
}

export interface MovieDto {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface Review {
  author: string;
  content: string;
  created_at: string;
}

export interface ReviewDto {
  page: number;
  results: Review[];
  total_results: number;
  total_pages: number;
}

export interface MovieImages {
  backdrops: {
    file_path: string;
  }[];
}

export interface Genre {
  id: number;
  name: string;
}
