
import { AsideNew } from '../../AuxComponents/forMain/AsideNew/AsideNew'
import { PrincipalNew } from '../../AuxComponents/forMain/PrincipalNew/PrincipalNew'
import { Header } from '../../Layouts/Header/Header'
import { Main } from '../../Layouts/Main/Main'




export const Home = () => {
  return (
    <div className='home w-full h-full p-2'>
        <Header>
            <h1 className="title text-white ">Noticias</h1>
        </Header>
        <Main>
            <PrincipalNew>ff</PrincipalNew>
            <AsideNew>fff</AsideNew>
        </Main>
    </div>
  )
}
