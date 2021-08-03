import { httpClient } from "../config/config";
export function fetch_Data() {
  return async (dispatch) => {
    await dispatch({ type: "FETCHING_DATA" });
    await httpClient
      .get("products")
      .then(async function (res) {
        console.log("====================================");
        // console.log(res.data);
        return await dispatch({
          type: "FETCH_DATA",
          data: res.data,
          
        });
      })
      .catch((err) => dispatch({ type: "FETCH_DATA_FAILURE" }));
  };
}
