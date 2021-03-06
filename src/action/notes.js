import Swal from 'sweetalert2';
import { db } from '../firebase/firebase-config'
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';


export const startNewNote = () => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

        dispatch(activeNote(doc.id, newNote));
        dispatch( addNewNote( doc.id, newNote ) );

    }
}


export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const addNewNote = ( id, note ) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
})


export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNote(notes))
    }
}


export const setNote = (notes) => ({
    type: types.notesload,
    payload: notes
})

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        if (!note.url) {
            delete note.url;
        }

        const notetoFireStrore = { ...note };

        delete notetoFireStrore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(notetoFireStrore);

        dispatch(refreshNote(note.id, note));

        Swal.fire('Save', note.title, 'success')
    }
}

export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note
    }
})

export const startUploading = (file) => {
    return async(dispatch, getState) => {

        const { active } = getState().notes;
        
        Swal.fire({
            title:'Uploading',
            text:'Please wait ...',
            onBeforeOpen: () => {
                Swal.showLoading();
            },  
            allowOutsideClick: false
        });

        const fileUrl = await fileUpload(file);
        active.url = fileUrl;

        dispatch( startSaveNote(active) )

        Swal.close();

    }
}

export const startDeleting = (id) => {
    return async (dispatch,getState) =>{

        const uid = getState().auth.uid;
        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch(deleteNote(id));

    }
}

export const deleteNote = (id) => ({
    type:types.notesDelete,
    payload:id
})

export const noteLogout = () => ({
    type: types.notesLogOutCleaning
});



