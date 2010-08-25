/**
 * Copyright (C) 2010 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * variables from ril.h
 */

/**
 * RIL Error codes
 */
var RIL_E_SUCCESS = 0;
var RIL_E_RADIO_NOT_AVAILABLE = 1;     /* If radio did not start or is resetting */
var RIL_E_GENERIC_FAILURE = 2;
var RIL_E_PASSWORD_INCORRECT = 3;      /* for PIN/PIN2 methods only! */
var RIL_E_SIM_PIN2 = 4;                /* Operation requires SIM PIN2 to be entered */
var RIL_E_SIM_PUK2 = 5;                /* Operation requires SIM PIN2 to be entered */
var RIL_E_REQUEST_NOT_SUPPORTED = 6;
var RIL_E_CANCELLED = 7;
var RIL_E_OP_NOT_ALLOWED_DURING_VOICE_CALL = 8; /* data ops are not allowed during voice
                                                   call on a Class C GPRS device */
var RIL_E_OP_NOT_ALLOWED_BEFORE_REG_TO_NW = 9;  /* data ops are not allowed before device
                                                   registers in network */
var RIL_E_SMS_SEND_FAIL_RETRY = 10;             /* fail to send sms and need retry */
var RIL_E_SIM_ABSENT = 11;                      /* fail to set the location where CDMA subscription
                                                   shall be retrieved because of SIM or RUIM
                                                   card absent */
var RIL_E_SUBSCRIPTION_NOT_AVAILABLE = 12;      /* fail to find CDMA subscription from specified
                                                   location */
var RIL_E_MODE_NOT_SUPPORTED = 13;              /* HW does not support preferred network type */
var RIL_E_FDN_CHECK_FAILURE = 14;               /* command failed because recipient is not on FDN
                                                   list */
var RIL_E_ILLEGAL_SIM_OR_ME = 15;               /* network selection failed due to */

/**
 * RIL_CallState
 */
var CALLSTATE_ACTIVE = 0;
var CALLSTATE_HOLDING = 1;
var CALLSTATE_DIALING = 2;                           /* MO call only */
var CALLSTATE_ALERTING = 3;                          /* MO call only */
var CALLSTATE_INCOMING = 4;                          /* MT call only */
var CALLSTATE_WAITING = 5;                           /* MT call only */

/**
 * RIL_RadioState
 */
var RADIOSTATE_OFF = 0;                   /* Radio explictly powered off (eg CFUN=0) */
var RADIOSTATE_UNAVAILABLE = 1;           /* Radio unavailable (eg, resetting or not booted) */
var RADIOSTATE_SIM_NOT_READY = 2;         /* Radio is on, but the SIM interface is not ready */
var RADIOSTATE_SIM_LOCKED_OR_ABSENT = 3;  /* SIM PIN locked, PUK required, network
                                              personalization locked; or SIM absent */
var RADIOSTATE_SIM_READY = 4;             /* Radio is on and SIM interface is available */
var RADIOSTATE_RUIM_NOT_READY = 5;        /* Radio is on, but the RUIM interface is not ready */
var RADIOSTATE_RUIM_READY = 6;            /* Radio is on and the RUIM interface is available */
var RADIOSTATE_RUIM_LOCKED_OR_ABSENT = 7; /* RUIM PIN locked, PUK required, network
                                              personalization locked; or RUIM absent */
var RADIOSTATE_NV_NOT_READY = 8;          /* Radio is on, but the NV interface is not available */
var RADIOSTATE_NV_READY = 9;              /* Radio is on and the NV interface is available */

/**
 * RIL requests
 */
var RIL_REQUEST_GET_SIM_STATUS = 1
var RIL_REQUEST_ENTER_SIM_PIN = 2
var RIL_REQUEST_ENTER_SIM_PUK = 3
var RIL_REQUEST_ENTER_SIM_PIN2 = 4
var RIL_REQUEST_ENTER_SIM_PUK2 = 5
var RIL_REQUEST_CHANGE_SIM_PIN = 6
var RIL_REQUEST_CHANGE_SIM_PIN2 = 7
var RIL_REQUEST_ENTER_NETWORK_DEPERSONALIZATION = 8
var RIL_REQUEST_GET_CURRENT_CALLS = 9
var RIL_REQUEST_DIAL = 10
var RIL_REQUEST_GET_IMSI = 11
var RIL_REQUEST_HANGUP = 12
var RIL_REQUEST_HANGUP_WAITING_OR_BACKGROUND = 13
var RIL_REQUEST_HANGUP_FOREGROUND_RESUME_BACKGROUND = 14
var RIL_REQUEST_SWITCH_WAITING_OR_HOLDING_AND_ACTIVE = 15
var RIL_REQUEST_SWITCH_HOLDING_AND_ACTIVE = 15
var RIL_REQUEST_CONFERENCE = 16
var RIL_REQUEST_UDUB = 17
var RIL_REQUEST_LAST_CALL_FAIL_CAUSE = 18
var RIL_REQUEST_SIGNAL_STRENGTH = 19
var RIL_REQUEST_REGISTRATION_STATE = 20
var RIL_REQUEST_GPRS_REGISTRATION_STATE = 21
var RIL_REQUEST_OPERATOR = 22
var RIL_REQUEST_RADIO_POWER = 23
var RIL_REQUEST_DTMF = 24
var RIL_REQUEST_SEND_SMS = 25
var RIL_REQUEST_SEND_SMS_EXPECT_MORE = 26
var RIL_REQUEST_SETUP_DATA_CALL = 27
var RIL_REQUEST_SIM_IO = 28
var RIL_REQUEST_SEND_USSD = 29
var RIL_REQUEST_CANCEL_USSD = 30
var RIL_REQUEST_GET_CLIR = 31
var RIL_REQUEST_SET_CLIR = 32
var RIL_REQUEST_QUERY_CALL_FORWARD_STATUS = 33
var RIL_REQUEST_SET_CALL_FORWARD = 34
var RIL_REQUEST_QUERY_CALL_WAITING = 35
var RIL_REQUEST_SET_CALL_WAITING = 36
var RIL_REQUEST_SMS_ACKNOWLEDGE = 37
var RIL_REQUEST_GET_IMEI = 38
var RIL_REQUEST_GET_IMEISV = 39
var RIL_REQUEST_ANSWER = 40
var RIL_REQUEST_DEACTIVATE_DATA_CALL = 41
var RIL_REQUEST_QUERY_FACILITY_LOCK = 42
var RIL_REQUEST_SET_FACILITY_LOCK = 43
var RIL_REQUEST_CHANGE_BARRING_PASSWORD = 44
var RIL_REQUEST_QUERY_NETWORK_SELECTION_MODE = 45
var RIL_REQUEST_SET_NETWORK_SELECTION_AUTOMATIC = 46
var RIL_REQUEST_SET_NETWORK_SELECTION_MANUAL = 47
var RIL_REQUEST_QUERY_AVAILABLE_NETWORKS = 48
var RIL_REQUEST_DTMF_START = 49
var RIL_REQUEST_DTMF_STOP = 50
var RIL_REQUEST_BASEBAND_VERSION = 51
var RIL_REQUEST_SEPARATE_CONNECTION = 52
var RIL_REQUEST_SET_MUTE = 53
var RIL_REQUEST_GET_MUTE = 54
var RIL_REQUEST_QUERY_CLIP = 55
var RIL_REQUEST_LAST_DATA_CALL_FAIL_CAUSE = 56
var RIL_REQUEST_DATA_CALL_LIST = 57
var RIL_REQUEST_RESET_RADIO = 58
var RIL_REQUEST_OEM_HOOK_RAW = 59
var RIL_REQUEST_OEM_HOOK_STRINGS = 60
var RIL_REQUEST_SCREEN_STATE = 61
var RIL_REQUEST_SET_SUPP_SVC_NOTIFICATION = 62
var RIL_REQUEST_WRITE_SMS_TO_SIM = 63
var RIL_REQUEST_DELETE_SMS_ON_SIM = 64
var RIL_REQUEST_SET_BAND_MODE = 65
var RIL_REQUEST_QUERY_AVAILABLE_BAND_MODE = 66
var RIL_REQUEST_STK_GET_PROFILE = 67
var RIL_REQUEST_STK_SET_PROFILE = 68
var RIL_REQUEST_STK_SEND_ENVELOPE_COMMAND = 69
var RIL_REQUEST_STK_SEND_TERMINAL_RESPONSE = 70
var RIL_REQUEST_STK_HANDLE_CALL_SETUP_REQUESTED_FROM_SIM = 71
var RIL_REQUEST_EXPLICIT_CALL_TRANSFER = 72
var RIL_REQUEST_SET_PREFERRED_NETWORK_TYPE = 73
var RIL_REQUEST_GET_PREFERRED_NETWORK_TYPE = 74
var RIL_REQUEST_GET_NEIGHBORING_CELL_IDS = 75
var RIL_REQUEST_SET_LOCATION_UPDATES = 76
var RIL_REQUEST_CDMA_SET_SUBSCRIPTION = 77
var RIL_REQUEST_CDMA_SET_ROAMING_PREFERENCE = 78
var RIL_REQUEST_CDMA_QUERY_ROAMING_PREFERENCE = 79
var RIL_REQUEST_SET_TTY_MODE = 80
var RIL_REQUEST_QUERY_TTY_MODE = 81
var RIL_REQUEST_CDMA_SET_PREFERRED_VOICE_PRIVACY_MODE = 82
var RIL_REQUEST_CDMA_QUERY_PREFERRED_VOICE_PRIVACY_MODE = 83
var RIL_REQUEST_CDMA_FLASH = 84
var RIL_REQUEST_CDMA_BURST_DTMF = 85
var RIL_REQUEST_CDMA_VALIDATE_AND_WRITE_AKEY = 86
var RIL_REQUEST_CDMA_SEND_SMS = 87
var RIL_REQUEST_CDMA_SMS_ACKNOWLEDGE = 88
var RIL_REQUEST_GSM_GET_BROADCAST_SMS_CONFIG = 89
var RIL_REQUEST_GSM_SET_BROADCAST_SMS_CONFIG = 90
var RIL_REQUEST_GSM_SMS_BROADCAST_ACTIVATION = 91
var RIL_REQUEST_CDMA_GET_BROADCAST_SMS_CONFIG = 92
var RIL_REQUEST_CDMA_SET_BROADCAST_SMS_CONFIG = 93
var RIL_REQUEST_CDMA_SMS_BROADCAST_ACTIVATION = 94
var RIL_REQUEST_CDMA_SUBSCRIPTION = 95
var RIL_REQUEST_CDMA_WRITE_SMS_TO_RUIM = 96
var RIL_REQUEST_CDMA_DELETE_SMS_ON_RUIM = 97
var RIL_REQUEST_DEVICE_IDENTITY = 98
var RIL_REQUEST_EXIT_EMERGENCY_CALLBACK_MODE = 99
var RIL_REQUEST_GET_SMSC_ADDRESS = 100
var RIL_REQUEST_SET_SMSC_ADDRESS = 101
var RIL_REQUEST_REPORT_SMS_MEMORY_STATUS = 102
var RIL_REQUEST_REPORT_STK_SERVICE_IS_RUNNING = 103

/**
 * RIL unsolicited requests
 */
var RIL_UNSOL_RESPONSE_BASE = 1000
var RIL_UNSOL_RESPONSE_RADIO_STATE_CHANGED = 1000
var RIL_UNSOL_RESPONSE_CALL_STATE_CHANGED = 1001
var RIL_UNSOL_RESPONSE_NETWORK_STATE_CHANGED = 1002
var RIL_UNSOL_RESPONSE_NEW_SMS = 1003
var RIL_UNSOL_RESPONSE_NEW_SMS_STATUS_REPORT = 1004
var RIL_UNSOL_RESPONSE_NEW_SMS_ON_SIM = 1005
var RIL_UNSOL_ON_USSD = 1006
var RIL_UNSOL_ON_USSD_REQUEST = 1007
var RIL_UNSOL_NITZ_TIME_RECEIVED = 1008
var RIL_UNSOL_SIGNAL_STRENGTH = 1009
var RIL_UNSOL_DATA_CALL_LIST_CHANGED = 1010
var RIL_UNSOL_SUPP_SVC_NOTIFICATION = 1011
var RIL_UNSOL_STK_SESSION_END = 1012
var RIL_UNSOL_STK_PROACTIVE_COMMAND = 1013
var RIL_UNSOL_STK_EVENT_NOTIFY = 1014
var RIL_UNSOL_STK_CALL_SETUP = 1015
var RIL_UNSOL_SIM_SMS_STORAGE_FULL = 1016
var RIL_UNSOL_SIM_REFRESH = 1017
var RIL_UNSOL_CALL_RING = 1018
var RIL_UNSOL_RESPONSE_SIM_STATUS_CHANGED = 1019
var RIL_UNSOL_RESPONSE_CDMA_NEW_SMS = 1020
var RIL_UNSOL_RESPONSE_NEW_BROADCAST_SMS = 1021
var RIL_UNSOL_CDMA_RUIM_SMS_STORAGE_FULL = 1022
var RIL_UNSOL_RESTRICTED_STATE_CHANGED = 1023
var RIL_UNSOL_ENTER_EMERGENCY_CALLBACK_MODE = 1024
var RIL_UNSOL_CDMA_CALL_WAITING = 1025
var RIL_UNSOL_CDMA_OTA_PROVISION_STATUS = 1026
var RIL_UNSOL_CDMA_INFO_REC = 1027
var RIL_UNSOL_OEM_HOOK_RAW = 1028
var RIL_UNSOL_RINGBACK_TONE = 1029
var RIL_UNSOL_RESEND_INCALL_MUTE = 1030

/**
 * Control commands in ctrl.proto
 */
var CTRL_CMD_GET_RADIO_STATE = 1
var CTRL_CMD_SET_RADIO_STATE = 2

/**
 * Local requests from simulated_radio or simulated_icc
 */
var REQUEST_DELAY_TEST = 2000
var REQUEST_UNSOL_SIGNAL_STRENGTH = 2001
var REQUEST_UNSOL_CALL_STATE_CHANGED = 2002

/**
 * Other variables
 */
var OUTGOING = 0;       /* outgoing call */
var INCOMING = 1;       /* incoming call */
