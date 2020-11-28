export interface IPicture<T = object> {
    url: string;
    creator: string;
    description: string;
    likes: number;
    views: number;
}