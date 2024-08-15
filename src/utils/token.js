import jwt_decode from "jwt-decode";

export const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000; // current time in seconds

    // If the token doesn't have an 'iat' field, assume it is expired
    if (!decodedToken.iat) return true;

    // Define the token expiration period as 1 hour (3600 seconds)
    const expirationTime = decodedToken.iat + 3600; // Token valid for 1 hour

    return expirationTime < currentTime;
  } catch (error) {
    return true; // If there's an error decoding the token, consider it expired
  }
};
