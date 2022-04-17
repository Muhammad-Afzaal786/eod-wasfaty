import { useState } from "react";
import { authHeader } from "./authHeader";
import { baseUrl } from "./ApiCall";
import axios from "axios";

export const SC = {
  getCall,
  postCall,
  putCall,
  deleteCall,
  postCallLoginAdmin,
};

function getCall(url, page) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return axios
    .get(baseUrl + url, requestOptions)
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
}

function postCall(url, data, callbackProgressUpload = null, source) {
  Date.prototype.toJSON = function () {
    // return moment(this).format();
  };
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify(data),
    onUploadProgress: function (progressEvent) {
      // var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
      if (callbackProgressUpload) callbackProgressUpload(progressEvent);
    },
  };

  if (source) {
    requestOptions.cancelToken = source.token;
  }
  return axios
    .post(baseUrl + url, data, requestOptions)
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
}

function putCall(url, data) {
  const requestOptions = {
    method: "PUT",
    headers: authHeader(),
    body: JSON.stringify(data),
  };

  return axios
    .put(baseUrl + url, data, requestOptions)
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
}
function deleteCall(url) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
  };
  return axios
    .delete(baseUrl + url, requestOptions)
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
}
function postCallLoginAdmin(url, data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return axios
    .post(baseUrl + url, data, requestOptions)
    .then((response) => {
      if (response.data) {
        // handleLogin(response.data);
      }
      return response;
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
}
