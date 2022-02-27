import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const VideoPlayer = () => {
  const { call, callAccepted, myVideo, userVideo, stream, name, callEnded } =
    useContext(SocketContext);
  return (
    <div className="grid md:grid-cols-2 gird-cols-1 gap-5 py-20 ">
      {/* // out own video */}
      {stream && (
        <div className="bg-white overflow-hidden shadow-xl ">
          <div className="gird md:grid-cols-2 grid-cols-1">
            <h1 className="text-center py-2 font-lg ">{name || "Name"}</h1>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className="shadow-xl w-full"
            />
          </div>
        </div>
      )}

      {/* // users video */}
      {callAccepted && !callEnded && (
        <div className="bg-white h-96 shadow-xl ">
          <div className="gird md:grid-cols-2 grid-cols-1">
            <h1>{call.name || "Name"}</h1>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className="shadow-xl w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
