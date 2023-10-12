import { ContainerTable } from '@/components/TableUsers/StyledTable'
import { ReactNode } from 'react'
import * as S from '../components/TableUsers/StyledTable'
import Labels from '@/components/Labels/Labels'
import ButtonAllUsers from '@/components/ButtonUserRegisters/ButtonAllUsers'

function RegisterUsers() {
  type TableRow = Record<string, string | number | ReactNode>

  type TableProps = {
    columns: string[]
    data: TableRow[]
  }

  const data = [
    {
      user: 'Luiza Souza',
      age: 1,
      email: 'luiza@gmail.com',
      whatsapp: '31 98673-2322',
      specialty: 'Pediatria',
      city: 'Contagem'
    },
    {
      user: 'João Silva',
      email: 'joao@gmail.com',
      whatsapp: '41 98765-4321',
      specialty: 'Ortopedia',
      city: 'Curitiba',
      uf: 'PR',
      userType: 'Médico'
    },
    {
      user: 'Maria Santos',
      email: 'maria@gmail.com',
      whatsapp: '11 98765-1234',
      specialty: 'Ginecologia',
      city: 'São Paulo',
      uf: 'SP',
      userType: 'Médico'
    },
    {
      user: 'Pedro Rocha',
      email: 'pedro@gmail.com',
      whatsapp: '21 98888-5555',
      specialty: 'Cardiologia',
      city: 'Rio de Janeiro',
      uf: 'RJ',
      userType: 'Contratante'
    }
  ]

  const columns = [
    'Usuário',
    'E-mail',
    'WhatsApp',
    'Especialidade',
    'Cidade',
    'Estado',
    'Tipo de usuário'
  ]

  return (
    <>
      <p className=" px-[323px] text-4xl my-9 ">Usuários Cadastrados | Todos</p>
      <ButtonAllUsers />
      <div className="px-[306px] shadow-inner my-11 ">
        <Labels />
        <S.Table>
          <S.Header>
            <tr>
              {columns.map(columnText => (
                <S.HeaderData>{columnText}</S.HeaderData>
              ))}
            </tr>
          </S.Header>
          <tbody>
            {data.map((information, data) => (
              <tr
                key={data}
                className={` ${
                  data % 2 === 0 ? 'bg-[#FAFAFA]' : 'bg-[#F5F5F5]'
                }`}
              >
                {Object.values(information).map(cell => (
                  <td className="">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </S.Table>
      </div>
    </>
  )
}

export default RegisterUsers
