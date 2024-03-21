import { Audio, Sequence, staticFile, Video } from "remotion";

const vid1 = staticFile(`/video-specific/utils-1.mp4`);
const vid2 = staticFile(`/video-specific/utils-2.mp4`);
const vid3 = staticFile(`/video-specific/utils-3.mp4`);
const vid4 = staticFile(`/video-specific/utils-4.mp4`);
const vid5 = staticFile(`/video-specific/utils-5.mp4`);
const vid6 = staticFile(`/video-specific/utils-6.mp4`);
const vid7 = staticFile(`/video-specific/utils-7.mp4`);
const bgSound = staticFile(`/video-specific/bgPart1.mp3`);

export const Fifth: React.FC = () => {
  return (
    <>
      <Sequence durationInFrames={8880 + 2900}>
        <Sequence from={0} durationInFrames={780}>
          <Video src={vid1} startFrom={150} endAt={930} />
        </Sequence>
        <Sequence from={750} durationInFrames={1470}>
          <Video src={vid2} startFrom={150} endAt={1650} />
        </Sequence>
        <Sequence from={2200} durationInFrames={1910}>
          <Video src={vid3} startFrom={250} endAt={2160} />
        </Sequence>
        <Sequence from={4040} durationInFrames={1510}>
          <Video src={vid4} startFrom={200} endAt={1710} />
        </Sequence>
        <Sequence from={5510} durationInFrames={1430}>
          <Video src={vid5} startFrom={250} endAt={1690} />
        </Sequence>
        <Sequence from={6850} durationInFrames={2070}>
          <Video src={vid6} startFrom={220} endAt={2310} />
        </Sequence>
        <Sequence from={8880} durationInFrames={2900}>
          <Video src={vid7} startFrom={390} endAt={3290} />
        </Sequence>
        <Audio volume={0.005} src={bgSound} loop />
      </Sequence>
    </>
  )
}