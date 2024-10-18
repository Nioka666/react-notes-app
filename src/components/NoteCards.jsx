import { useState, useEffect } from "react";
import { dummyNotes } from "../data/env";
import { editNote } from "../utils";

export default function NoteCards() {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        const getNotes = localStorage.getItem("my_notes");
        if (!getNotes) {
            localStorage.setItem("my_notes", JSON.stringify(dummyNotes));
            setNotes(dummyNotes);
        } else {
            setNotes(JSON.parse(getNotes));
        }
    }, []);

    const addNewNote = (newNote) => {
        const updatedNotes = [...notes, newNote];
        setNotes(updatedNotes); 
        localStorage.setItem("my_notes", JSON.stringify(updatedNotes));
    };

    return (
        <section className="notes grid grid-cols-3 max-sm:grid-cols-1 mt-10 gap-5">
            {notes.map((note, index) => (
                <div key={index} className="note-card rounded-2xl p-7 pb-8 w-full bg-gray-800 text-white h-full">
                    <span className="text-xs text-gray-400">{note.createdAt}</span>
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl mt-2 font-semibold">{note.title}</h1>
                        <button onClick={() => editNote(note.id)} className="mt-3">
                            <i className='bx bxs-edit cursor-pointer text-[22px] text-gray-300'></i>
                        </button>
                    </div>
                    <hr className="px-5 my-3 border-gray-500" />
                    <p className="text-sm text-gray-300">{note.body}</p>
                </div>
            ))}

            <button onClick={() => addNewNote({
                id: Date.now(), title: "New Note", body: "This is a new note.", createdAt: new Date().toLocaleString()
            })}>
                Tambahkan Catatan
            </button>
        </section>
    );
}
