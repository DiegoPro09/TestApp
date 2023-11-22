import { useQuery } from "@tanstack/react-query"
import { fileCacheKeys } from "../fileCacheKeys"
import { fetchAllFiles } from "../../services/fetchAllFiles"

//Hook para generar la consulta y que vengan los datos de todos los archivos en formato json
export const useAllfiles = () => {
    const allfiles = useQuery({
        queryKey: fileCacheKeys.all(),
        queryFn: fetchAllFiles,
        config: {
            refetchOnWindowFocus: false,
        },
    })

    return allfiles
}