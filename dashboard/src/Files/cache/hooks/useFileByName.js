import { useQuery } from "@tanstack/react-query"
import { fileCacheKeys } from "../fileCacheKeys"
import { fetchFileByName } from "../../services/fetchFileByName"

//Hook para generar la consulta y que venga el archivo en formato json
export const useFileByName = (fileName) => {
    
    const fileByName = useQuery({
        queryKey: fileCacheKeys.byName(fileName),
        queryFn: fetchFileByName,
        config: {
            refetchOnWindowFocus: false,
        },
    })
    return fileByName
}