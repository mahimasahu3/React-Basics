import ReactPlayer from "react-player";
import butterfly from './assets/images/butterfly.jpg';
import audio1 from './components/audio1';
function Homepage(){
    return(
    <div>
        <h1>welcome home</h1>
        <img src={butterfly} height={200} alt="butterfly image"/>
        <ReactPlayer url='https://www.youtube.com/watch?v=sfun_Asm9YY' playing={false}/>
        <audio1/>
    </div>  
    );
}

export default Homepage;