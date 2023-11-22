import apiCall from "../../shared/axios/apiCall"

export const fetchAllFiles = () => {
    const files = apiCall.get(`/files`)
    return files
}