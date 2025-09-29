import { Link } from "react-router-dom";
import NoteList from "../components/NoteList";

function HomePage({ notes }) {
    const activeNotes = notes.filter((note) => !note.archived);

    return (
        <section>
            <h2>Catatan Aktif</h2>
            <NoteList notes={activeNotes} />
            <div className="homepage__action">
                <Link to='/archives'>
                    <button className="action" type="button" title="Arsip">
                        📁 Arsip
                    </button>
                </Link>
                <Link to='/notes/new'>
                    <button className="action" type="button" title="Tambah">
                        ➕ Tambah
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default HomePage;