const { RESTDataSource } = require("apollo-datasource-rest");
const API_URL = require("../constants");

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = API_URL;
  }

  getTracksForHome() {
    return this.get("tracks");
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }
}

module.exports = TrackAPI;
