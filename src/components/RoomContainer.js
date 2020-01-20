import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { withRoomConsumer } from '../Context'
import Loading from './Loading'

function RoomContainer({ Context }) {
    const { Loading, sortedRooms, rooms } = Context
    if (Loading) {
        return <Loading />
    }
    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    )
}

export default withRoomConsumer(RoomContainer)





// import React from 'react'
// import RoomFilter from './RoomFilter'
// import RoomList from './RoomList'
// import { RoomConsumer } from '../Context'
// import Loading from './Loading'

// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 value => {
//                     const { loading, sortedRooms, rooms } = value
//                     if (loading) {
//                         return <Loading />
//                     }
//                     return (
//                         <div>
//                             Hello From RooomsContainer
//                             <RoomFilter rooms={rooms} />
//                             <RoomList rooms={sortedRooms} />
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>

//     )
// }
