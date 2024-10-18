export const genID = +new Date();
export const getDate = new Date().toUTCString();
export const dummyNotes = [
    {
        id: genID,
        title: "Title 1",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odit doloremque id aspernatur deleniti assuoluptate dolorem dolo quaerat illellat vel! Ipsa!",
        archived: false,
        createdAt: getDate
    },
    {
        id: genID,
        title: "Title 2",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odit doloremque id aspernatur uaerat illo magnam nobis, ambaasas aut provident, repellat vel! Ipsa!",
        archived: false,
        createdAt: getDate
    },
    {
        id: genID,
        title: "Title 3",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odit doloremque id aspernatur uaerat illo magnam nobis, aut provident, repellat vel! Ipsa!",
        archived: false,
        createdAt: getDate
    },
];