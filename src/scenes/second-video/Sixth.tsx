import { Audio, Sequence, staticFile, Video } from "remotion";

const video = staticFile(`/video-specific/explicit-casting.mp4`);
const bgSound = staticFile(`/video-specific/bgPart1.mp3`);

export const Sixth: React.FC = () => {
  return (
    <>
      <Sequence durationInFrames={8865}>
        <Video src={video} startFrom={405} endAt={9270} />
        <Audio src={bgSound} volume={0.005} loop />
      </Sequence>
    </>
  )
}