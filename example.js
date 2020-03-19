// class.js
class Handler {
  event = null;

  constructor(event) {
    this.event = event;
  }

  async flow() {
    const isValid = await this.validateSession();

    if (!isValid) {
      return 'INVALID_SESSION';
    }

    return await this.getData();
  }

  validateSession() {
    return new Promise((resolve, reject) => {
      resolve(true); // false
    });
  }

  getData() {
    return new Promise((resolve, reject) => {
      resolve({ id: this.getId() });
    });
  }

  getId() {
    return 1;
  }
}

(async () => {
  const response = await new Handler({ credentials: 'x' }).flow();
  console.log(response)
})();
