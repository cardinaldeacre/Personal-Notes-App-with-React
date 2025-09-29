import { useNavigate } from 'react-router-dom';
import NoteInput from '../components/NoteInput';

function AddPage({ onAdd }) {
    const navigate = useNavigate();

    function onAddNoteHandler(note) {
        onAdd(note);
        navigate('/');
    }

    return (
        <section>
            <h2>Buat catatan baru</h2>
            <NoteInput addNote={onAddNoteHandler} />
        </section>
    );
}

export default AddPage;