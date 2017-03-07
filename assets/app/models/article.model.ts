export class Article {
    constructor(public title      : string,
                public content    : string,
                public username  ?: string,
                public articleId ?: string,
                public userId    ?: string){}
}