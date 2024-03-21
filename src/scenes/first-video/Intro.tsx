import { Sequence, staticFile, Video } from "remotion";
const intro = staticFile('/wrappers/intro.mp4')

export const Intro: React.FC = () => {
  return (
    <>
      <Sequence durationInFrames={137}>
        <Video src={intro} />
      </Sequence>
    </>
  )
}