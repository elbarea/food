import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer fNFLCWT56RGYjsehwetvN9cuYC_VI6cAMRpz2TI9514OjbGyZkG9LzLuM5Kv6gsTIvJOoal-9z-bpnkTWsPDciEt5btv-1Gri0cXXZIu-ylTaCdN_V8RBNkO6MmDYXYx",
  },
});