"use strict";

import * as shortid from 'shortid';

export default class ChatSession {
  constructor() {
    this.sessionID = shortid.generate();

    this.prevChat = [];
    this.prevResponses = [];
    this.topic = '*';
  }
};
