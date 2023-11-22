import Table from 'react-bootstrap/Table'

export const CustomTable = ({fileData}) =>{
    const TableHeader = ['File', 'Text', 'Number','Hex']
    const TableContent = fileData
    
    return (
        <div className='container'>
            <Table style={{marginTop: 50}} striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        {TableHeader.map((header)=>(
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {TableContent?.map((file, index)=>(
                        <tr key={index}>
                            <th>{index}</th>
                            <th>{file.filename}</th>
                            <th>{file.lines.text}</th>
                            <th>{file.lines.number}</th>
                            <th>{file.lines.hex}</th>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}