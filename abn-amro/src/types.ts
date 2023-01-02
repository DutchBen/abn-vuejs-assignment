/**
Show results example:
{ 
  "id": 46584,
  "url": "https://www.tvmaze.com/shows/46584/drama",
  "name": "Drama",
  "type": "Scripted",
  "language": "Spanish",
  "rating": {
      "average": null
  },
  "image": {
      "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/244/611819.jpg",
  },
  "summary": "<p><b>Drama</b> tells Africa's story (Elisabet Casanovas), a 20-year-old who lives in a shared apartment that is falling apart, has a precarious job and sees how her life changes radically when she discovers she got pregnant and does not know by whom.</p>",
}
*/
export interface Show {
  id: number;
  url: string;
  name: string;
  language: string;
  rating: {
    average: number;
  };
  image: {
    medium: string;
  };
  summary: string;
}

export type ShowThumbnail = Omit<Show, "language" | "summary" | "url">

export enum Genres {
  DRAMA = "Drama",
  COMEDY = "Comedy",
  SPORTS = "Sports",
}
