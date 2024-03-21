import { Sequence, staticFile, Video, Audio, Img, AbsoluteFill } from "remotion";

const bgVideo = staticFile('/video-specific/jquery.mp4');
const fgAudio = staticFile(`/video-specific/part1.m4a`);
const bgAudio = staticFile(`/video-specific/bgPart1.mp3`);

const tslogo = staticFile(`/video-specific/tslogo.png`);
const jslogo = staticFile(`/video-specific/jslogo.webp`);
const tscomplex = staticFile(`/video-specific/typescript-complexity.png`);
const jsfiletserror = staticFile(`/video-specific/jsfiletserror.png`);
const tseasy = staticFile(`/video-specific/typescript-easy.png`);
const ponderingman = staticFile(`/video-specific/pondering-man.jpg`);
const subl = staticFile(`/video-specific/subl-logo.png`);
const vsc = staticFile(`/video-specific/vscode-logo.jpg`);
const vscl = staticFile(`/video-specific/vscode-logo.png`);
const banger = staticFile(`/video-specific/banger.webp`);

export const First: React.FC = () => {
  return (
    <>
      <Sequence durationInFrames={2690}>
        <Sequence from={30} durationInFrames={100}>
          <AbsoluteFill>
            <Img src={tslogo} style={{ top: '17rem' }} className="absolute h-1/2 w-1/3" />
            <Sequence from={30}>
              <h1 style={{ top: "17rem", left: '44%' }} className="absolute">
                <span className="text-stone-300 bg-black" style={{ fontSize: '20rem' }}>
                &gt;
                </span>
              </h1>
              <Sequence from={20}>
                <Img src={jslogo} style={{ top: '17rem', right: 0 }} className="rounded-md absolute h-1/2 w-1/3" />
              </Sequence>
            </Sequence>
          </AbsoluteFill>
        </Sequence>
        <Sequence from={200} durationInFrames={90}>
          <Img src={tscomplex} className="w-full" />
          <Sequence from={40}>
            <Img src={jsfiletserror} className="w-full" />
          </Sequence>
        </Sequence>
        <Sequence from={360} durationInFrames={60}>
          <Img src={tseasy} className="w-full" />
        </Sequence>
        <Sequence from={435} durationInFrames={60}>
          <div className="full-width flex justify-center">
            <Img src={ponderingman} />
            <h1 style={{ top: '15rem', left: '40%', transform: 'rotateZ(45deg)' }} className="absolute text-9xl text-stone-900">
              &rarr;
            </h1>
            <h1 style={{ top: '7rem', left: '18%' }} className="absolute text-9xl text-stone-900">
              This is you
            </h1>
          </div>
        </Sequence>
        <Sequence from={525} durationInFrames={2200}>
          <div className="flex justify-center full-width">
            <div className="w-1/2 bg-black">
              <h1 className="text-8xl text-white mb-10 text-center">Perks:</h1>
              <Sequence layout="none" from={45} durationInFrames={1060}>
                <h2 className="text-white text-6xl mb-5">- statically-typed JavaScript</h2>
                <Sequence from={105} layout="none">
                  <h2 className="text-white text-6xl mb-5">- fewer bugs in dev env</h2>
                  <Sequence from={105} layout="none">
                    <h2 className="text-white text-6xl mb-5">- more robust codebase</h2>
                    <Sequence from={60} layout="none">
                      <h2 className="text-white text-6xl mb-5">- easy codebase maintenance</h2>
                      <Sequence from={105} layout="none">
                        <h2 className="text-white text-6xl mb-5">- enables richer dev env</h2>
                        <Sequence from={105} layout="none">
                          <h2 className="text-white text-6xl mb-5">- enables easier dev exp</h2>
                          <Sequence from={85} durationInFrames={30}>
                            <Img className="absolute" style={{ top: '30%' }} src={subl} />
                            <Sequence from={20}>
                              <Img className="absolute right-0" style={{ top: '40%' }} src={vsc} />
                            </Sequence>
                          </Sequence>
                          <Sequence from={150} durationInFrames={40}>
                            <Img src={vscl} className="w-full h-full" />
                          </Sequence>
                          <Sequence from={105} layout="none">
                            <h2 className="text-white text-6xl mb-5">- widely-supported</h2>
                          </Sequence>
                          <Sequence from={235} layout="none">
                            <h2 className="text-white text-6xl mb-5">- IDEs: better suggestions</h2>
                            <Sequence from={45} layout="none">
                              <h2 className="text-white text-6xl mb-5">- IDEs: superior intellisense</h2>
                              <Sequence from={100} durationInFrames={45}>
                                <h2 style={{ height: 'fit-content', top: '5%', fontSize: "20rem" }} className="text-center w-full absolute text-red-500 bg-black">SO. MANY. ERRORS.</h2>
                              </Sequence>
                              <Sequence from={45} layout="none">
                                <h2 className="text-white text-6xl mb-5">- IDEs: better error handling</h2>
                                <Sequence from={210} layout="none">
                                  <h2 className="text-6xl text-center text-green-500 mb-5">Your hand is held because you weren't lazy</h2>
                                </Sequence>
                              </Sequence>
                            </Sequence>
                          </Sequence>
                        </Sequence>
                      </Sequence>
                    </Sequence>
                  </Sequence>
                </Sequence>
              </Sequence>
              <Sequence from={1100} layout="none">
                <h2 className="text-white text-6xl mb-5">- tools help you out more</h2>
                <Sequence from={120} layout="none">
                  <Sequence from={145} durationInFrames={60}>
                    <Img style={{ top: '25%' }} className="left-0 absolute w-1/3 h-1/2" src={tslogo} />
                    <div style={{ height: 'fit-content', left: '45%', top: '38%' }} className="absolute bg-black pb-10">
                      <span className="text-9xl text-white">&rarr;</span> <br />
                      <span className="text-9xl text-white">&larr;</span>
                    </div>
                    <Img style={{ top: '25%', borderRadius: '3rem' }} className="right-0 absolute w-1/3 h-1/2" src={jslogo} />
                  </Sequence>
                  <h2 className="text-white text-6xl mb-5">- you get better at code</h2>
                  <Sequence from={170} layout="none">
                    <h2 className="text-white text-6xl mb-5">- completely compatible with JS</h2>
                    <Sequence from={60} layout="none">
                      <h2 className="text-white text-6xl mb-5">- can be run in the same place as JS</h2>
                      <Sequence from={80} layout="none">
                        <h2 className="text-white text-6xl mb-5">- completely open-source</h2>
                        <Sequence from={85} layout="none">
                          <h2 className="text-white text-6xl mb-5">- all the cool nerds use it</h2>
                          <Sequence from={130} layout="none">
                            <div className="w-full flex mt-10">
                              <Img src={banger} className="w-1/2" />
                              <Sequence from={80} layout="none">
                                <Img src={banger} className="w-1/2 rotate-180" />
                              </Sequence>
                            </div>
                          </Sequence>
                        </Sequence>
                      </Sequence>
                    </Sequence>
                  </Sequence>
                </Sequence>
              </Sequence>
            </div>
          </div>
        </Sequence>
        <Video src={bgVideo} loop muted />
        <Audio src={fgAudio} />
        <Audio src={bgAudio} volume={0.005} />
      </Sequence>
    </>
  )
}