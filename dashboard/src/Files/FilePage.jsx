import { CustomHeader } from "../components/Header/CustomHeader"
import { CustomTable } from "../components/Table/CustomTable"
import { useFileByName } from "./cache/hooks/useFileByName"
import { useParams } from 'react-router-dom'

export const FilePage = () => {

    const { fileName } = useParams()
    const { data: filebyName } = useFileByName(fileName)

    return(
        <>
            <CustomHeader/>
            <CustomTable fileData={filebyName?.data}/>
        </>
    )
}