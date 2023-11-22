import apiCall from "../../shared/axios/apiCall"

export const fetchFileByName = (fileName) => {
    const file = apiCall.get(`/file/${fileName.queryKey[1]}`)
    return file
}