export interface Character {
    id: number;
    name: string;
    status: 'Alive' | 'Dead' | 'Unknown';
    species: string;
    type: string;
    gender: 'Female' | 'Male' | 'Genderless' | 'Unknown';
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface Info {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export interface ApiResponse {
    info: Info;
    results: Character[];
}

export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}

export interface LocationApiResponse {
    info: Info;
    results: Location[];
}

export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[]; 
    url: string;
    created: string;
}

export interface EpisodeApiResponse {
    info: Info;
    results: Episode[];
}