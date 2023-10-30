class EventEmitter {
  constructor() {
    this.events = {}; // An object to store event subscriptions
  }

  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    
    const subscription = { callback, unsubscribed: false };
    this.events[eventName].push(subscription);

    return {
      unsubscribe: () => {
        subscription.unsubscribed = true;
      }
    };
  }

  emit(eventName, args = []) {
    const subscriptions = this.events[eventName] || [];

    const results = [];
    for (const subscription of subscriptions) {
      if (!subscription.unsubscribed) {
        results.push(subscription.callback(...args));
      }
    }

    return results;
  }
}
