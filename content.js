chrome.webRequest.onBeforeSendHeaders.addListener(
    details => {
        let headers = details.requestHeaders
        for (let i = 0; i < headers.length; i++) {
            if (headers[i].name === 'User-Agent') {
                headers[i].value = window.navigator.userAgent.split(" Edg")[0]
                break
            }
        }
        return { requestHeaders: headers };
    },
    { urls: ["<all_urls>"] }, 
    ['requestHeaders', 'blocking']
)