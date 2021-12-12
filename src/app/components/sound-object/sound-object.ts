export class SoundObject {

    Author: AuthorType;
    AudioFile: string;
    Description: string;

    constructor(author: AuthorType, audioFile: string, description: string) {
        this.Author = author;
        this.AudioFile = audioFile;
        this.Description = description;
    }
}

export const enum AuthorType {
    Akos = "Akos",
    Andras = "Andras",
    Lori = "Lori",
    Gaspar = "Gaspar",
    All = "All"
}