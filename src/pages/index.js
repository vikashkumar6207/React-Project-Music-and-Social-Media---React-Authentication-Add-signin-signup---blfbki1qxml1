import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import CSS from '@/styles/Home.module.css';
import { useEffect, useState } from 'react'
import Loader from '../components/commonUI/loader'
import MusicPlayer from '../components/Music/MusicPlayer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [musicList, setMusicList] = useState([]);
  const [loding, setLoding] = useState(false);

  const [selectedMusic, setSelectedMusic] = useState();

  console.log("MusicList", musicList);

  useEffect(() => {
    async function fetchSongs() {
      setLoding(true);
      const url = "https://academics.newtonschool.co/api/v1/music/song";
      const myHeaders = new Headers();
      myHeaders.append("projectId", "8nbih316dv01");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(url, requestOptions);
      const result = await response.json();
      console.log(result, "result");
      const data = result.data;
      setMusicList(data);
      setLoding(false);
    }

    try {
      fetchSongs();
    } catch (error) {
      // Here we are catching error
      
    }
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div>
    <div>
        {loding && <Loader/>}
        {!loding && (
          <section className={CSS.Container}>
            {musicList.map((music) => {
              const { title, _id, audio_url, thumbnail } = music;

              {
                /*TODO : create card*/
              }

              return (
                <div
                  onClick={() =>
                   setSelectedMusic({ title, _id, audio_url, thumbnail })
                  }
                >
                  {/* {title} - {_id} */}
                 
                  <section  className={CSS.cardContainer} >
                    <div key={_id}>
                        <img className={CSS.Image} src={thumbnail} alt="image" />
                        <p className={CSS.titleCls}>{title}</p>
                    </div>
                    
                </section>
                  <div>
                    
                  </div>
                  {/* ---------- */}
                </div>
              );
            })}
          </section>
        )}
        {selectedMusic && (
          <MusicPlayer
            title={selectedMusic.title}
            _id={selectedMusic._id}
            audio_url={selectedMusic.audio_url}
            thumbnail={selectedMusic.thumbnail}
          />
        )}
    </div>
     </div>
    </>
  )
}
