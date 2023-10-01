import { ReactNode } from 'react'
import * as S from './StyledTable'
import { ContainerTable } from './StyledTable'

type TableRow = Record<string, string | number | ReactNode>

type TableProps = {
  columns: string[]
  data: TableRow[]
}

const TableUsers = ({ columns, data }: TableProps) => {
  return (
    <ContainerTable>
      <S.Table>
        <S.Header>
          <tr>
            {columns.map(columnText => (
              <S.HeaderData>{columnText}</S.HeaderData>
            ))}
          </tr>
        </S.Header>
        <tbody>
          {data.map(information => (
            <tr>
              {Object.values(information).map(cell => (
                <td>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </S.Table>
    </ContainerTable>
  )
}

export default TableUsers
