import { CustomHeader } from "../components/Header/CustomHeader"
import { CustomTable } from "../components/Table/CustomTable"
import { useAllfiles } from "./cache/hooks/useAllFiles"

export const AllFilesPage = () => {

    const { data: files} = useAllfiles()

    return(
        <>
            <CustomHeader/>
            <CustomTable fileData={files?.data}/>
        </>
    )
}