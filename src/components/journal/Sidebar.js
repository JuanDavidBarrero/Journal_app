import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../action/auth';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const dispatch = useDispatch();

    const handleLogut = () => {
        dispatch( startLogout() );
    }

    return (
        <aside className="journal__sidebar">

            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon" />
                    <samp> Juan David</samp>
                </h3>
                <button className="btn" onClick={handleLogut}>LogOut</button>
            </div>

            <div className="journarl__new-entry">
                <i className="far fa-calendar-plus fa-5x" />
                <p className="mt-1">New Entry</p>
            </div>

            <JournalEntries/>


        </aside>
    )
}
