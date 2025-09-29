import NoteList from "../components/NoteList";

function ArchivePage({ notes }) {
    const archivedNotes = notes.filter((note) => note.archived);

    return (
        <section>
            <h2>Catatan Terarsipkan</h2>
            <NoteList notes={archivedNotes} />
        </section>
    )
}
export default ArchivePage;