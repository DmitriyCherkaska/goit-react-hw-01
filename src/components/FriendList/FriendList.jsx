import some from "./FriendList.module.css";

// console.log("some :>>", some);

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="90" />
      <p className={some.name}>{name}</p>
      <p className={some.status} style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className={some.list}>
      {friends.map((friend) => (
        <li className={some.item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
