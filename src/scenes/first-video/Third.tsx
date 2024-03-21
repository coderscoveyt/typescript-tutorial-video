import { Audio, Sequence, staticFile, useCurrentFrame, Video } from "remotion"

const vid1 = staticFile(`/video-specific/compilation1.mp4`);
const vid2 = staticFile(`/video-specific/compilation2.mp4`);
const bgSound = staticFile(`/video-specific/bgPart1.mp3`)

export const Third: React.FC = () => {
  const frame = useCurrentFrame()
  return (
    <>
      <Sequence durationInFrames={7110}>
        <Sequence durationInFrames={5130}>
          <Video startFrom={180} endAt={5310} src={vid1} />
        </Sequence>
        <Sequence from={5130} durationInFrames={1980}>
          <Video startFrom={360} endAt={2340} muted={frame > 7070} src={vid2} />
        </Sequence>
        <Audio volume={0.005} src={bgSound} loop />
      </Sequence>
    </>
  )
}