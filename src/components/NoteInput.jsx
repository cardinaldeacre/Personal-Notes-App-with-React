import { useState } from 'react';

function NoteInput({ addNote }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onTitleChangeEventHandler = (e) => {
        setTitle(e.target.value);
    };

    const onBodyChangeEventHandler = (e) => {
        setBody(e.target.value);
    };

    const onSubmitEventHandler = (e) => {
        e.preventDefault();
        addNote({ title, body });
    };

    return (
        <form className="add-new-page__input" onSubmit={onSubmitEventHandler}>
            <input
                className="add-new-page__input__title"
                placeholder="Judul Catatan.."
                value={title}
                onChange={onTitleChangeEventHandler}
            />
            <textarea
                className="add-new-page__input__body"
                data-placeholder="Isi catatan.."
                value={body}
                onInput={onBodyChangeEventHandler}
            />
            <button type="submit">Buat</button>
        </form>
    );
}

export default NoteInput;