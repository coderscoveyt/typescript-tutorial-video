import { Sequence, staticFile, Video, Audio } from "remotion";

const init = staticFile(`/video-specific/installation-and-setup.mp4`);
const bgSound = staticFile(`/video-specific/bgPart1.mp3`)

export const Second: React.FC = () => {
  return (
    <>
      <Sequence durationInFrames={2160} layout="none">
        <Video src={init} />
        <Audio volume={0.005} src={bgSound} />
      </Sequence>
    </>
  )
}