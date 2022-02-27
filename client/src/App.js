import React from "react";
import Notifications from "./components/Notifications";
import Options from "./components/Options";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  return (
    <main className="min-h-screen min-w-screen bg-[url('https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] py-5 bg-cover ">
      <div className=" md:w-9/12 w-11/12 mx-auto">
        <div className="text-center">
          <span className="bg-white text-black px-5 py-2 text-4xl font-black font-mono">
            Video Chat
          </span>
        </div>

        {/* video player */}
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </div>
    </main>
  );
};

export default App;
