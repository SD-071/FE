import type { UserProfileProps } from "../types";

function UserProfile({username, image, info, status}:UserProfileProps) {
  return (
    <div className="card rounded border-1 bg-neutral shadow-lg text-white">
        <figure className="h-40 w-50">
          <img className="object-cover w-full h-full" src={image} alt={username} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{username}</h2>
          <p>{info}</p>
          <p>Status: {status}</p>
        </div>
        
    </div>
  )
}

export default UserProfile;