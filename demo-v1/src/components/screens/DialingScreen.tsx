import { useEffect } from "react";
import { EndCallButton, Row, Timer } from "../Components";
import { ScreenProps } from "../App";

function DialingScreen({
  handleNextScreen,
  dialNumber,
  callDurationString,
  handleEndCall,
}: ScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextScreen();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Dialing {dialNumber} ...</h2>
        <Timer>{callDurationString}</Timer>
      </div>
      <Row>
        <EndCallButton use="primary" onClick={handleEndCall}>
          End Call
        </EndCallButton>
      </Row>
    </>
  );
}

export default DialingScreen;
