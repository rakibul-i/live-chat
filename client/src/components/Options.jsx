import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../SocketContext";
import { MdAssignmentTurnedIn } from "react-icons/md";

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);

  const [idToCall, setIdToCall] = useState("");
  return (
    <section className="">
      <div className="py-5 bg-white px-4">
        <div>
          <div>
            <div className="grid gap-5 md:grid-cols-2 grid-cols-1">
              <div>
                <h6 className="text-lg font-semibold">Account Info</h6>
                <input
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="focus:outline-none border-b-2 my-2 border-black px-2 py-1 shadow block w-full"
                />
                <CopyToClipboard
                  text={me}
                  className="my-2 bg-blue-700 rounded font-bold font-serif tracking-widest text-white w-full py-1 flex justify-center"
                >
                  <button className=" py-1 rounded flex justify-center items-center">
                    Copy Your ID
                  </button>
                </CopyToClipboard>
              </div>
              <div>
                <h6 className="text-lg font-semibold">Make a Call</h6>
                <input
                  label="Name"
                  value={idToCall}
                  onChange={(e) => setIdToCall(e.target.value)}
                  type="text"
                  placeholder="ID To Call"
                  className="focus:outline-none border-b-2 my-2 border-black px-2 py-1 shadow block w-full"
                />
                {callAccepted && !callEnded ? (
                  <button
                    onClick={leaveCall}
                    className="bg-red-500 w-full text-white py-1 rounded flex justify-center items-center font-bold font-serif tracking-widest"
                  >
                    Hang Up
                  </button>
                ) : (
                  <button
                    onClick={() => callUser(idToCall)}
                    className="bg-green-500 w-full text-white py-1 rounded flex justify-center items-center font-bold font-serif tracking-widest"
                  >
                    Call
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>{" "}
        {children}
      </div>
    </section>
  );
};

export default Options;
