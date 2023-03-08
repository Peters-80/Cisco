import { fireEvent } from "@testing-library/react";
import KeypadScreen, {
  validateKeypadInput,
} from "../../../../src/components/screens/KeypadScreen";
import { ScreenNames } from "../../../../src/types/ScreenTypes";
import { renderWithWrapper } from "../../../render";

const noop = (..._args: any[]) => {};

const cti = {
  userLoggedOut: noop,
  outgoingCall: noop,
};

const props = {
  handleNextScreen: noop,
  handlePreviousScreen: noop,
  handleNavigateToScreen: noop,
  cti,
  phoneNumber: "",
  engagementId: null,
  dialNumber: "",
  setDialNumber: noop,
  notes: "",
  setNotes: noop,
  callDuration: 0,
  callDurationString: "",
  startTimer: noop,
  stopTimer: noop,
  handleEndCall: noop,
  handleSaveCall: noop,
};

describe("KeypadScreen", () => {
  beforeEach(() => {
    cti.userLoggedOut = jasmine.createSpy("userLoggedOut");
    cti.outgoingCall = jasmine.createSpy("outgoingCall");
    props.handleNextScreen = jasmine.createSpy("handleNextScreen");
    props.handleNavigateToScreen = jasmine.createSpy("handleNavigateToScreen");
    props.setDialNumber = jasmine.createSpy("setDialNumber");
  });

  describe("Log out", () => {
    it("Handles log out button click", () => {
      const { getByRole } = renderWithWrapper(<KeypadScreen {...props} />);
      const button = getByRole("button", {
        name: /Log out/i,
      });

      button.click();

      expect(cti.userLoggedOut).toHaveBeenCalled();
      expect(props.handleNavigateToScreen).toHaveBeenCalledWith(
        ScreenNames.Login
      );
    });
  });

  describe("Start call", () => {
    it("Button is disabled initially", () => {
      const { getByRole } = renderWithWrapper(<KeypadScreen {...props} />);
      const button = getByRole("button", {
        name: /start-call/i,
      });
      expect(button).toHaveAttribute("disabled");
    });

    it("Handles start call button click", () => {
      const { getByRole, getByTestId } = renderWithWrapper(
        <KeypadScreen {...props} />
      );

      const input = getByTestId("VizExInput-Input");
      fireEvent.change(input, {
        target: { value: "+16179341958" },
      });

      const button = getByRole("button", {
        name: /start-call/i,
      });
      button.click();
      expect(cti.outgoingCall).toHaveBeenCalled();
      expect(props.handleNextScreen).toHaveBeenCalled();
    });
  });

  describe("Number validation", () => {
    it("Validates keypad characters", () => {
      expect(validateKeypadInput("a")).toBe(false);
      expect(validateKeypadInput("(617)-934-1958")).toBe(false);
      expect(validateKeypadInput("+16179341958")).toBe(true);
      expect(validateKeypadInput("*+")).toBe(true);
    });

    it("Allows keypad characters in input field", async () => {
      const { getByTestId } = renderWithWrapper(<KeypadScreen {...props} />);

      const input = await getByTestId("VizExInput-Input");

      fireEvent.change(input, {
        target: { value: "617" },
      });

      expect(props.setDialNumber).toHaveBeenCalledWith("617");
    });

    it("Does not allow non keypad characters in input field", async () => {
      const { getByTestId } = renderWithWrapper(<KeypadScreen {...props} />);

      const input = await getByTestId("VizExInput-Input");
      fireEvent.change(input, {
        target: { value: "-" },
      });

      expect(props.setDialNumber).not.toHaveBeenCalled();
    });
  });
});
