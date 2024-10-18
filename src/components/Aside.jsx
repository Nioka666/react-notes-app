import "boxicons";

export default function Aside() {
    const asideBtnMenu = [
        { name: "Add Note", method: addNote, icon: "bx bx-plus", style: "" },
        { name: "Archived", method: archiveNote, icon: "bx bx-archive-in", style: "" },
        { name: "Deleted", method: deleteNote, icon: "bx bx-trash-alt", style: "text-red-500" }
    ]
    function addNote() {
        console.log("add note..");
    }
    function archiveNote() {
        console.log("archiving note..");
    }
    function deleteNote() {
        console.log("deleting note..");
    }

    return (
        <aside>
            <div className="btn-group grid gap-6">
                {asideBtnMenu.map((menu, index) => (
                    <button key={index} onClick={menu.method} className={menu.style}>
                        <i className={`${menu.icon} text-base me-[6px]`}></i>
                        <span>
                            {menu.name}
                        </span>
                    </button>
                ))}
            </div>
        </aside>
    )
}