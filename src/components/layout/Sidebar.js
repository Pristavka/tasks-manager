import React from 'react';
import {
    FaChevronDown,
    FaInbox,
    FaRegCalendarAlt,
    FaRegCalendar
} from 'react-icons/fa';

export const Sidebar = () => (
    <div className='sidebar' data-testid='sidebar'>
        <ul className='sidebar__generic'>
            <li data-testid='inbox' className='inbox'>
                <FaInbox /> Inbox
            </li>
            <li data-testid='today' className='today'>
                <FaRegCalendar /> Today
            </li>
            <li data-testid='next_7' className='next_7'>
                <FaRegCalendarAlt /> Next 7 days
            </li>
        </ul>
        <div className='sidebar__middle'>
            <FaChevronDown />
            <h2>Projects</h2>
        </div>
        <div className='sidebar__projects'>
            <FaChevronDown />
            <h2>Projects!!!</h2>
        </div>
    </div>
);
