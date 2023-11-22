import { AllFilesPage } from "../Files/AllFilesPage"
import { FilePage } from "../Files/FilePage"

//Se crea el archivo routes para manejar las rutas del front y llamar a cada componente por cada path
export const routes = [
    {
        path:'/',
        name:'All Files',
        component: <AllFilesPage/>
    },
    {
        path:'/files',
        name:'All Files',
        component: <AllFilesPage/>
    },
    {
        path:'/file/:fileName',
        name:'File By Name',
        component: <FilePage/>
    }
]