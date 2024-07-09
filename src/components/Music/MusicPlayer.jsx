import { useContext } from "react";
import useUser from "../../customHooks/useUser";
import { UserContext } from "../../provider/UserProvider";

function MusicPlayer(props){

    const {title, _id, audio_url, thumbnail} = props;
    const {getToken} = useContext(UserContext);

    const isFavSong = true;

   async function markFavAndUnfavourite(){
    const url = "https://academics.newtonschool.co/api/v1/music/favorites/like";
    const myHeaders = new Headers();
    myHeaders.append("projectID", "8nbih316dv01");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${getToken}`);

    const raw = JSON.stringify({
      "songId": _id
    });

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const response = await fetch(url, requestOptions);
    const data = await response.json();
    // console.log(data, "markFavAndUnFavorite Data");
        

    }

    return (
        <>

        <div className="music_player" key={_id}>
        <img className="music_player_image" src={thumbnail}/>
        <div className="music_title" >{title}</div>
        <audio  controls src={audio_url}></audio>

        { getToken &&
         (!isFavSong ? (
            <i onClick={()=>{
                // making un favourite
                markFavAndUnfavourite();
            }} style={{cursor: 'pointer'}} class="fa-solid fa-heart"></i>
            ) : (
            <i onClick={()=> {
                // making favourite
                markFavAndUnfavourite();
            }} style={{cursor: 'pointer'}} class="fa-regular fa-heart"></i>
            ))}
       
        </div>
        </>
    )
}
export default MusicPlayer;