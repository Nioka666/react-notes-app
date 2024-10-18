import { useState } from "react";
import { addNote, archiveNote, deleteNote } from "../utils";
import { genID, getDate } from "../data/env";

export default function Aside() {
    const [formData, setFormData] = useState({
        id: genID,
        title: "Title test",
        body: "Body test...",
        archived: false,
        createdAt: getDate,
    });
    const asideBtnMenu = [
        { name: "Add Note", method: () => addNote(formData), icon: "bx bx-plus", style: "" },
        { name: "Archived", method: archiveNote, icon: "bx bx-archive-in", style: "" },
        { name: "Deleted", method: deleteNote, icon: "bx bx-trash-alt", style: "text-red-500" }
    ]
    
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