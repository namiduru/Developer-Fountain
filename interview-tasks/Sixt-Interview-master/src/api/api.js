import axios from "axios";

const API = "https://www.mydriver.com/api/v5/";

export const getLocations = (searchString, cb) => {
  axios
    .get(`${API}locations/autocomplete?searchString=${searchString}`)
    .then((r) => {
      const locations = r.data.map((element) => ({
        id: element.id,
        title: element.address,
        placeId: element.placeId,
      }));

      cb(locations);
    })
    .catch((e) => console.log(e));
};

export const getOffers = (data, cb, ecb, emsgcb, setFetchStatus) => {
  axios
    .post(`${API}offers`, {
      ...data,
      type: "DURATION",
    })
    .then((r) => {
      cb(r.data);
      ecb(false);
    })
    .catch((e) => {
      const response = e.response;
      const { status, data } = response;

      if (status === 400) {
        ecb(true);
        emsgcb(data.message);
        cb([]);
      }
    })
    .then(() => {
      setFetchStatus(false);
    });
};
