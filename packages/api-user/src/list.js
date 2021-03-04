import parser from "@kdcio/api-gw-req";
import response from "@kdcio/api-gw-resp";

export const handler = async (event) => {
  try {
    const request = parser(event);
    console.log(request);
    return response.OK({
      body: {
        list: ["John Doe", "Juan Dela Cruz", "Jane Doe"],
      },
    });
  } catch (error) {
    return response.ERROR({ message: error.message });
  }
};
