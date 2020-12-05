export interface IPicture<T = object> {
    url: string;
    creator: string;
    tags: string;
    private: boolean;
    description: string;
    likes: number;
    views: number;
}