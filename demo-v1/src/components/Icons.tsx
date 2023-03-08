import Phone from "../icons/phone.svg";
import Record from "../icons/recordVinyl.svg";
import DeleteLeft from "../icons/deleteLeft.svg";
import Mute from "../icons/microphone.svg";
import Unmute from "../icons/microphoneSlash.svg";
import Keypad from "../icons/mobileRetro.svg";

export const StartCallSvg = <Phone width="18" height="18" fill="white" />;

export const EndCallSvg = (
  <Phone width="18" height="18" fill="white" transform="rotate(135)" />
);

export const StartRecordSvg = (
  <Record
    width="30"
    height="30"
    aria-hidden="true"
    focusable="false"
    fill="#516F90"
  />
);

export const StopRecordSvg = (
  <Record
    width="30"
    height="30"
    aria-hidden="true"
    focusable="false"
    fill="white"
  />
);

export const DeleteLeftSvg = (
  <DeleteLeft
    width="40"
    height="30"
    aria-hidden="true"
    focusable="false"
    fill="#05a3bd"
  >
    X
  </DeleteLeft>
);

export const UnmuteSvg = (
  <Unmute
    width="30"
    height="30"
    aria-hidden="true"
    focusable="false"
    fill="white"
  />
);

export const MuteSvg = (
  <Mute
    width="30"
    height="30"
    aria-hidden="true"
    focusable="false"
    fill="#516F90"
  />
);

export const HideKeypadSvg = (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Keypad
      width="30"
      height="30"
      aria-hidden="true"
      focusable="false"
      fill="white"
    />
  </div>
);

export const ShowKeypadSvg = (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Keypad
      width="30"
      height="30"
      aria-hidden="true"
      focusable="false"
      fill="#516F90"
    />
  </div>
);
