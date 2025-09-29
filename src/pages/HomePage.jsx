import { useState } from "react";
import { Link } from "react-router-dom";
import NoteList from "../components/NoteList";

function HomePage({ notes }) {
    const [searchKeyword, setSearchKeyboard] = useState('');
    const onSearchChangeHandler = (e) => {
        setSearchKeyboard(e.target.value);
    }

    const filteredNotes = notes.filter((note) => {
        const isNotArchived = !note.archived;
        const titleMatch = note.title.toLowerCase().includes(searchKeyword.toLowerCase());
        return isNotArchived && titleMatch;
    })

    // const activeNotes = notes.filter((note) => !note.archived);

    return (
        <section>
            <h2>Catatan Aktif</h2>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Cari berdasarkan judul.."
                    value={searchKeyword}
                    onChange={onSearchChangeHandler}
                />
            </div>
            <NoteList notes={filteredNotes} />
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