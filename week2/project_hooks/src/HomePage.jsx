import ReactPlayer from "react-player/youtube";
import butterfly from './assets/images/butterfly.jpg';
function Homepage(){
    return(
    <div>
        <h1>welcome home</h1>
        <img src={butterfly} height={200} alt="butterfly image"/>
        <ReactPlayer url='https://www.youtube.com/watch?v=sfun_Asm9YY' />
    </div>  
    );
}

export default Homepage;