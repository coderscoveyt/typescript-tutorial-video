import { Audio, Sequence, staticFile, Video } from "remotion";

const video = staticFile(`/video-specific/interfaces.mp4`);
const bgSound = staticFile(`/video-specific/bgPart1.mp3`);

export const Tenth: React.FC = () => {
  return (
    <>
      <Sequence durationInFrames={6480}>
        <Video src={video} startFrom={210} endAt={6690} />
        <Audio src={bgSound} volume={0.005} loop />
      </Sequence>
    </>
  )
}