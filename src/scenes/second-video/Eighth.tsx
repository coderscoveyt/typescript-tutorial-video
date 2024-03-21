import { Audio, Sequence, staticFile, Video } from "remotion";

const video1 = staticFile(`/video-specific/functions-1.mp4`);
const video2 = staticFile(`/video-specific/functions-2.mp4`);
const bgSound = staticFile(`/video-specific/bgPart1.mp3`);

export const Eighth: React.FC = () => {
  return (
    <>
      <Sequence durationInFrames={10040}>
        <Sequence from={0} durationInFrames={5430}>
          <Video startFrom={300} endAt={5730} src={video1} />
        </Sequence>
        <Sequence from={5400} durationInFrames={4640}>
          <Video startFrom={240} endAt={4890} src={video2} />
        </Sequence>
        <Audio src={bgSound} volume={0.005} loop />
      </Sequence>
    </>
  )
}