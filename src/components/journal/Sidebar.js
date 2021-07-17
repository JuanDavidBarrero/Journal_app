import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar">

            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon" />
                    <samp> Juan David</samp>
                </h3>
                <button className="btn" >LogOut</button>
            </div>

            <div className="journarl__new-entry">
                <i className="far fa-calendar-plus fa-5x" />
                <p className="mt-1">New Entry</p>
            </div>

            <JournalEntries/>


        </aside>
    )
}
