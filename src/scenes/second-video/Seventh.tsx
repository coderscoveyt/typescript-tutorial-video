import { Audio, Sequence, staticFile, Video } from "remotion";

const video = staticFile(`/video-specific/tsconfig.mp4`);
const bgSound = staticFile(`/video-specific/bgPart1.mp3`);

export const Seventh: React.FC = () => {
  return (
    <>
      <Sequence durationInFrames={4830}>
        <Video startFrom={240} endAt={5070} src={video} />
        <Audio src={bgSound} volume={0.005} loop />
      </Sequence>
    </>
  )
}