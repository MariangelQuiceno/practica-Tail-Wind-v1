
import { useContext } from 'react'
import { newsContext } from '../../Context/Context'
import { AsideNew } from '../../AuxComponents/forMain/AsideNew/AsideNew'
import { PrincipalNew } from '../../AuxComponents/forMain/PrincipalNew/PrincipalNew'
import { Header } from '../../Layouts/Header/Header'
import { Main } from '../../Layouts/Main/Main'





export const Home = () => {

  const context = useContext(newsContext)

  return (
    <div className='home w-full h-full p-2'>
        <Header>
            <h1 className="title text-white ">NauticalScope</h1>
        </Header>
        <Main>
            <PrincipalNew></PrincipalNew>
            <AsideNew></AsideNew>
        </Main>
    </div>
  )
}
