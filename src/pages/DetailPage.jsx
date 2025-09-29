import { useParams, useNavigate } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';

function DetailPage({ notes, onDelete, onArchive }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const note = notes.find((note) => note.id === id);

    function onDeleteHandler(id) {
        onDelete(id);
        navigate('/');
    }

    function onArchiveHandler(id) {
        onArchive(id);
        navigate('/');
    }

    if (!note) {
        return <p>Catatan tidak ditemukan!</p>;
    }
    return (
        <section>
            <NoteDetail
                {...note}
                onDelete={onDeleteHandler}
                onArchive={onArchiveHandler}
            />
        </section>
    );
}

export default DetailPage;