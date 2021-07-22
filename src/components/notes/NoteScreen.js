import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../action/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active: note } = useSelector(state => state.notes)
    const [formValues, handleInputChange, reset] = useForm(note);
    const { body, title, id } = formValues;

    const ref = useRef(note.id)

    const handleDelete = () => {
        dispatch( startDeleting(id) );
    }

    useEffect(() => {
        if (note.id !== ref.current) {
            reset(note);
            ref.current = note.id;
        }

    }, [note, reset])

    useEffect(() => {
        dispatch( activeNote( formValues.id, {...formValues} ) );
    }, [formValues,dispatch])

    return (
        <div className="notes__main-contetn">

            <NotesAppBar />

            <div className="notes__content">
                <input autoComplete="off" type="text" placeholder="Some awesome title" className="notes__title-input" value={title} onChange={handleInputChange} name="title" />
                <textarea placeholder="What happen today?" className="notes__text-area" value={body} onChange={handleInputChange} name="body" />

                {note.url &&
                    <div className="notes__image">
                        <img src={note.url}  alt="No hay "/>
                    </div>
                }
            </div>

            <button className="btn btn-danger" onClick={handleDelete}>
                delete
            </button>

        </div>
    )
}
