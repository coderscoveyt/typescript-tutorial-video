import { Audio, Sequence, staticFile, Video, Img } from "remotion";

const video = staticFile(`/video-specific/enums.mp4`);
const bgSound = staticFile(`/video-specific/bgPart1.mp3`);
const sbe = staticFile(`/video-specific/string-based-enums.png`);

export const Twelveth: React.FC = () => {
  return (
    <>
      <Sequence durationInFrames={5250}>
        <Video src={video} startFrom={270} endAt={5520} />
        <Sequence from={4150} durationInFrames={120}>
          <Img src={sbe} className="w-full" />
        </Sequence>
        <Audio src={bgSound} volume={0.005} loop />
      </Sequence>
    </>
  )
}