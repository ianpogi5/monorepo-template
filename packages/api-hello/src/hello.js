import response from "@kdcio/api-gw-resp";

export const handler = async () => {
  return response.OK({ body: "Hello from GetBayad!" });
};
