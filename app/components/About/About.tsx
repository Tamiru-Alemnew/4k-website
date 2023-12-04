import WhoAreWe from "./WhoAreWe";
import MissionIntro from "./MissionIntro";
import MissionAndVision from "./MissionAndVision";

export default function about() { 
    return (
      <div className="pt-[120px]">
        <WhoAreWe />
        <MissionIntro />
        <MissionAndVision />
      </div>
    );
}