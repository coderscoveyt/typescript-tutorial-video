import { Audio, Sequence, staticFile, Video } from "remotion";

const video1 = staticFile(`/video-specific/classes-1.mp4`);
const video2 = staticFile(`/video-specific/classes-2.mp4`);
const bgSound = staticFile(`/video-specific/bgPart1.mp3`);

export const Ninth: React.FC = () => {
  return (
    <>
      <Sequence durationInFrames={9540}>
        <Sequence from={0} durationInFrames={6930}>
          <Video src={video1} startFrom={360} endAt={7290} />
        </Sequence>
        <Sequence from={6930} durationInFrames={2610}>
          <Video src={video2} startFrom={360} endAt={2970} />
        </Sequence>
        <Audio src={bgSound} volume={0.005} loop />
      </Sequence>
    </>
  )
}