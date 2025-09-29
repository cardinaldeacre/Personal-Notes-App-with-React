import NoteItem from "./NoteItem";

function NoteList({ notes }) {
    return (
        <div className="notes-list">
            {notes.length > 0 ? (
                notes.map((note) => (
                    <NoteItem
                        key={note.id}
                        id={note.id}
                        title={note.title}
                        createdAt={note.createdAt}
                        body={note.body}
                    />
                ))
            ) : (
                <p className="notes-list__empty-message">Tidak ada catatan</p>
            )}
        </div>
    )
}

export default NoteList;