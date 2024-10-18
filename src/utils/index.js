export const addNote = (formData) => {
    try {
        const existingNotes = JSON.parse(localStorage.getItem("my_notes"));
        const updatedNotes = [...existingNotes, formData];
        localStorage.setItem("my_notes", JSON.stringify(updatedNotes));

        if (localStorage.getItem("my_notes")) {
            console.log("Berhasil menambahkan note baru");
        }
    } catch (err) {
        console.log("Error saat menambahkan catatan:", err);
    }
}


export const editNote = (noteID) => {
    console.log(noteID);
}

export const archiveNote = (noteID) => {
    console.log(noteID);
}

export const deleteNote = (noteID) => {
    console.log(noteID);
}