import { createStore } from "framework7/lite";

// Define States
let state = {
    count: 0,
    messagesData:[],
    contentCount:0,
    apiKey:'',
    temperature:0.0,
    conversations:[{id:'0123456789',name:'(Conversation name)',prompt:'You are my english teacher',lastMessage:"....",updateAt:'2023-08-02 19:13:00',},
    {id:'0123456780',name:'(Conversation name)',prompt:'You are my english teacher',lastMessage:"....",updateAt:'2023-08-02 19:13:00',}
  
  ],
  };
   
  // Define Getters
  const getters = {
    count({ state }) {
      return state.count;
    },
    messagesData({ state }) {
      return state.messagesData;
    },
    contentCount({ state }) {
      return state.contentCount;
    },
    apiKey({ state }) {
      return state.apiKey;
    },
    temperature({ state }) {
      return state.temperature;
    },
    conversations({ state }) {
      return state.conversations;
    },
  };
   
  // Define Actions
  const actions = {
    setCount({ state }, newValue) {
      state.count = newValue;
    },
    setMessagesData({ state }, newValue) {
      state.messagesData = newValue;
    },
    setContentCount({ state }, newValue) {
      state.contentCount = newValue;
    },
    setApiKey({ state }, newValue) {
      state.apiKey = newValue;
    },
    setTemperature({ state }, newValue) {
      state.temperature = newValue;
    },
    setConversations({ state }, newValue) {
      state.conversations = newValue;
    },
  };
   
  if (typeof window !== "undefined") {
    const savedState = localStorage.getItem("state");
   
    if (savedState) {
      state = JSON.parse(savedState);
    }
  }
   
  const store = createStore({
    state,
    getters,
    actions,
  });
   
  store.state = new Proxy(store.state, {
    set(obj, prop, value) {
      obj[prop] = value;
   
      // save to localStorage
      if (typeof window !== "undefined") {
        const currentState = JSON.stringify(store.state);
        localStorage.setItem("state", currentState);
      }
   
      return true;
    },
  });
export default store;