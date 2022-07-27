import AxioANDSimple from "./AxioAndSimple/AxioANDSimple";
import ChartTopping from "./ChartToppingComp/CTC";
import ClubAudiophile from "./ClubAudiophile/ClubAudiophile";
import Confused from "./CONFUSED/Confused";
import Footer from "./Footer/Footer";
import HeadPhn from "./HeadphConPanel/headphoneCon";
import HephTimeline from "./HePhTimeline/HePhTimeline";
import HZexperience from "./HZExperiences/HZexperience";
import LikeYou from "./likeyouLoveMe/Likeyou";
import MainNav from "./Navbar/Navbar";
import NEWLaunch from "./NEWLaunchCOmp/NEWLaunch";
import OurValues from "./OurValues/OurValues";
import ProdList from "./ProdList/ProdLIst";
import MainSlider from "./SliderBelowNAV/Slider";
import SYAHeading from "./StartYourAudiophile/SYAHeading";
import SYAmul from "./StartYourAudiophile/SYAmul";
import SubscribeToNewsLetter from "./SubscribeToNewsLetter/SUbscribetoNews";
import TheOnly from "./TheOnlyReason/TheOnly";
import TPL from "./TheProdList/TPL";
import ThirdSliderOnClick from "./ThirdSliderOnClick/ThirdSliderOnclick";
import VideoSlider from "./VideoSlider/VideoSlider";
import ViewMore from "./ViewMore/ViewMore";
import WithHP from "./WithHP/WithHP";

export default function Layout() {
  return (
    <>
      <MainNav />
      <MainSlider />
      <SYAHeading />
      <SYAmul />
      <LikeYou />
      <VideoSlider />
      <ChartTopping />
      <TPL />
      <ProdList />
      <ViewMore />
      <NEWLaunch/>
      <Confused/>
      <TheOnly/>
      <AxioANDSimple/>
      <ThirdSliderOnClick/>
      <HZexperience/>
      <HeadPhn/>
      {/* <HephTimeline/> */}
      <WithHP/>
      <OurValues/>
      <ClubAudiophile/>
      <SubscribeToNewsLetter/>
      <Footer/>
    </>
  );
}
