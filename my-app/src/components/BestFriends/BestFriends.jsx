import React from "react";
import FriendsItems from './FriendsList/FriendsItems'

const BestFriends = (props) => {
    let FriendsList = props.state.bestFriends.map(friends => <FriendsItems user={friends.name} />)
    return (
        <div>
            Your best friends: {FriendsList}
        </div>
    )
};

export default BestFriends;