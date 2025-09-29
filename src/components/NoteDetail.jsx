import { showFormattedDate } from "../utils";

function NoteDetail({ id, title, createdAt, body, archived, onDelete, onArchive }) {
    return (
        <div className="note-detail">
            <h3 className="note-detail__title">{title}</h3>
            <p className="note-detail__createdAt">{showFormattedDate(createdAt)}</p>
            <div className="note-detail__body">{body}</div>
            <div className="note-detail__actions">
                <button className="note-detail__delete-button" onClick={() => onDelete(id)}>Hapus</button>
                <button className="note-detail__archive-button" onClick={() => onArchive(id)}>
                    {archived ? 'Aktifkan' : 'Arsipkan'}
                </button>
            </div>
        </div>
    )
}

export default NoteDetail;