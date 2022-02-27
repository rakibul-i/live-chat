import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className="flex justify-center items-center py-3">
          <h1 className="capitalize">{call.name} is calling: </h1>
          <button
            onClick={answerCall}
            className="bg-green-500 text-white py-1 rounded flex justify-center items-center font-bold  mx-2 px-2"
          >
            Answer
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;
