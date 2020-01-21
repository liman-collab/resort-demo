import React from 'react'
import Room from './Room'

export default function RoomList({ rooms }) {
    if (rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>unfortunately no rooms matched your search parameteres</h3>
            </div>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map(item => {
                        return <Room key={item.id} item_id={item.id} room={item} />
                    })
                }
            </div>
        </section>
    )
}
