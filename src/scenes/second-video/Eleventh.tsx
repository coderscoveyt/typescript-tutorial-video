import { Audio, Sequence, staticFile, Video } from "remotion";

const video = staticFile(`/video-specific/generics.mp4`);
const bgSound = staticFile(`/video-specific/bgPart1.mp3`);

export const Eleventh: React.FC = () => {
  return (
    <>
      <Sequence durationInFrames={7230}>
        <Video src={video} startFrom={210} endAt={7440} />
        <Audio src={bgSound} volume={0.005} loop />
      </Sequence>
    </>
  )
}