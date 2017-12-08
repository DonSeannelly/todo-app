export class ListObject {
    id: string;
    title: string;

    items: {
        name: string;
        text: string;
        done: boolean;
    }[] = [];
}

