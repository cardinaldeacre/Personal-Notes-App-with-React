import { useState } from 'react';

function NoteInput({ addNote }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onTitleChangeEventHandler = (e) => {
        setTitle(e.target.value);
    };

    const onBodyInputEventHandler = (e) => {
        setBody(e.target.innerHTML);
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
            <div
                className="add-new-page__input__body"
                data-placeholder="Isi catatan.."
                contentEditable
                onInput={onBodyInputEventHandler}
            />
            <button type="submit">Buat</button>
        </form>
    );
}

export default NoteInput;