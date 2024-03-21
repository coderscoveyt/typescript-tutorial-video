import { Sequence, staticFile, Video } from "remotion";
const outro = staticFile('/wrappers/outro.mp4')

export const Outro: React.FC = () => {
  return (
    <>
      <Sequence durationInFrames={200}>
        <Video src={outro} />
      </Sequence>
    </>
  )
}