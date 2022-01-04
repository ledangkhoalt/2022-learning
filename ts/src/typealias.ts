type ID = string;

interface IProduct {
    id: ID;
    productName: string;
}

const prod1: IProduct = {
    id: "ID001",
    productName: "Test Name"
}

type Tag = string
type NullableTag = Tag | null

const tags: Tag [] = ["C", "Java"]
const otherTags: NullableTag = null;
