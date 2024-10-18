export default function NoteCards() {
    const getDate = new Date().toISOString();
    const dummyNotes = [
        {
            id: Math.random().toString(16).substring(2),
            title: "Title 1",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odit doloremque id aspernatur deleniti assuoluptate dolorem dolo quaerat illellat vel! Ipsa!",
            archived: false,
            createdAt: getDate
        },
        {
            id: Math.random().toString(16).substring(2),
            title: "Title 3",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odit doloremque id aspernatur uaerat illo magnam nobis, aut provident, repellat vel! Ipsa!",
            archived: false,
            createdAt: getDate
        },
    ];

    function noteEdit(noteID) {
        const getNote = localStorage.getItem(noteID); // soon
        console.log(noteID);
    }

    return (
        <section className="notes grid grid-cols-3 max-sm:grid-cols-1 mt-10 gap-5">
            {dummyNotes.map((note, index) => (
                <div key={index} className="note-card rounded-2xl p-7 pb-8 w-full bg-gray-800 text-white h-full">
                    <span className="text-xs text-gray-400">{note.createdAt}</span>
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl mt-2 font-semibold">{note.title}</h1>
                        <button onClick={() => noteEdit(note.id)} className="mt-3">
                            <i className='bx bxs-edit cursor-pointer text-[22px] text-gray-300'></i>
                        </button>
                    </div>
                    <hr className="px-5 my-3 border-gray-500" />
                    <p className="text-sm text-gray-300">{note.body}</p>
                </div>
            ))}
        </section>
    )
}