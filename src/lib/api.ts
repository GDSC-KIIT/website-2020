export function getStrapiURL(path = "") {
    return `${
      process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:9000"
    }${path}`;
  }
  
  // Helper to make GET requests to Strapi
  export async function fetchAPI(path:string) {
    const requestUrl:string = getStrapiURL(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  }