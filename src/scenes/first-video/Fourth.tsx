import { Audio, Sequence, staticFile, Video } from "remotion"

const vid1 = staticFile(`/video-specific/type-basics1.mp4`);
const vid2 = staticFile(`/video-specific/type-basics2.mp4`);
const vid3 = staticFile(`/video-specific/type-basics3.mp4`);
const vid4 = staticFile(`/video-specific/type-basics4.mp4`);
const vid5 = staticFile(`/video-specific/type-basics5.mp4`);
const bgSound = staticFile(`/video-specific/bgPart1.mp3`)

export const Fourth: React.FC = () => {
  return (
    <>
      <Sequence durationInFrames={19260}>
        <Sequence from={0} durationInFrames={5350}>
          <Video src={vid1} startFrom={400} />
        </Sequence>
        <Sequence from={5350} durationInFrames={5790}>
          <Video src={vid2} startFrom={180} endAt={5970} />
        </Sequence>
        <Sequence from={11100} durationInFrames={2220}>
          <Video src={vid3} startFrom={300} endAt={2520} />
        </Sequence>
        <Sequence from={13300} durationInFrames={3900}>
          <Video src={vid4} startFrom={300} endAt={4200} />
        </Sequence>
        <Sequence from={17180} durationInFrames={2240}>
          <Video src={vid5} startFrom={180} />
        </Sequence>
        <Audio volume={0.005} src={bgSound} loop />
      </Sequence>
    </>
  )
}