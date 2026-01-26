export interface Game {
    name: string;
    subname: string;
    description?: string;
    gameType?: number;
    done?: boolean;
    datasuplement?: string;
}

export interface SingleType {
    name: string;
    icon: string;
    color: string;
}

export interface GameData {
    gameType: SingleType[];
    games: Game[];
}