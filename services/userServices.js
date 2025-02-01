import apiClient from '../apiClient';
import env from 'react-native-config';

const {API_BASE_URL} = env;
export function getCommunitiesService(userId) {
  return new Promise(function (resolve, reject) {
    let url = `${API_BASE_URL}/getCommunities/userId=${userId}`;
    apiClient
      .get(url)
      .then(function (result) {
        resolve(result);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function addCommunityService(userId, communityData) {
  return new Promise(function (resolve, reject) {
    let url = `${API_BASE_URL}/addCommunity/userId=${userId}`;
    // attach userid params to the url
    apiClient
      .post(url, communityData)
      .then(function (result) {
        resolve(result);
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });
}

export function getUserIdService() {
  return new Promise(function (resolve, reject) {
    let url = `${API_BASE_URL}/getUser`;
    apiClient
      .get(url)
      .then(function (result) {
        resolve(result);
      })
      .catch(function (error) {
        console.log(error, '####');
        reject(error);
      });
  });
}

export function addQuestionService(userId, requestBody) {
  return new Promise(function (resolve, reject) {
    let url = `${API_BASE_URL}/question/addQuestion/${userId}`;

    apiClient
      .post(url, requestBody)
      .then(function (result) {
        resolve(result);
      })
      .catch(function (error) {
        console.log(error, '$$$$');
        reject(error);
      });
  });
}

export function registerUserService(userData) {
  return new Promise(function (resolve, reject) {
    let url = `${API_BASE_URL}/register`;
    console.log(userData);
    apiClient
      .post(url, userData)
      .then(function (result) {
        resolve(result);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
