export interface BookForm {
    title: string;
    author: string;
    description?: string;
    creationDate: Date;
    nbEdition: number;
}