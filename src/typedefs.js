/* eslint-disable max-len */
// typedefs.js
/**
 * @namespace typedefs
 */

/**
 * @typedef {Object.<string, function>} EventHandlers
 * @property {function} onReady - Called when HubSpot is ready to receive messages.
 * @property {function} onDialNumber - Called when the HubSpot sends a dial number from the contact.
 * @property {function} onEngagementCreated - Called when HubSpot creates an engagement for the call.
 * @property {function} onVisibilityChanged - Called when the call widget's visibility changes.
 * @property {function} onCallerIdMatchFailed - Called when the caller ID match fails.
 * @property {function} onCallerIdMatchSucceeded - Called when the caller ID match succeeds.
 * @property {function} onCreateEngagementFailed - Called when creating an engagement fails.
 * @property {function} onCreateEngagementSucceeded - Called when creating an engagement succeeds.
 * @property {function} onNavigateToRecordFailed - Called when navigating to a record fails.
 * @property {function} onPublishToChannelFailed - Called when publishing to a channel fails.
 * @property {function} onPublishToChannelSucceeded - Called when publishing to a channel succeeds.
 * @property {function} onSetCallState - Called when the call state changes.
 * @property {function} onUpdateEngagementFailed - Called when updating an engagement fails.
 * @property {function} onUpdateEngagementSucceeded - Called when updating an engagement succeeds.
 * @property {function} onEndCall - Called when the call ends.
 * @property {function} onInitiateCallIdSucceeded - Called when initiating a call ID succeeds.
 * @property {function} onInitiateCallIdFailed - Called when initiating a call ID fails.
 * @property {function} [defaultEventHandler] - Default event handler to handle unhandled events.
 */

/**
 * @typedef {Object} IframeOptions
 * @property {string} src - iframe URL
 * @property {string} height - Height of iframe
 * @property {string} width - Width of iframe
 * @property {string} hostElementSelector - Selector for host element where iframe will be bound
 */

/**
 * @typedef {Object} Options
 * @property {IframeOptions} [iFrameOptions] - iFrame configuration options
 * @property {boolean} debugMode - Whether to log various inbound/outbound debug messages
 * to the console.
 * @property {EventHandlers} eventHandlers - Event handlers handle inbound messages.
 */

/**
 * @typedef {Object} IframeManagerOptions
 * @property {IframeOptions} [iFrameOptions] - iFrame configuration options
 * @property {boolean} debugMode - Whether to log various inbound/outbound debug messages
 * to the console.
 * @property {function} onMessageHandler - Callback function to handle inbound messages.
 */

/**
 * @typedef {Object} OnResize
 * @property {number} width
 * @property {number} height
 */

/**
 * @typedef {OnResize} SizeInfo
 */

/**
 * @typedef {Object} OnInitialized
 * @property {boolean} [isLoggedIn]
 * @property {number} [engagementId]
 */

/**
 * @typedef {Object} OnIncomingCall
 * @property {string} externalCallId
 * @property {number} [callStartTime]
 * @property {boolean} [createEngagement]
 * @property {string} fromNumber
 * @property {string} toNumber
 */

/**
 * @typedef {Object} OnOutgoingCall
 * @property {string} externalCallId
 * @property {number} [callStartTime]
 * @property {boolean} [createEngagement]
 * @property {string} [fromNumber]
 * @property {string} [toNumber]
 */

/**
 * @typedef {Object} OnCallAnswered
 * @property {string} externalCallId
 */

/**
 * @typedef {Object} OnPublishToChannel
 * @property {string} externalCallId
 * @property {number} engagementId
 */

/**
 * @typedef {'COMPLETED'|'FAILED'|'CANCELED'|'BUSY'|'NO_ANSWER'|'REJECTED'|'MISSED'} EndStatus
 */

/**
 * @typedef {Object} OnCallEnded
 * @property {string} externalCallId
 * @property {number} engagementId
 * @property {EndStatus} [callEndStatus]
 */

/**
 * @typedef {Object} RawEngagementProperties
 * @property {number|string} hs_timestamp - This field marks the call's time of creation and determines where the call sits on the record timeline.
 * @property {string} [hs_call_body] - The description of the call, including any notes that you want to add.
 * @property {string} [hs_call_callee_object_id] - The ID of the HubSpot record associated with the call. This will be the recipient of the call for OUTBOUND calls, or the dialer of the call for INBOUND calls.
 * @property {string} [hs_call_callee_object_type] - The type of the object to which the call's associated record belongs (e.g., specifies if the record is a contact or company). This will be the object of the recipient for OUTBOUNDcalls, or the object of the dialer for INBOUND calls.
 * @property {string} [hs_call_direction] - The direction of the call from the perspective of the HubSpot user. If the user is the call recipient, the direction should be set to INBOUND. If the user initiated the call, the direction should be set to OUTBOUND.
 * @property {string} [hs_call_disposition]
 * @property {string} [hs_call_duration] - The duration of the call in milliseconds.
 * @property {string} [hs_call_from_number] - The phone number that the call was made from.
 * @property {string} [hs_call_recording_url] - The URL that stores the call recording. URLS to .mp3 or .wav files can be played back on CRM records. Only HTTPS,  secure URLs will be accepted.
 * @property {string} [hs_call_status] - The status of the call. The statuses are BUSY, CALLING_CRM_USER, CANCELED, COMPLETED, CONNECTING, FAILED, IN_PROGRESS, NO_ANSWER, QUEUED, and RINGING.
 * @property {string} [hs_call_title] - The title of the call.
 * @property {string} [hs_call_source] - The source of the call. This is not required, but it is required to leverage the recording and transcriptions pipeline. If the property is set, it must be set to INTEGRATIONS_PLATFORM.
 * @property {string} [hs_call_to_number] - The phone number that received the call.
 * @property {string} [hubspot_owner_id] - The ID of the owner associated with the call. This field determines the user listed as the call creator on the record timeline.
 * @property {string} [hs_activity_type] - The type of call. The options are based on the call types set in your HubSpot account.
 * @property {string} [hs_attachment_ids] - The IDs of the call's attachments. Multiple attachment IDs are separated by a semi-colon.
 */

/**
 * @typedef {Object} OnCallCompleted
 * @property {string} externalCallId
 * @property {number|string} [engagementId]
 * @property {boolean} [hideWidget]
 * @property {RawEngagementProperties} [engagementProperties]
 */

/**
 * @typedef {Object} ObjectCoordinates
 * @property {number} portalId
 * @property {number} objectId
 * @property {"0-1"|"0-2"} objectTypeId
 */

/**
 * @typedef {Object} OnNavigateToRecord
 * @property {number} [engagementId]
 * @property {ObjectCoordinates} objectCoordinates
 */

/**
 * @typedef {Object} OnError
 * @property {string} message
 */

/**
 * @typedef {Object} OnMessage
 * @property {string} type
 * @property {Object} [data]
 */

/**
 * @typedef {Object} ContactIdMatch
 * @property {"CONTACT"} callerIdType
 * @property {ObjectCoordinates} objectCoordinates
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 */

/**
 * @typedef {Object} CompanyIdMatch
 * @property {"COMPANY"} callerIdType
 * @property {ObjectCoordinates} objectCoordinates
 * @property {string} name
 */

export {};
