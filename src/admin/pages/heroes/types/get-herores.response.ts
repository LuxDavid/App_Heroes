import type { Hero } from "./gero-interface";

export interface HeroesResponse {
    total:  number;
    pages:  number;
    heroes: Hero[];
}


