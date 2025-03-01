import env from 'react-native-config';
import apiClient from '../apiClient';
import {
  getCommunitiesService,
  addCommunityService,
  getUserIdService,
  registerUserService,
  addQuestionService,
  getQuestionService,
  getAnswerService,
} from '../services/userServices';

export default function useApi() {
  const {API_BASE_URL} = env;

  function getUserId() {
    return new Promise(function (resolve, reject) {
      console.log('calling user id function');
      getUserIdService()
        .then(function (result) {
          resolve(result);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  function registerUser(userData) {
    return new Promise(function (resolve, reject) {
      registerUserService(userData)
        .then(function (result) {
          resolve(result);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  function getCarDetails() {
    return new Promise(function (resolve, reject) {
      let url = `${API_BASE_URL}/getCarDetails`;
      apiClient
        .get(url)
        .then(function (result) {
          resolve(result);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        });
    });
  }

  function addCommunity() {
    return new Promise(function (resolve, reject) {
      addCommunityService()
        .then(function (result) {
          resolve(result);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  function getCommunities() {
    return new Promise(function (resolve, reject) {
      getCommunitiesService()
        .then(function (result) {
          resolve(result);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  function addQuestion(userId, requestBody) {
    return new Promise(function (resolve, reject) {
      addQuestionService(userId, requestBody)
        .then(function (result) {
          resolve(result);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  function getQuestion(userId) {
    return new Promise(function (resolve, reject) {
      getQuestionService(userId)
        .then(function (result) {
          resolve(result);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  function getAnswer(questionId) {
    return new Promise(function (resolve, reject) {
      getAnswerService(questionId)
        .then(function (result) {
          resolve(result);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  const carApi = {
    getCarDetails,
  };

  const userApi = {
    getUserId,
    registerUser,
  };

  const communityApi = {
    getCommunities,
    addCommunity,
  };

  const questionApi = {
    addQuestion,
    getQuestion,
  };

  const answerApi = {
    getAnswer,
  };
  return {userApi, carApi, communityApi, questionApi, answerApi};
}
