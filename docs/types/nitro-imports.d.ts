declare global {
  const __buildAssetsURL: typeof import('../../project/node_modules/nuxt/dist/core/runtime/nitro/paths')['buildAssetsURL']
  const __publicAssetsURL: typeof import('../../project/node_modules/nuxt/dist/core/runtime/nitro/paths')['publicAssetsURL']
  const appendCorsHeaders: typeof import('../../project/node_modules/h3')['appendCorsHeaders']
  const appendCorsPreflightHeaders: typeof import('../../project/node_modules/h3')['appendCorsPreflightHeaders']
  const appendHeader: typeof import('../../project/node_modules/h3')['appendHeader']
  const appendHeaders: typeof import('../../project/node_modules/h3')['appendHeaders']
  const appendResponseHeader: typeof import('../../project/node_modules/h3')['appendResponseHeader']
  const appendResponseHeaders: typeof import('../../project/node_modules/h3')['appendResponseHeaders']
  const assertMethod: typeof import('../../project/node_modules/h3')['assertMethod']
  const cachedEventHandler: typeof import('../../project/node_modules/nitropack/dist/runtime')['cachedEventHandler']
  const cachedFunction: typeof import('../../project/node_modules/nitropack/dist/runtime')['cachedFunction']
  const callNodeListener: typeof import('../../project/node_modules/h3')['callNodeListener']
  const clearResponseHeaders: typeof import('../../project/node_modules/h3')['clearResponseHeaders']
  const clearSession: typeof import('../../project/node_modules/h3')['clearSession']
  const createApp: typeof import('../../project/node_modules/h3')['createApp']
  const createAppEventHandler: typeof import('../../project/node_modules/h3')['createAppEventHandler']
  const createError: typeof import('../../project/node_modules/h3')['createError']
  const createEvent: typeof import('../../project/node_modules/h3')['createEvent']
  const createRouter: typeof import('../../project/node_modules/h3')['createRouter']
  const defaultContentType: typeof import('../../project/node_modules/h3')['defaultContentType']
  const defineAppConfig: typeof import('../../project/node_modules/nuxt/dist/core/runtime/nitro/config')['defineAppConfig']
  const defineCachedEventHandler: typeof import('../../project/node_modules/nitropack/dist/runtime')['defineCachedEventHandler']
  const defineCachedFunction: typeof import('../../project/node_modules/nitropack/dist/runtime')['defineCachedFunction']
  const defineEventHandler: typeof import('../../project/node_modules/h3')['defineEventHandler']
  const defineLazyEventHandler: typeof import('../../project/node_modules/h3')['defineLazyEventHandler']
  const defineNitroErrorHandler: typeof import('../../project/node_modules/nitropack/dist/runtime')['defineNitroErrorHandler']
  const defineNitroPlugin: typeof import('../../project/node_modules/nitropack/dist/runtime')['defineNitroPlugin']
  const defineNodeListener: typeof import('../../project/node_modules/h3')['defineNodeListener']
  const defineNodeMiddleware: typeof import('../../project/node_modules/h3')['defineNodeMiddleware']
  const defineRenderHandler: typeof import('../../project/node_modules/nitropack/dist/runtime')['defineRenderHandler']
  const defineRequestMiddleware: typeof import('../../project/node_modules/h3')['defineRequestMiddleware']
  const defineResponseMiddleware: typeof import('../../project/node_modules/h3')['defineResponseMiddleware']
  const deleteCookie: typeof import('../../project/node_modules/h3')['deleteCookie']
  const dynamicEventHandler: typeof import('../../project/node_modules/h3')['dynamicEventHandler']
  const eventHandler: typeof import('../../project/node_modules/h3')['eventHandler']
  const fetchWithEvent: typeof import('../../project/node_modules/h3')['fetchWithEvent']
  const fromNodeMiddleware: typeof import('../../project/node_modules/h3')['fromNodeMiddleware']
  const fromPlainHandler: typeof import('../../project/node_modules/h3')['fromPlainHandler']
  const fromWebHandler: typeof import('../../project/node_modules/h3')['fromWebHandler']
  const getCookie: typeof import('../../project/node_modules/h3')['getCookie']
  const getHeader: typeof import('../../project/node_modules/h3')['getHeader']
  const getHeaders: typeof import('../../project/node_modules/h3')['getHeaders']
  const getMethod: typeof import('../../project/node_modules/h3')['getMethod']
  const getProxyRequestHeaders: typeof import('../../project/node_modules/h3')['getProxyRequestHeaders']
  const getQuery: typeof import('../../project/node_modules/h3')['getQuery']
  const getRequestFingerprint: typeof import('../../project/node_modules/h3')['getRequestFingerprint']
  const getRequestHeader: typeof import('../../project/node_modules/h3')['getRequestHeader']
  const getRequestHeaders: typeof import('../../project/node_modules/h3')['getRequestHeaders']
  const getRequestHost: typeof import('../../project/node_modules/h3')['getRequestHost']
  const getRequestIP: typeof import('../../project/node_modules/h3')['getRequestIP']
  const getRequestPath: typeof import('../../project/node_modules/h3')['getRequestPath']
  const getRequestProtocol: typeof import('../../project/node_modules/h3')['getRequestProtocol']
  const getRequestURL: typeof import('../../project/node_modules/h3')['getRequestURL']
  const getRequestWebStream: typeof import('../../project/node_modules/h3')['getRequestWebStream']
  const getResponseHeader: typeof import('../../project/node_modules/h3')['getResponseHeader']
  const getResponseHeaders: typeof import('../../project/node_modules/h3')['getResponseHeaders']
  const getResponseStatus: typeof import('../../project/node_modules/h3')['getResponseStatus']
  const getResponseStatusText: typeof import('../../project/node_modules/h3')['getResponseStatusText']
  const getRouteRules: typeof import('../../project/node_modules/nitropack/dist/runtime')['getRouteRules']
  const getRouterParam: typeof import('../../project/node_modules/h3')['getRouterParam']
  const getRouterParams: typeof import('../../project/node_modules/h3')['getRouterParams']
  const getSession: typeof import('../../project/node_modules/h3')['getSession']
  const getValidatedQuery: typeof import('../../project/node_modules/h3')['getValidatedQuery']
  const getValidatedRouterParams: typeof import('../../project/node_modules/h3')['getValidatedRouterParams']
  const handleCacheHeaders: typeof import('../../project/node_modules/h3')['handleCacheHeaders']
  const handleCors: typeof import('../../project/node_modules/h3')['handleCors']
  const isCorsOriginAllowed: typeof import('../../project/node_modules/h3')['isCorsOriginAllowed']
  const isError: typeof import('../../project/node_modules/h3')['isError']
  const isEvent: typeof import('../../project/node_modules/h3')['isEvent']
  const isEventHandler: typeof import('../../project/node_modules/h3')['isEventHandler']
  const isMethod: typeof import('../../project/node_modules/h3')['isMethod']
  const isPreflightRequest: typeof import('../../project/node_modules/h3')['isPreflightRequest']
  const isStream: typeof import('../../project/node_modules/h3')['isStream']
  const isWebResponse: typeof import('../../project/node_modules/h3')['isWebResponse']
  const lazyEventHandler: typeof import('../../project/node_modules/h3')['lazyEventHandler']
  const nitroPlugin: typeof import('../../project/node_modules/nitropack/dist/runtime')['nitroPlugin']
  const parseCookies: typeof import('../../project/node_modules/h3')['parseCookies']
  const promisifyNodeListener: typeof import('../../project/node_modules/h3')['promisifyNodeListener']
  const proxyRequest: typeof import('../../project/node_modules/h3')['proxyRequest']
  const readBody: typeof import('../../project/node_modules/h3')['readBody']
  const readFormData: typeof import('../../project/node_modules/h3')['readFormData']
  const readMultipartFormData: typeof import('../../project/node_modules/h3')['readMultipartFormData']
  const readRawBody: typeof import('../../project/node_modules/h3')['readRawBody']
  const readValidatedBody: typeof import('../../project/node_modules/h3')['readValidatedBody']
  const removeResponseHeader: typeof import('../../project/node_modules/h3')['removeResponseHeader']
  const sanitizeStatusCode: typeof import('../../project/node_modules/h3')['sanitizeStatusCode']
  const sanitizeStatusMessage: typeof import('../../project/node_modules/h3')['sanitizeStatusMessage']
  const sealSession: typeof import('../../project/node_modules/h3')['sealSession']
  const send: typeof import('../../project/node_modules/h3')['send']
  const sendError: typeof import('../../project/node_modules/h3')['sendError']
  const sendNoContent: typeof import('../../project/node_modules/h3')['sendNoContent']
  const sendProxy: typeof import('../../project/node_modules/h3')['sendProxy']
  const sendRedirect: typeof import('../../project/node_modules/h3')['sendRedirect']
  const sendStream: typeof import('../../project/node_modules/h3')['sendStream']
  const sendWebResponse: typeof import('../../project/node_modules/h3')['sendWebResponse']
  const serveStatic: typeof import('../../project/node_modules/h3')['serveStatic']
  const setCookie: typeof import('../../project/node_modules/h3')['setCookie']
  const setHeader: typeof import('../../project/node_modules/h3')['setHeader']
  const setHeaders: typeof import('../../project/node_modules/h3')['setHeaders']
  const setResponseHeader: typeof import('../../project/node_modules/h3')['setResponseHeader']
  const setResponseHeaders: typeof import('../../project/node_modules/h3')['setResponseHeaders']
  const setResponseStatus: typeof import('../../project/node_modules/h3')['setResponseStatus']
  const splitCookiesString: typeof import('../../project/node_modules/h3')['splitCookiesString']
  const toEventHandler: typeof import('../../project/node_modules/h3')['toEventHandler']
  const toNodeListener: typeof import('../../project/node_modules/h3')['toNodeListener']
  const toPlainHandler: typeof import('../../project/node_modules/h3')['toPlainHandler']
  const toWebHandler: typeof import('../../project/node_modules/h3')['toWebHandler']
  const toWebRequest: typeof import('../../project/node_modules/h3')['toWebRequest']
  const unsealSession: typeof import('../../project/node_modules/h3')['unsealSession']
  const updateSession: typeof import('../../project/node_modules/h3')['updateSession']
  const useAppConfig: typeof import('../../project/node_modules/nitropack/dist/runtime')['useAppConfig']
  const useBase: typeof import('../../project/node_modules/h3')['useBase']
  const useEvent: typeof import('../../project/node_modules/nitropack/dist/runtime')['useEvent']
  const useNitroApp: typeof import('../../project/node_modules/nitropack/dist/runtime')['useNitroApp']
  const useRuntimeConfig: typeof import('../../project/node_modules/nitropack/dist/runtime')['useRuntimeConfig']
  const useSession: typeof import('../../project/node_modules/h3')['useSession']
  const useStorage: typeof import('../../project/node_modules/nitropack/dist/runtime')['useStorage']
  const writeEarlyHints: typeof import('../../project/node_modules/h3')['writeEarlyHints']
}
export { defineCachedFunction, defineCachedEventHandler, cachedFunction, cachedEventHandler, useRuntimeConfig, useStorage, useNitroApp, defineNitroPlugin, nitroPlugin, defineRenderHandler, getRouteRules, useAppConfig, useEvent, defineNitroErrorHandler } from '../../project/node_modules/nitropack/dist/runtime';
export { appendCorsHeaders, appendCorsPreflightHeaders, appendHeader, appendHeaders, appendResponseHeader, appendResponseHeaders, assertMethod, callNodeListener, clearResponseHeaders, clearSession, createApp, createAppEventHandler, createError, createEvent, createRouter, defaultContentType, defineEventHandler, defineLazyEventHandler, defineNodeListener, defineNodeMiddleware, defineRequestMiddleware, defineResponseMiddleware, deleteCookie, dynamicEventHandler, eventHandler, fetchWithEvent, fromNodeMiddleware, fromPlainHandler, fromWebHandler, getCookie, getHeader, getHeaders, getMethod, getProxyRequestHeaders, getQuery, getRequestFingerprint, getRequestHeader, getRequestHeaders, getRequestHost, getRequestIP, getRequestPath, getRequestProtocol, getRequestURL, getRequestWebStream, getResponseHeader, getResponseHeaders, getResponseStatus, getResponseStatusText, getRouterParam, getRouterParams, getSession, getValidatedQuery, getValidatedRouterParams, handleCacheHeaders, handleCors, isCorsOriginAllowed, isError, isEvent, isEventHandler, isMethod, isPreflightRequest, isStream, isWebResponse, lazyEventHandler, parseCookies, promisifyNodeListener, proxyRequest, readBody, readFormData, readMultipartFormData, readRawBody, readValidatedBody, removeResponseHeader, sanitizeStatusCode, sanitizeStatusMessage, sealSession, send, sendError, sendNoContent, sendProxy, sendRedirect, sendStream, sendWebResponse, serveStatic, setCookie, setHeader, setHeaders, setResponseHeader, setResponseHeaders, setResponseStatus, splitCookiesString, toEventHandler, toNodeListener, toPlainHandler, toWebHandler, toWebRequest, unsealSession, updateSession, useBase, useSession, writeEarlyHints } from 'h3';
export { buildAssetsURL as __buildAssetsURL, publicAssetsURL as __publicAssetsURL } from '../../project/node_modules/nuxt/dist/core/runtime/nitro/paths';
export { defineAppConfig } from '../../project/node_modules/nuxt/dist/core/runtime/nitro/config';