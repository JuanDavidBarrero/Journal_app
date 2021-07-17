import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-contetn">

            <NotesAppBar />

            <div className="notes__content">
                <input autoComplete="off" type="text" placeholder="Some awesome title" className="notes__title-input" />
                <textarea placeholder="What happen today?" className="notes__text-area"/>

                <div className="notes__image">
                    <img src="https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?size=626&ext=jpg&ga=GA1.2.1524674093.1625875200"  alt="Imagen"/>
                </div>
            </div>

        </div>
    )
}
