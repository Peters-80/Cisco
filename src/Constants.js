"use es6";

const { version } = require("../package.json");
export const VERSION = version;

export const debugMessageType = {
  FROM_HUBSPOT: "From HubSpot",
  TO_HUBSPOT: "To HubSpot",
  GENERIC_MESSAGE: "Generic Message",
};

export const messageType = {
  CALL_ANSWERED: "CALL_ANSWERED",
  CALL_COMPLETED: "CALL_COMPLETED",
  CALL_DATA: "CALL_DATA",
  CALL_ENDED: "CALL_ENDED",
  CREATE_ENGAGEMENT_FAILED: "CREATE_ENGAGEMENT_FAILED",
  CREATE_ENGAGEMENT_SUCCEEDED: "CREATE_ENGAGEMENT_SUCCEEDED",
  DIAL_NUMBER: "DIAL_NUMBER",
  END_CALL: "END_CALL",
  /**
   * @deprecated use CREATE_ENGAGEMENT_SUCCEEDED instead
   */
  ENGAGEMENT_CREATED: "ENGAGEMENT_CREATED",
  ERROR: "ERROR",
  INCOMING_CALL: "INCOMING_CALL",
  INITIALIZED: "INITIALIZED",
  LOGGED_IN: "LOGGED_IN",
  LOGGED_OUT: "LOGGED_OUT",
  OUTGOING_CALL_STARTED: "OUTGOING_CALL_STARTED",
  READY: "READY",
  RESIZE_WIDGET: "RESIZE_WIDGET",
  SET_CALL_STATE: "SET_CALL_STATE",
  SET_WIDGET_URL: "SET_WIDGET_URL",
  SYNC_ACK_FAILED: "SYNC_ACK_FAILED",
  SYNC_ACK: "SYNC_ACK",
  SYNC: "SYNC",
  UNLOADING: "UNLOADING",
  USER_AVAILABLE: "USER_AVAILABLE",
  USER_UNAVAILABLE: "USER_UNAVAILABLE",
  UPDATE_ENGAGEMENT_FAILED: "UPDATE_ENGAGEMENT_FAILED",
  UPDATE_ENGAGEMENT_SUCCEEDED: "UPDATE_ENGAGEMENT_SUCCEEDED",
  CALLER_ID_MATCH_SUCCEEDED: "CALLER_ID_MATCH_SUCCEEDED",
  CALLER_ID_MATCH_FAILED: "CALLER_ID_MATCH_FAILED",
  VISIBILITY_CHANGED: "VISIBILITY_CHANGED",
};

export const errorType = {
  UNKNOWN_MESSAGE_TYPE: "UNKNOWN_MESSAGE_TYPE",
  GENERIC: "GENERIC",
};

/** These are potential statuses from the BE client when calling from phone
 * or detecting that a call has ended in the linked engagement */

const INTERNAL_CONNECTING = "CONNECTING";
const INTERNAL_CALLING_CRM_USER = "CALLING_CRM_USER";
const INTERNAL_IN_PROGRESS = "IN_PROGRESS";
const INTERNAL_CANCELED = "CANCELED";
const INTERNAL_FAILED = "FAILED";
const INTERNAL_BUSY = "BUSY";
const INTERNAL_NO_ANSWER = "NO_ANSWER";
const INTERNAL_COMPLETED = "COMPLETED";
const INTERNAL_ENDING = "ENDING";
const INTERNAL_QUEUED = "QUEUED";
const INTERNAL_RINGING = "RINGING";

export const callStatus = {
  INTERNAL_CONNECTING,
  INTERNAL_CALLING_CRM_USER,
  INTERNAL_IN_PROGRESS,
  INTERNAL_CANCELED,
  INTERNAL_FAILED,
  INTERNAL_BUSY,
  INTERNAL_NO_ANSWER,
  INTERNAL_COMPLETED,
  INTERNAL_ENDING,
  INTERNAL_QUEUED,
  INTERNAL_RINGING,
};

export const callRingingStatus = {
  INTERNAL_QUEUED,
  INTERNAL_RINGING,
  INTERNAL_CONNECTING,
  INTERNAL_CALLING_CRM_USER,
};

export const callInProgressStatus = { INTERNAL_IN_PROGRESS };

export const callEndingStatus = { INTERNAL_ENDING };

export const callEndStatus = {
  INTERNAL_COMPLETED,
  INTERNAL_FAILED,
  INTERNAL_CANCELED,
  INTERNAL_BUSY,
  INTERNAL_NO_ANSWER,
};

export const CONTACT = "CONTACT";
export const COMPANY = "COMPANY";

export const callerIdTypes = {
  CONTACT,
  COMPANY,
};
